param()

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$serverPidFile = Join-Path $repoRoot ".server.pid"

if (-not (Test-Path -LiteralPath $serverPidFile)) {
  Write-Host "No local server pid file was found."
  exit 0
}

$pidValue = Get-Content -Path $serverPidFile | Select-Object -First 1

if (-not $pidValue) {
  Remove-Item -LiteralPath $serverPidFile -Force
  Write-Host "Removed empty pid file."
  exit 0
}

$process = Get-Process -Id ([int]$pidValue) -ErrorAction SilentlyContinue
if ($process) {
  Stop-Process -Id $process.Id -Force
  Write-Host "Stopped local server process $($process.Id)."
} else {
  Write-Host "Process $pidValue is no longer running."
}

Remove-Item -LiteralPath $serverPidFile -Force
