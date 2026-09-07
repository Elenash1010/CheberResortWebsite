Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$outputPath = Join-Path $root 'Полная_выгрузка_текстов_сайта_ЧЕБЕР.doc'
$profilePath = Join-Path $root '.chrome-content-export'
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$chromeCandidates = @(
  'C:\Program Files\Google\Chrome\Application\chrome.exe',
  'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
)
$chrome = $chromeCandidates | Where-Object { Test-Path -LiteralPath $_ } | Select-Object -First 1
if (-not $chrome) { throw 'Не найден Chrome или Edge для отрисовки страниц.' }

function HtmlEncode([string]$value) {
  return [System.Net.WebUtility]::HtmlEncode($value)
}

function CleanText([string]$value) {
  if ([string]::IsNullOrWhiteSpace($value)) { return '' }
  $decoded = [System.Net.WebUtility]::HtmlDecode($value)
  $decoded = $decoded -replace '[\u00A0\u2007\u202F]', ' '
  $decoded = $decoded -replace '\s+', ' '
  return $decoded.Trim()
}

function GetAttribute([string]$attributes, [string]$name) {
  $pattern = '(?i)\b' + [regex]::Escape($name) + '\s*=\s*["''](.*?)["'']'
  $match = [regex]::Match($attributes, $pattern, 'Singleline')
  if ($match.Success) { return CleanText $match.Groups[1].Value }
  return ''
}

function GetBlockLabel([string]$tag, [string]$attributes) {
  $id = GetAttribute $attributes 'id'
  $class = GetAttribute $attributes 'class'
  $aria = GetAttribute $attributes 'aria-label'
  if ($aria) { return $aria }
  if ($id) { return $id }
  if ($class) {
    $useful = ($class -split '\s+' | Where-Object { $_ -notin @('section','reveal','is-visible') }) -join ', '
    if ($useful) { return $useful }
  }
  return $tag
}

function GetGapNote([string]$text) {
  if ($text -match '(?i)8 \(800\) 000|info@sosnovy\.example|wa\.me/70000000000') { return 'Недостаточно информации: опубликованы тестовые контактные данные; нужны рабочие телефон, почта или ссылка на аккаунт.' }
  if ($text -match '(?i)(заглушк|замените файл|реальную карту)') { return 'Недостаточно информации: опубликована заглушка вместо готового материала.' }
  if ($text -match '(?i)(нужно показать|важно показать|должн[аоы] быть|удобно вынести|можно встроить|на финальном этапе)') { return 'Недостаточно информации: вместо фактического текста посетителю показана редакционная инструкция.' }
  if ($text -match '(?i)(по запросу|уточнить условия|уточнить наличие|уточнить стоимость|уточнить расписание)') { return 'Недостаточно информации: точные условия, наличие, стоимость или расписание не опубликованы.' }
  return ''
}

function RenderPage([string]$path) {
  $uri = [System.Uri]::new($path).AbsoluteUri
  $runId = [guid]::NewGuid().ToString('N')
  $pageProfilePath = $profilePath + '-' + $runId
  $stdoutPath = Join-Path $root ('.content-export-' + $runId + '.html')
  $stderrPath = Join-Path $root ('.content-export-' + $runId + '.log')
  $chromeArgs = @(
    '--headless', '--disable-gpu', '--disable-software-rasterizer', '--no-sandbox',
    '--disable-crash-reporter', '--allow-file-access-from-files', '--virtual-time-budget=2500',
    "--user-data-dir=$pageProfilePath", '--dump-dom', $uri
  )
  $process = Start-Process -FilePath $chrome -ArgumentList $chromeArgs -WindowStyle Hidden -Wait -PassThru -RedirectStandardOutput $stdoutPath -RedirectStandardError $stderrPath
  $rendered = if (Test-Path -LiteralPath $stdoutPath) { [System.IO.File]::ReadAllText($stdoutPath, [System.Text.Encoding]::UTF8) } else { '' }
  if (Test-Path -LiteralPath $stdoutPath) { Remove-Item -LiteralPath $stdoutPath -Force }
  if (Test-Path -LiteralPath $stderrPath) { Remove-Item -LiteralPath $stderrPath -Force }
  if (-not $rendered -or $rendered -notmatch '<html') { throw "Не удалось отрисовать $path" }
  return $rendered
}

function ExtractPage([string]$path) {
  $source = RenderPage $path
  $title = CleanText ([regex]::Match($source, '<title[^>]*>(.*?)</title>', 'IgnoreCase,Singleline').Groups[1].Value)

  $metadata = New-Object System.Collections.Generic.List[object]
  foreach ($match in [regex]::Matches($source, '<meta\b([^>]*)>', 'IgnoreCase,Singleline')) {
    $attrs = $match.Groups[1].Value
    $name = GetAttribute $attrs 'name'
    if (-not $name) { $name = GetAttribute $attrs 'property' }
    $content = GetAttribute $attrs 'content'
    if ($name -and $content -and $name -notin @('viewport')) {
      $metadata.Add([pscustomobject]@{ Name = $name; Content = $content })
    }
  }

  $bodyMatch = [regex]::Match($source, '<body\b[^>]*>(.*?)</body>', 'IgnoreCase,Singleline')
  $body = if ($bodyMatch.Success) { $bodyMatch.Groups[1].Value } else { $source }
  $body = [regex]::Replace($body, '<(script|style|template|noscript)\b[^>]*>.*?</\1>', '', 'IgnoreCase,Singleline')
  $body = [regex]::Replace($body, '<!--.*?-->', '', 'Singleline')

  $body = [regex]::Replace($body, '<header\b([^>]*)>', "`n@@AREA@@Шапка сайта`n", 'IgnoreCase,Singleline')
  $body = [regex]::Replace($body, '<main\b([^>]*)>', "`n@@AREA@@Основное содержимое`n", 'IgnoreCase,Singleline')
  $body = [regex]::Replace($body, '<footer\b([^>]*)>', "`n@@AREA@@Подвал сайта`n", 'IgnoreCase,Singleline')
  $body = [regex]::Replace($body, '<nav\b([^>]*)>', {
    param($m) "`n@@BLOCK@@Навигация: $(GetBlockLabel 'nav' $m.Groups[1].Value)`n"
  }, 'IgnoreCase,Singleline')
  $body = [regex]::Replace($body, '<section\b([^>]*)>', {
    param($m) "`n@@BLOCK@@Блок: $(GetBlockLabel 'section' $m.Groups[1].Value)`n"
  }, 'IgnoreCase,Singleline')
  $body = [regex]::Replace($body, '<article\b([^>]*)>', {
    param($m) "`n@@GROUP@@Раздел / карточка: $(GetBlockLabel 'article' $m.Groups[1].Value)`n"
  }, 'IgnoreCase,Singleline')
  $body = [regex]::Replace($body, '<div\b([^>]*)>', {
    param($m)
    $class = GetAttribute $m.Groups[1].Value 'class'
    if ($class -match 'sticky-contact-bar') { return "`n@@BLOCK@@Мобильная панель связи`n" }
    if ($class -match '(modal|overlay)') { return "`n@@GROUP@@Интерактивное окно: $(GetBlockLabel 'div' $m.Groups[1].Value)`n" }
    return $m.Value
  }, 'IgnoreCase,Singleline')

  foreach ($level in 1..6) {
    $body = [regex]::Replace($body, "<h$level\b[^>]*>(.*?)</h$level>", "`n@@H$level@@`$1`n", 'IgnoreCase,Singleline')
  }
  $body = [regex]::Replace($body, '<li\b[^>]*>(.*?)</li>', "`n@@LI@@`$1`n", 'IgnoreCase,Singleline')
  $body = [regex]::Replace($body, '<(p|dt|dd|figcaption|address|legend|label|th|td|option)\b[^>]*>(.*?)</\1>', "`n@@P@@`$2`n", 'IgnoreCase,Singleline')
  $body = [regex]::Replace($body, '<br\s*/?>', "`n", 'IgnoreCase')

  $body = [regex]::Replace($body, '<img\b([^>]*)>', {
    param($m)
    $alt = GetAttribute $m.Groups[1].Value 'alt'
    if ($alt) { return "`n@@META@@Подпись изображения: $alt`n" }
    return ''
  }, 'IgnoreCase,Singleline')
  $body = [regex]::Replace($body, '<input\b([^>]*)>', {
    param($m)
    $placeholder = GetAttribute $m.Groups[1].Value 'placeholder'
    if ($placeholder) { return "`n@@META@@Подсказка поля: $placeholder`n" }
    return ''
  }, 'IgnoreCase,Singleline')
  $body = [regex]::Replace($body, '<(a|button|iframe)\b([^>]*)>', {
    param($m)
    $aria = GetAttribute $m.Groups[2].Value 'aria-label'
    $titleAttr = GetAttribute $m.Groups[2].Value 'title'
    $notes = @()
    if ($aria) { $notes += "Доступное название: $aria" }
    if ($titleAttr -and $titleAttr -ne $aria) { $notes += "Подсказка: $titleAttr" }
    if ($notes.Count) { return $m.Value + "`n@@META@@" + ($notes -join '; ') + "`n" }
    return $m.Value
  }, 'IgnoreCase,Singleline')

  $body = [regex]::Replace($body, '</(div|section|article|aside|figure|tr|ul|ol|nav|header|main|footer|form)>', "`n", 'IgnoreCase')
  $body = [regex]::Replace($body, '<[^>]+>', ' ')

  $items = New-Object System.Collections.Generic.List[object]
  foreach ($rawLine in ($body -split "`r?`n")) {
    $line = CleanText $rawLine
    if (-not $line) { continue }
    $kind = 'p'
    foreach ($marker in @('AREA','BLOCK','GROUP','H1','H2','H3','H4','H5','H6','LI','P','META')) {
      $prefix = "@@$marker@@"
      if ($line.StartsWith($prefix)) {
        $kind = $marker.ToLowerInvariant()
        $line = CleanText $line.Substring($prefix.Length)
        break
      }
    }
    if ($line) { $items.Add([pscustomobject]@{ Kind = $kind; Text = $line }) }
  }

  return [pscustomobject]@{
    File = [System.IO.Path]::GetFileName($path)
    Title = $title
    Metadata = $metadata
    Items = $items
  }
}

$order = @(
  'index.html','about.html','programs.html','vouchers.html','voucher-wellness.html','voucher-mother-child.html','voucher-antistress.html','voucher-children-health.html',
  'courses.html','course-wellness.html','course-children.html','course-pension.html','course-recovery.html','course-evening.html',
  'children.html','medical.html','medical-price.html','physiotherapy.html','baths.html','climate-therapy.html','massage.html',
  'services.html','pool-free-swim.html','pool-coach-swim.html','pool-children-swim.html','flipper-school.html',
  'hotel.html','offers.html','documents.html','contacts.html'
)

$actualHtml = @(Get-ChildItem -LiteralPath $root -File -Filter '*.html')
if ($actualHtml.Count -ne $order.Count) { throw "HTML-файлов: $($actualHtml.Count), в порядке экспорта: $($order.Count)." }
$missing = @($actualHtml.Name | Where-Object { $_ -notin $order })
if ($missing.Count) { throw "Не включены страницы: $($missing -join ', ')" }

$pages = New-Object System.Collections.Generic.List[object]
foreach ($name in $order) {
  Write-Output "Rendering: $name"
  $pages.Add((ExtractPage (Join-Path $root $name)))
}

$sb = New-Object System.Text.StringBuilder
[void]$sb.AppendLine('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Полная выгрузка текстов сайта ЧЕБЕР</title>')
[void]$sb.AppendLine('<style>@page{margin:1.2cm}body{font-family:Arial,sans-serif;font-size:9pt;line-height:1.12;color:#20242a}p{margin:0;padding:0}h1{font-size:18pt;line-height:1.1;color:#214f7b;margin:0 0 6pt}h2{font-size:13pt;line-height:1.1;color:#285f91;border-bottom:1px solid #b8c9d8;margin:6pt 0 2pt;padding:0 0 2pt}h3{font-size:11pt;line-height:1.1;color:#315f83;margin:4pt 0 1pt}h4{font-size:9.5pt;line-height:1.1;margin:3pt 0 1pt}.cover{text-align:center;margin-top:70px}.page{page-break-before:always}.area{font-size:12pt;line-height:1.1;font-weight:bold;color:#173f66;background:#e8f1f8;padding:3pt 5pt;margin:6pt 0 2pt}.block{font-size:10.5pt;line-height:1.1;font-weight:bold;color:#285f91;border-left:3px solid #6693b8;padding:2pt 5pt;margin:4pt 0 1pt}.group{font-size:9.5pt;line-height:1.1;font-weight:bold;color:#3d617e;margin:3pt 0 1pt}.meta{color:#67727d;font-size:8pt;line-height:1.05}.source{font-family:Consolas,monospace}.gap{background:#fff3a6;border-left:3px solid #dca900;padding:2pt 5pt;margin:1pt 0}.summary{background:#fff7c7;border:1px solid #e0bd3c;padding:3pt 5pt;margin:2pt 0}.attachment{white-space:pre-wrap;border:1px solid #ccd5dd;padding:5pt;font-size:8.5pt;line-height:1.08}ul,ol{margin:0;padding-top:0;padding-bottom:0}li{margin:0;padding:0}</style></head><body>')
[void]$sb.AppendLine('<div class="cover"><h1>Полная выгрузка всех текстов сайта «ЧЕБЕР»</h1><p>Структура: страница → область → блок → раздел / карточка</p><p>Повторяющиеся шапка, меню, подвал и панель связи приведены на каждой странице</p><p class="meta">Дата выгрузки: 25 августа 2026 г.</p></div>')
[void]$sb.AppendLine('<div class="page"><h1>Содержание и принцип выгрузки</h1><p>Документ содержит полный текст итогового DOM всех 30 страниц после выполнения JavaScript: метаданные, шапку, основную и мобильную навигацию, все блоки основного содержимого, карточки, списки, кнопки, формы, интерактивные окна, мобильную панель связи и подвал. Исходные формулировки не сокращены и не отредактированы.</p><p class="gap">Жёлтые блоки — редакционные замечания о недостатке информации. Они добавлены после исходного текста и не заменяют его.</p><ol>')
foreach ($page in $pages) { [void]$sb.AppendLine('<li>' + (HtmlEncode $page.Title) + ' <span class="source">(' + (HtmlEncode $page.File) + ')</span></li>') }
[void]$sb.AppendLine('</ol></div>')

$pageNo = 2
foreach ($page in $pages) {
  [void]$sb.AppendLine('<div class="page"><h1>' + $pageNo + '. ' + (HtmlEncode $page.Title) + '</h1><p class="meta source">Источник: ' + (HtmlEncode $page.File) + '</p>')
  [void]$sb.AppendLine('<h2>Метаданные страницы</h2><p><b>Title:</b> ' + (HtmlEncode $page.Title) + '</p>')
  foreach ($meta in $page.Metadata) { [void]$sb.AppendLine('<p><b>' + (HtmlEncode $meta.Name) + ':</b> ' + (HtmlEncode $meta.Content) + '</p>') }
  foreach ($item in $page.Items) {
    $encoded = HtmlEncode $item.Text
    switch ($item.Kind) {
      'area' { [void]$sb.AppendLine("<div class='area'>$encoded</div>") }
      'block' { [void]$sb.AppendLine("<div class='block'>$encoded</div>") }
      'group' { [void]$sb.AppendLine("<div class='group'>$encoded</div>") }
      'h1' { [void]$sb.AppendLine("<h2>$encoded</h2>") }
      'h2' { [void]$sb.AppendLine("<h2>$encoded</h2>") }
      'h3' { [void]$sb.AppendLine("<h3>$encoded</h3>") }
      { $_ -in @('h4','h5','h6') } { [void]$sb.AppendLine("<h4>$encoded</h4>") }
      'li' { [void]$sb.AppendLine("<ul><li>$encoded</li></ul>") }
      'meta' { [void]$sb.AppendLine("<p class='meta'>$encoded</p>") }
      default { [void]$sb.AppendLine("<p>$encoded</p>") }
    }
    $gapNote = GetGapNote $item.Text
    if ($gapNote) { [void]$sb.AppendLine("<div class='gap'>$(HtmlEncode $gapNote)</div>") }
  }
  [void]$sb.AppendLine('</div>')
  $pageNo++
}

[void]$sb.AppendLine('<div class="page"><h1>Приложение. Полные тексты опубликованных файлов</h1>')
$attachments = @(Get-ChildItem -LiteralPath (Join-Path $root 'assets/docs') -File | Sort-Object Name)
foreach ($file in $attachments) {
  $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
  [void]$sb.AppendLine('<h2>' + (HtmlEncode $file.Name) + '</h2><div class="attachment">' + (HtmlEncode $content) + '</div>')
  $gapNote = GetGapNote $content
  if ($gapNote) { [void]$sb.AppendLine('<div class="gap">' + (HtmlEncode $gapNote) + '</div>') }
}
[void]$sb.AppendLine('</div></body></html>')

[System.IO.File]::WriteAllText($outputPath, $sb.ToString(), $utf8NoBom)
Write-Output "Created: $outputPath"
Write-Output "Pages: $($pages.Count)"
Write-Output "Attachments: $($attachments.Count)"
Write-Output "Size: $((Get-Item -LiteralPath $outputPath).Length) bytes"
