param(
  [int]$Port = 3210,
  [string]$LocalHost = "127.0.0.1",
  [int]$WaitSeconds = 15,
  [switch]$SkipTunnel,
  [switch]$SkipBrowser
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$startLocalScript = Join-Path $PSScriptRoot "start-local-server.ps1"
$namedRemoteScript = Join-Path $PSScriptRoot "start-named-remote.ps1"
$configPath = Join-Path $repoRoot "deploy\cloudflare\config.yml"
$namedTunnelPidFile = Join-Path $repoRoot ".named-tunnel.pid"
$namedTunnelOutLog = Join-Path $repoRoot ".named-tunnel.out.log"
$namedTunnelErrLog = Join-Path $repoRoot ".named-tunnel.err.log"
$powershellExe = Join-Path $env:SystemRoot "System32\WindowsPowerShell\v1.0\powershell.exe"

function Get-ActiveProcessFromPidFile {
  param([string]$PidFilePath)

  if (-not (Test-Path -LiteralPath $PidFilePath)) {
    return $null
  }

  $pidValue = Get-Content -Path $PidFilePath | Select-Object -First 1
  if (-not $pidValue) {
    Remove-Item -LiteralPath $PidFilePath -Force
    return $null
  }

  $process = Get-Process -Id ([int]$pidValue) -ErrorAction SilentlyContinue
  if (-not $process) {
    Remove-Item -LiteralPath $PidFilePath -Force
    return $null
  }

  return $process
}

function Get-PublicHostname {
  param([string]$ConfigFilePath)

  if (-not (Test-Path -LiteralPath $ConfigFilePath)) {
    return $null
  }

  foreach ($line in Get-Content -Path $ConfigFilePath) {
    if ($line -match "hostname:\s*(\S+)") {
      return $matches[1]
    }
  }

  return $null
}

$localUrl = & $startLocalScript -Port $Port -LocalHost $LocalHost -WaitSeconds $WaitSeconds -OpenBrowser:(-not $SkipBrowser)
Write-Host "Local URL: $localUrl"

if ($SkipTunnel) {
  Write-Host "Named tunnel skipped."
  return
}

if (-not (Test-Path -LiteralPath $configPath)) {
  Write-Warning "Cloudflare config was not found at $configPath. Local server is ready, but no public URL was started."
  return
}

$publicHostname = Get-PublicHostname -ConfigFilePath $configPath
$existingTunnelProcess = Get-ActiveProcessFromPidFile -PidFilePath $namedTunnelPidFile

if ($existingTunnelProcess) {
  Write-Host "Named tunnel is already running in the background (PID $($existingTunnelProcess.Id))."
} else {
  Write-Host "Starting named tunnel in the background"

  try {
    $argumentList = @(
      "-NoProfile",
      "-ExecutionPolicy",
      "Bypass",
      "-File",
      $namedRemoteScript,
      "-Port",
      $Port,
      "-LocalHost",
      $LocalHost,
      "-WaitSeconds",
      $WaitSeconds
    )

    $tunnelProcess = Start-Process -FilePath $powershellExe -ArgumentList $argumentList -WorkingDirectory $repoRoot -RedirectStandardOutput $namedTunnelOutLog -RedirectStandardError $namedTunnelErrLog -WindowStyle Hidden -PassThru
    Set-Content -Path $namedTunnelPidFile -Value $tunnelProcess.Id

    Start-Sleep -Seconds 2

    $aliveTunnelProcess = Get-Process -Id $tunnelProcess.Id -ErrorAction SilentlyContinue
    if (-not $aliveTunnelProcess) {
      if (Test-Path -LiteralPath $namedTunnelPidFile) {
        Remove-Item -LiteralPath $namedTunnelPidFile -Force
      }
      throw "The named tunnel exited immediately. Check .named-tunnel.err.log for details."
    }

    Write-Host "Named tunnel started in the background (PID $($tunnelProcess.Id))."
  } catch {
    Write-Warning $_.Exception.Message
    Write-Warning "The local server is still running at $localUrl."
    return
  }
}

if ($publicHostname) {
  Write-Host "Public URL: https://$publicHostname"
}

Write-Host "Logs:"
Write-Host "  .server.out.log / .server.err.log"
Write-Host "  .named-tunnel.out.log / .named-tunnel.err.log"
