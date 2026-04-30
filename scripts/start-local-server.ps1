param(
  [int]$Port = 3210,
  [string]$LocalHost = "127.0.0.1",
  [int]$WaitSeconds = 15,
  [switch]$OpenBrowser
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$serverPidFile = Join-Path $repoRoot ".server.pid"
$stdoutLog = Join-Path $repoRoot ".server.out.log"
$stderrLog = Join-Path $repoRoot ".server.err.log"
$healthUrl = "http://${LocalHost}:${Port}/health"
$originUrl = "http://${LocalHost}:${Port}"

function Test-Health {
  param([string]$Url)

  try {
    $response = Invoke-RestMethod -Uri $Url -Method Get -TimeoutSec 2
    return $response.ok -eq $true
  } catch {
    return $false
  }
}

function Clear-StalePidFile {
  param([string]$PidFilePath)

  if (-not (Test-Path -LiteralPath $PidFilePath)) {
    return
  }

  $pidValue = Get-Content -Path $PidFilePath | Select-Object -First 1
  if (-not $pidValue) {
    Remove-Item -LiteralPath $PidFilePath -Force
    return
  }

  $process = Get-Process -Id ([int]$pidValue) -ErrorAction SilentlyContinue
  if (-not $process) {
    Remove-Item -LiteralPath $PidFilePath -Force
  }
}

Clear-StalePidFile -PidFilePath $serverPidFile

if (-not (Test-Health -Url $healthUrl)) {
  Write-Host "Starting local server at $originUrl"
  $serverProcess = Start-Process -FilePath "node" -ArgumentList "server.js" -WorkingDirectory $repoRoot -RedirectStandardOutput $stdoutLog -RedirectStandardError $stderrLog -WindowStyle Hidden -PassThru
  Set-Content -Path $serverPidFile -Value $serverProcess.Id

  $deadline = (Get-Date).AddSeconds($WaitSeconds)
  while ((Get-Date) -lt $deadline) {
    Start-Sleep -Milliseconds 500
    if (Test-Health -Url $healthUrl) {
      break
    }
  }

  if (-not (Test-Health -Url $healthUrl)) {
    $runningProcess = Get-Process -Id $serverProcess.Id -ErrorAction SilentlyContinue
    if ($runningProcess) {
      Stop-Process -Id $runningProcess.Id -Force
    }

    if (Test-Path -LiteralPath $serverPidFile) {
      Remove-Item -LiteralPath $serverPidFile -Force
    }

    throw "Local server did not become healthy at $healthUrl. Check .server.err.log for details."
  }
} else {
  Write-Host "Local server is already healthy at $originUrl"
}

if ($OpenBrowser) {
  try {
    Start-Process $originUrl | Out-Null
    Write-Host "Opened browser at $originUrl"
  } catch {
    Write-Warning "Unable to open the browser automatically. Open $originUrl manually."
  }
}

Write-Output $originUrl
