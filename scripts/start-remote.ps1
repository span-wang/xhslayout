param(
  [int]$Port = 3210,
  [string]$LocalHost = "127.0.0.1",
  [int]$WaitSeconds = 15
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$ensureScript = Join-Path $PSScriptRoot "ensure-cloudflared.ps1"
$startLocalScript = Join-Path $PSScriptRoot "start-local-server.ps1"
$remotePidFile = Join-Path $repoRoot ".remote.pid"

$originUrl = & $startLocalScript -Port $Port -LocalHost $LocalHost -WaitSeconds $WaitSeconds

$cloudflaredPath = & $ensureScript

Set-Content -Path $remotePidFile -Value $PID

try {
  Write-Host "Opening Cloudflare Tunnel for $originUrl"
  Write-Host "Keep this window open. Press Ctrl+C to stop the public link."
  & $cloudflaredPath tunnel --url $originUrl --no-autoupdate --protocol http2
} finally {
  if (Test-Path -LiteralPath $remotePidFile) {
    $pidValue = Get-Content -Path $remotePidFile | Select-Object -First 1
    if ($pidValue -eq "$PID") {
      Remove-Item -LiteralPath $remotePidFile -Force
    }
  }
}
