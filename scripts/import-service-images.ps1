param(
  [string]$SourceDir = "generated/service-photos"
)

$ErrorActionPreference = "Stop"

Set-Location (Join-Path $PSScriptRoot "..")

if (-not (Test-Path $SourceDir)) {
  throw "Source directory not found: $SourceDir"
}

$targetDir = "public/images/services"
if (-not (Test-Path $targetDir)) {
  New-Item -ItemType Directory -Path $targetDir | Out-Null
}

$contentFile = "src/data/content.ts"
if (-not (Test-Path $contentFile)) {
  throw "Could not find $contentFile"
}

$services = @(
  "general-consultation",
  "family-medicine",
  "pediatrics",
  "antenatal-care",
  "postnatal-care",
  "family-planning",
  "vaccination",
  "laboratory-services",
  "pharmacy",
  "hiv-testing-counselling",
  "diabetes-clinic",
  "hypertension-clinic",
  "minor-surgery",
  "wound-care",
  "emergency-care",
  "medical-checkups",
  "occupational-health",
  "nutrition-counselling"
)

$extensions = @("png", "jpg", "jpeg", "webp", "svg")

$content = Get-Content -Path $contentFile -Raw
$updated = $content
$copied = @()
$skipped = @()

foreach ($slug in $services) {
  $foundPath = $null
  $foundExt = $null

  foreach ($ext in $extensions) {
    $candidate = Join-Path $SourceDir ("$slug.$ext")
    if (Test-Path $candidate) {
      $foundPath = $candidate
      $foundExt = $ext
      break
    }
  }

  if (-not $foundPath) {
    $skipped += $slug
    continue
  }

  $targetPath = Join-Path $targetDir ("$slug.$foundExt")
  Copy-Item -Path $foundPath -Destination $targetPath -Force
  $copied += $slug

  $escapedSlug = [regex]::Escape($slug)
  $pattern = '(slug:\s*"' + $escapedSlug + '"[\s\S]*?image:\s*")/images/services/[^"]+(")'
  $replacement = '$1/images/services/' + $slug + '.' + $foundExt + '$2'
  $updated = [regex]::Replace($updated, $pattern, $replacement)
}

if ($updated -ne $content) {
  Set-Content -Path $contentFile -Value $updated -Encoding utf8
}

Write-Host "Imported images for: $($copied -join ', ')"
if ($skipped.Count -gt 0) {
  Write-Host "No source image found for: $($skipped -join ', ')"
}
Write-Host "Done. Review and deploy with: vercel --prod --yes"
