param()

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$toolsDir = Join-Path $repoRoot "tools"
$binaryPath = Join-Path $toolsDir "cloudflared.exe"
$sharedCandidates = @(
  (Join-Path $repoRoot "..\DESK\deploy\cloudflare\cloudflared_run.exe"),
  (Join-Path $repoRoot "..\DESK\deploy\cloudflare\cloudflared.exe"),
  (Join-Path $repoRoot "..\DESK - 副本\deploy\cloudflare\cloudflared_run.exe"),
  (Join-Path $repoRoot "..\DESK - 副本\deploy\cloudflare\cloudflared.exe")
)
$downloadUrl = "https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe"

if (Test-Path -LiteralPath $binaryPath) {
  Write-Output $binaryPath
  exit 0
}

foreach ($candidate in $sharedCandidates) {
  if (Test-Path -LiteralPath $candidate) {
    Write-Output (Resolve-Path -LiteralPath $candidate).Path
    exit 0
  }
}

New-Item -ItemType Directory -Path $toolsDir -Force | Out-Null

Write-Host "Downloading cloudflared to $binaryPath"
Invoke-WebRequest -Uri $downloadUrl -OutFile $binaryPath

Write-Output $binaryPath
