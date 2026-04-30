param()

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$namedTunnelPidFile = Join-Path $repoRoot ".named-tunnel.pid"

if (-not (Test-Path -LiteralPath $namedTunnelPidFile)) {
  Write-Host "No named tunnel pid file was found."
  exit 0
}

$pidValue = Get-Content -Path $namedTunnelPidFile | Select-Object -First 1

if (-not $pidValue) {
  Remove-Item -LiteralPath $namedTunnelPidFile -Force
  Write-Host "Removed empty named tunnel pid file."
  exit 0
}

$process = Get-Process -Id ([int]$pidValue) -ErrorAction SilentlyContinue
if ($process) {
  Stop-Process -Id $process.Id -Force
  Write-Host "Stopped named tunnel process $($process.Id)."
} else {
  Write-Host "Named tunnel process $pidValue is no longer running."
}

Remove-Item -LiteralPath $namedTunnelPidFile -Force
