Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$inputPath = Join-Path $root 'Полная_выгрузка_текстов_сайта_ЧЕБЕР.doc'
$outputPath = Join-Path $root 'Полная_выгрузка_текстов_сайта_ЧЕБЕР_компактная.docx'
$stagePath = Join-Path $root '.compact-docx-stage'
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

function XmlEncode([string]$value) {
  return [System.Security.SecurityElement]::Escape($value)
}

function PlainText([string]$html) {
  $text = [regex]::Replace($html, '<br\s*/?>', "`n", 'IgnoreCase')
  $text = [regex]::Replace($text, '<[^>]+>', '')
  $text = [System.Net.WebUtility]::HtmlDecode($text)
  $text = $text -replace '[\u00A0\u2007\u202F]', ' '
  $text = $text -replace '[ \t]+', ' '
  return $text.Trim()
}

function ParagraphXml([string]$text, [string]$kind) {
  if ([string]::IsNullOrWhiteSpace($text)) { return '' }
  $size = 18
  $bold = ''
  $color = '20242A'
  $before = 0
  $after = 0
  $shade = ''
  switch ($kind) {
    'h1' { $size = 32; $bold = '<w:b/>'; $color = '214F7B'; $after = 80 }
    'h2' { $size = 25; $bold = '<w:b/>'; $color = '285F91'; $before = 60; $after = 20 }
    'h3' { $size = 21; $bold = '<w:b/>'; $color = '315F83'; $before = 40; $after = 10 }
    'h4' { $size = 19; $bold = '<w:b/>'; $before = 30 }
    'area' { $size = 23; $bold = '<w:b/>'; $color = '173F66'; $before = 50; $after = 15; $shade = '<w:shd w:fill="E8F1F8"/>' }
    'block' { $size = 21; $bold = '<w:b/>'; $color = '285F91'; $before = 35; $after = 10 }
    'group' { $size = 19; $bold = '<w:b/>'; $color = '3D617E'; $before = 25 }
    'meta' { $size = 16; $color = '67727D' }
    'gap' { $size = 17; $shade = '<w:shd w:fill="FFF3A6"/>'; $before = 10; $after = 10 }
    'li' { $size = 18 }
    'attachment' { $size = 17 }
  }
  $prefix = if ($kind -eq 'li') { '• ' } else { '' }
  $encoded = XmlEncode ($prefix + $text)
  $pPr = "<w:pPr><w:spacing w:before=`"$before`" w:after=`"$after`" w:line=`"240`" w:lineRule=`"auto`"/>$shade</w:pPr>"
  $rPr = "<w:rPr><w:rFonts w:ascii=`"Arial`" w:hAnsi=`"Arial`" w:eastAsia=`"Arial`"/>$bold<w:color w:val=`"$color`"/><w:sz w:val=`"$size`"/><w:szCs w:val=`"$size`"/></w:rPr>"
  return "<w:p>$pPr<w:r>$rPr<w:t xml:space=`"preserve`">$encoded</w:t></w:r></w:p>"
}

$stream = New-Object System.IO.FileStream($inputPath, [System.IO.FileMode]::Open, [System.IO.FileAccess]::Read, [System.IO.FileShare]::ReadWrite)
try {
  $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8, $true)
  try { $html = $reader.ReadToEnd() } finally { $reader.Dispose() }
} finally {
  $stream.Dispose()
}
$body = [regex]::Match($html, '<body>(.*?)</body>', 'IgnoreCase,Singleline').Groups[1].Value
$pattern = '(?is)<div\s+class=["'']page["'']\s*>|<h([1-4])[^>]*>(.*?)</h\1>|<div\s+class=["''](area|block|group|gap|attachment)["''][^>]*>(.*?)</div>|<p(?:\s+class=["''](meta)["''])?[^>]*>(.*?)</p>|<li[^>]*>(.*?)</li>'
$matches = [regex]::Matches($body, $pattern)

$content = New-Object System.Text.StringBuilder
$pageDivs = 0
$paragraphs = 0
foreach ($match in $matches) {
  if ($match.Value -match '(?is)^<div\s+class=["'']page["'']') {
    $pageDivs++
    [void]$content.Append('<w:p><w:pPr><w:spacing w:before="0" w:after="0"/></w:pPr><w:r><w:br w:type="page"/></w:r></w:p>')
    continue
  }
  $kind = 'p'
  $text = ''
  if ($match.Groups[1].Success) {
    $kind = 'h' + $match.Groups[1].Value
    $text = PlainText $match.Groups[2].Value
  } elseif ($match.Groups[3].Success) {
    $kind = $match.Groups[3].Value.ToLowerInvariant()
    $text = PlainText $match.Groups[4].Value
  } elseif ($match.Groups[6].Success) {
    $kind = if ($match.Groups[5].Success) { 'meta' } else { 'p' }
    $text = PlainText $match.Groups[6].Value
  } elseif ($match.Groups[7].Success) {
    $kind = 'li'
    $text = PlainText $match.Groups[7].Value
  }
  $xml = ParagraphXml $text $kind
  if ($xml) { [void]$content.Append($xml); $paragraphs++ }
}

$documentXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    $content
    <w:sectPr>
      <w:pgSz w:w="11906" w:h="16838"/>
      <w:pgMar w:top="680" w:right="680" w:bottom="680" w:left="680" w:header="360" w:footer="360" w:gutter="0"/>
    </w:sectPr>
  </w:body>
</w:document>
"@

$contentTypes = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>
'@
$rels = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>
'@

if (Test-Path -LiteralPath $stagePath) { Remove-Item -LiteralPath $stagePath -Recurse -Force }
[void](New-Item -ItemType Directory -Path (Join-Path $stagePath '_rels') -Force)
[void](New-Item -ItemType Directory -Path (Join-Path $stagePath 'word') -Force)
[System.IO.File]::WriteAllText((Join-Path $stagePath '[Content_Types].xml'), $contentTypes, $utf8NoBom)
[System.IO.File]::WriteAllText((Join-Path $stagePath '_rels\.rels'), $rels, $utf8NoBom)
[System.IO.File]::WriteAllText((Join-Path $stagePath 'word\document.xml'), $documentXml, $utf8NoBom)

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem
if (Test-Path -LiteralPath $outputPath) { Remove-Item -LiteralPath $outputPath -Force }
$archive = [System.IO.Compression.ZipFile]::Open($outputPath, [System.IO.Compression.ZipArchiveMode]::Create)
try {
  [void][System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, (Join-Path $stagePath '[Content_Types].xml'), '[Content_Types].xml')
  [void][System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, (Join-Path $stagePath '_rels\.rels'), '_rels/.rels')
  [void][System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, (Join-Path $stagePath 'word\document.xml'), 'word/document.xml')
} finally {
  $archive.Dispose()
}
Remove-Item -LiteralPath $stagePath -Recurse -Force

Write-Output "Created: $outputPath"
Write-Output "Page breaks: $pageDivs"
Write-Output "Paragraphs: $paragraphs"
Write-Output "Size: $((Get-Item -LiteralPath $outputPath).Length) bytes"
