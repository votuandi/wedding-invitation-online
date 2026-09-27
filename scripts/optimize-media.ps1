<#!
.SYNOPSIS
Builds WebP delivery assets from the original invitation media.

.DESCRIPTION
Original photos remain in src/assets/img. This script writes generated assets to
src/assets/optimized and requires ffmpeg on PATH. Re-run it after replacing a
source image; generated files are intentionally checked in so production builds
do not need an image-processing dependency.
#>

$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$sourceRoot = Join-Path $projectRoot 'src/assets/img'
$outputRoot = Join-Path $projectRoot 'src/assets/optimized'

function Convert-ToWebp($source, $destination, $maxWidth) {
  $destinationDirectory = Split-Path -Parent $destination
  New-Item -ItemType Directory -Force -Path $destinationDirectory | Out-Null
  & ffmpeg -y -loglevel error -i $source -vf "scale='min($maxWidth,iw)':-2" -c:v libwebp -q:v 82 -compression_level 6 $destination
  if ($LASTEXITCODE -ne 0) { throw "ffmpeg failed for $source" }
}

Get-ChildItem $sourceRoot -Recurse -File | Where-Object { $_.Extension -in '.jpg', '.jpeg', '.png' } | ForEach-Object {
  $relative = $_.FullName.Substring($sourceRoot.Length + 1)
  $relativeWithoutExtension = [System.IO.Path]::ChangeExtension($relative, $null).TrimEnd('.')
  $baseOutput = Join-Path $outputRoot "$relativeWithoutExtension.webp"

  # Full-width album and hero photos receive two browser-selected renditions.
  if ($relative -like 'album\*' -or $relative -like 'top-splide-photos\*') {
    Convert-ToWebp $_.FullName (Join-Path $outputRoot "$relativeWithoutExtension-640.webp") 640
    Convert-ToWebp $_.FullName (Join-Path $outputRoot "$relativeWithoutExtension-960.webp") 960
  } else {
    # 960px covers the rendered size of content imagery while preserving alpha.
    Convert-ToWebp $_.FullName $baseOutput 960
  }
}
