param(
  [int]$Port = 3210,
  [string]$LocalHost = "127.0.0.1",
  [int]$WaitSeconds = 15
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$ensureScript = Join-Path $PSScriptRoot "ensure-cloudflared.ps1"
$startLocalScript = Join-Path $PSScriptRoot "start-local-server.ps1"
$configPath = Join-Path $repoRoot "deploy\cloudflare\config.yml"
$namedTunnelPidFile = Join-Path $repoRoot ".named-tunnel.pid"

function Get-PublicHostname {
  param([string]$ConfigFilePath)

  foreach ($line in Get-Content -Path $ConfigFilePath) {
    if ($line -match "hostname:\s*(\S+)") {
      return $matches[1]
    }
  }

  return $null
}

if (-not (Test-Path -LiteralPath $configPath)) {
  throw "Missing Cloudflare config at $configPath"
}

$originUrl = & $startLocalScript -Port $Port -LocalHost $LocalHost -WaitSeconds $WaitSeconds

$cloudflaredPath = & $ensureScript
$publicHostname = Get-PublicHostname -ConfigFilePath $configPath

Set-Content -Path $namedTunnelPidFile -Value $PID

try {
  Write-Host "Opening named Cloudflare Tunnel with $configPath"
  if ($publicHostname) {
    Write-Host "Public hostname: https://$publicHostname"
  }
  Write-Host "Keep this window open. Press Ctrl+C to stop the public link."
  & $cloudflaredPath tunnel --config $configPath --protocol http2 run
} finally {
  if (Test-Path -LiteralPath $namedTunnelPidFile) {
    $pidValue = Get-Content -Path $namedTunnelPidFile | Select-Object -First 1
    if ($pidValue -eq "$PID") {
      Remove-Item -LiteralPath $namedTunnelPidFile -Force
    }
  }
}
