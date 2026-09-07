Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$outputPath = Join-Path $root 'Аудит_контента_сайта_ЧЕБЕР.doc'
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

function HtmlEncode([string]$value) {
  return [System.Net.WebUtility]::HtmlEncode($value)
}

function CleanText([string]$value) {
  $decoded = [System.Net.WebUtility]::HtmlDecode($value)
  $decoded = $decoded -replace '[\u00A0\u2007\u202F]', ' '
  $decoded = $decoded -replace '\s+', ' '
  return $decoded.Trim()
}

function ExtractPage([string]$path) {
  $source = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
  $title = [regex]::Match($source, '<title[^>]*>(.*?)</title>', 'IgnoreCase,Singleline').Groups[1].Value
  $metaPattern = @'
<meta\s+name=["']description["']\s+content=["'](.*?)["']
'@
  $description = [regex]::Match($source, $metaPattern.Trim(), 'IgnoreCase,Singleline').Groups[1].Value
  $mainMatch = [regex]::Match($source, '<main\b[^>]*>(.*?)</main>', 'IgnoreCase,Singleline')
  $body = if ($mainMatch.Success) { $mainMatch.Groups[1].Value } else { $source }

  $body = [regex]::Replace($body, '<(script|style|svg|template)\b[^>]*>.*?</\1>', '', 'IgnoreCase,Singleline')
  $body = [regex]::Replace($body, '<!--.*?-->', '', 'Singleline')
  $body = [regex]::Replace($body, '<h1\b[^>]*>(.*?)</h1>', "`n@@H1@@`$1`n", 'IgnoreCase,Singleline')
  $body = [regex]::Replace($body, '<h2\b[^>]*>(.*?)</h2>', "`n@@H2@@`$1`n", 'IgnoreCase,Singleline')
  $body = [regex]::Replace($body, '<h3\b[^>]*>(.*?)</h3>', "`n@@H3@@`$1`n", 'IgnoreCase,Singleline')
  $body = [regex]::Replace($body, '<h[4-6]\b[^>]*>(.*?)</h[4-6]>', "`n@@H4@@`$1`n", 'IgnoreCase,Singleline')
  $body = [regex]::Replace($body, '<li\b[^>]*>(.*?)</li>', "`n@@LI@@`$1`n", 'IgnoreCase,Singleline')
  $body = [regex]::Replace($body, '<(p|dt|dd|figcaption|address)\b[^>]*>(.*?)</\1>', "`n@@P@@`$2`n", 'IgnoreCase,Singleline')
  $body = [regex]::Replace($body, '<br\s*/?>', "`n", 'IgnoreCase')
  $body = [regex]::Replace($body, '</(div|section|article|aside|figure|tr|ul|ol)>', "`n", 'IgnoreCase')
  $body = [regex]::Replace($body, '<[^>]+>', ' ')

  $items = New-Object System.Collections.Generic.List[object]
  $lastText = ''
  foreach ($rawLine in ($body -split "`r?`n")) {
    $line = CleanText $rawLine
    if ([string]::IsNullOrWhiteSpace($line)) { continue }
    $kind = 'p'
    if ($line.StartsWith('@@H1@@')) { $kind = 'h1'; $line = CleanText $line.Substring(6) }
    elseif ($line.StartsWith('@@H2@@')) { $kind = 'h2'; $line = CleanText $line.Substring(6) }
    elseif ($line.StartsWith('@@H3@@')) { $kind = 'h3'; $line = CleanText $line.Substring(6) }
    elseif ($line.StartsWith('@@H4@@')) { $kind = 'h4'; $line = CleanText $line.Substring(6) }
    elseif ($line.StartsWith('@@LI@@')) { $kind = 'li'; $line = CleanText $line.Substring(6) }
    elseif ($line.StartsWith('@@P@@')) { $kind = 'p'; $line = CleanText $line.Substring(5) }
    if ($line -in @('×', '←', '→', '↗', 'Предыдущий слайд', 'Следующий слайд')) { continue }
    if ($line -eq $lastText) { continue }
    $items.Add([pscustomobject]@{ Kind = $kind; Text = $line })
    $lastText = $line
  }

  return [pscustomobject]@{
    File = [System.IO.Path]::GetFileName($path)
    Title = CleanText $title
    Description = CleanText $description
    Items = $items
  }
}

function IsGap([string]$text) {
  return $text -match '(?i)(заглушк|нужно показать|важно показать|должн[аоы] быть|можно встроить|на финальном этапе|удобно вынести|обновляется вручную|по запросу|уточнить (условия|наличие|стоимость|расписание)|8 \(800\) 000|info@sosnovy\.example|замените файл|реальную карту|сухого описания|без финальных фото)'
}

$order = @(
  'index.html','about.html','programs.html','vouchers.html','voucher-wellness.html','voucher-mother-child.html','voucher-antistress.html','voucher-children-health.html',
  'courses.html','course-wellness.html','course-children.html','course-pension.html','course-recovery.html','course-evening.html',
  'children.html','medical.html','medical-price.html','physiotherapy.html','baths.html','climate-therapy.html','massage.html',
  'services.html','pool-free-swim.html','pool-coach-swim.html','pool-children-swim.html','flipper-school.html',
  'hotel.html','offers.html','documents.html','contacts.html'
)

$pages = foreach ($name in $order) {
  $path = Join-Path $root $name
  if (Test-Path -LiteralPath $path) { ExtractPage $path }
}

$sb = New-Object System.Text.StringBuilder
[void]$sb.AppendLine('<!DOCTYPE html><html><head><meta charset="utf-8">')
[void]$sb.AppendLine('<title>Аудит контента сайта ЧЕБЕР</title>')
[void]$sb.AppendLine('<style>@page{margin:2cm}body{font-family:Arial,sans-serif;font-size:10.5pt;line-height:1.38;color:#20242a}h1{font-size:24pt;color:#214f7b}h2{font-size:18pt;color:#285f91;border-bottom:1px solid #b8c9d8;padding-bottom:5px}h3{font-size:13.5pt;color:#315f83}h4{font-size:11.5pt}.cover{text-align:center;margin-top:180px}.page{page-break-before:always}.meta{color:#66717c;font-size:9pt}.gap{background:#fff19d;border-left:4px solid #e0a800;padding:5px 8px}.gap-summary{background:#fff7c7;border:1px solid #e0bd3c;padding:10px 14px;margin:8px 0}.note{background:#edf5fb;border-left:4px solid #4b7faa;padding:10px 14px}.toc li{margin:3px 0}li{margin:3px 0}.source{font-family:Consolas,monospace;font-size:8.5pt;color:#566}.attachment{white-space:pre-wrap;border:1px solid #ccd5dd;padding:12px}</style></head><body>')
[void]$sb.AppendLine('<div class="cover"><h1>Полная карта опубликованного контента сайта «ЧЕБЕР»</h1><p>Структура: страница → блок → раздел</p><p>С указанием мест, где информации недостаточно</p><p class="meta">Дата аудита: 23 августа 2026 г.</p></div>')

[void]$sb.AppendLine('<div class="page"><h1>1. Как читать документ</h1><p class="note">В документ включён весь видимый текст 30 HTML-страниц и содержимое четырёх файлов, доступных для скачивания. Жёлтым выделены редакционные формулировки, заглушки, данные «по запросу» и места, где сайт сам указывает на необходимость уточнения или дополнения.</p>')
[void]$sb.AppendLine('<h2>Ключевые зоны недостаточности</h2>')
$gaps = @(
  '<b>Контакты не готовы к публикации.</b> На внутренних страницах используется номер 8 (800) 000-00-00; указан тестовый адрес info@sosnovy.example; ссылки Telegram и WhatsApp не ведут в конкретные аккаунты. На главной опубликован другой номер — 8 (800) 505-26-96.',
  '<b>Нет точного адреса и схемы проезда.</b> Опубликовано только «г. Ижевск, территория санатория „Сосновый“»; вместо карты стоит редакционная заглушка.',
  '<b>Официальные документы отсутствуют.</b> Четыре скачиваемых TXT-файла прямо обозначены как заглушки: документы на заезд, правила проживания, лицензии/реквизиты и памятка по оплате.',
  '<b>Не определено единое название бренда.</b> На сайте параллельно используются «ЧЕБЕР» и «Сосновый», в том числе в title, контактах и описаниях путёвок.',
  '<b>Страницы «О санатории», «Программы», «Дети», «Гостиница» и «Документы» частично написаны как техническое задание.</b> Формулировки «нужно показать», «удобно вынести», «страница должна» не сообщают пользователю фактов об объекте.',
  '<b>Не хватает подтверждённых сведений о санатории.</b> Нет юридического наименования, ИНН/ОГРН, номера и срока медицинской лицензии, истории, точной локации, транспортной доступности, характеристик территории и номерного фонда.',
  '<b>Цены и условия требуют верификации.</b> Не указаны даты действия прайсов и тарифов, состав тарифа для части карточек, правила доплат/возврата; встречаются «по запросу» и подозрительно высокие цены за сутки у отдельных путёвок.',
  '<b>Неполные продуктовые страницы.</b> Путёвки «Дыхательная», «Пищеварение», «Выходного дня» имеют только карточки без детального состава; у бассейна и школы плавания нет расписания, стоимости, параметров бассейна, требований к справкам и данных тренеров.',
  '<b>Гостиничный раздел недостаточен для бронирования.</b> Нет полного перечня категорий, фотогалерей по номерам, площади и комплектации каждой категории, условий размещения детей/допмест, питания, отмены и актуального календаря наличия.',
  '<b>Медицинский контент нуждается в редакторской и юридической проверке.</b> Есть сильные лечебные обещания и перечни показаний/противопоказаний без авторства, источников, даты актуализации и сведений о специалисте, утвердившем текст.',
  '<b>Специалисты описаны неравномерно.</b> Для карточек не хватает единообразных должностей, специализаций, образования, сертификатов, стажа, расписания и способов записи; присутствует тестовое имя «Иванов Иван Иванович».',
  '<b>Отзывы не верифицированы.</b> Нет дат посещения, источника, ссылок или признака согласия на публикацию.',
  '<b>Нет обязательной сервисной информации.</b> Не опубликованы политика конфиденциальности, согласие на обработку персональных данных, правила бронирования/оплаты/возврата, сведения о доступности для маломобильных гостей и экстренные контакты.'
)
foreach ($gap in $gaps) { [void]$sb.AppendLine("<div class='gap-summary'>$gap</div>") }
[void]$sb.AppendLine('<h2>Оглавление страниц</h2><ol class="toc">')
foreach ($page in $pages) { [void]$sb.AppendLine('<li>' + (HtmlEncode $page.Title) + ' <span class="source">(' + (HtmlEncode $page.File) + ')</span></li>') }
[void]$sb.AppendLine('</ol></div>')

$pageNo = 2
foreach ($page in $pages) {
  [void]$sb.AppendLine('<div class="page">')
  [void]$sb.AppendLine('<h1>' + $pageNo + '. ' + (HtmlEncode $page.Title) + '</h1>')
  [void]$sb.AppendLine('<p class="meta">Источник: ' + (HtmlEncode $page.File) + '</p>')
  if ($page.Description) { [void]$sb.AppendLine('<p><b>Описание страницы:</b> ' + (HtmlEncode $page.Description) + '</p>') }
  foreach ($item in $page.Items) {
    $encoded = HtmlEncode $item.Text
    $class = if (IsGap $item.Text) { ' class="gap"' } else { '' }
    switch ($item.Kind) {
      'h1' { [void]$sb.AppendLine("<h2$class>$encoded</h2>") }
      'h2' { [void]$sb.AppendLine("<h2$class>$encoded</h2>") }
      'h3' { [void]$sb.AppendLine("<h3$class>$encoded</h3>") }
      'h4' { [void]$sb.AppendLine("<h4$class>$encoded</h4>") }
      'li' { [void]$sb.AppendLine("<ul><li$class>$encoded</li></ul>") }
      default { [void]$sb.AppendLine("<p$class>$encoded</p>") }
    }
  }
  [void]$sb.AppendLine('</div>')
  $pageNo++
}

[void]$sb.AppendLine('<div class="page"><h1>Приложение. Содержимое файлов для скачивания</h1>')
foreach ($file in (Get-ChildItem -LiteralPath (Join-Path $root 'assets/docs') -File -Filter '*.txt' | Sort-Object Name)) {
  $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
  [void]$sb.AppendLine('<h2>' + (HtmlEncode $file.Name) + '</h2>')
  [void]$sb.AppendLine('<div class="attachment gap">' + (HtmlEncode $content) + '</div>')
}
[void]$sb.AppendLine('</div></body></html>')

[System.IO.File]::WriteAllText($outputPath, $sb.ToString(), $utf8NoBom)
Write-Output "Created: $outputPath"
Write-Output "Pages: $($pages.Count)"
Write-Output "Size: $((Get-Item -LiteralPath $outputPath).Length) bytes"

