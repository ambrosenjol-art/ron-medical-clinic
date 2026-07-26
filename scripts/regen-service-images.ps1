$services = @(
  @{ slug='general-consultation'; subtitle='First-line diagnosis and treatment'; accent='#0ea5e9'; icon='cross' },
  @{ slug='family-medicine'; subtitle='Continuous care for all age groups'; accent='#14b8a6'; icon='heart' },
  @{ slug='pediatrics'; subtitle='Child-friendly care and growth monitoring'; accent='#22c55e'; icon='plus' },
  @{ slug='antenatal-care'; subtitle='Pregnancy monitoring and maternal support'; accent='#f59e0b'; icon='heart' },
  @{ slug='postnatal-care'; subtitle='Mother and newborn recovery support'; accent='#f97316'; icon='heart' },
  @{ slug='family-planning'; subtitle='Private reproductive health counselling'; accent='#ec4899'; icon='shield' },
  @{ slug='vaccination'; subtitle='Preventive immunization services'; accent='#8b5cf6'; icon='plus' },
  @{ slug='laboratory-services'; subtitle='Accurate tests for faster decisions'; accent='#0ea5e9'; icon='flask' },
  @{ slug='pharmacy'; subtitle='Safe dispensing and medicine guidance'; accent='#2563eb'; icon='capsule' },
  @{ slug='hiv-testing-counselling'; subtitle='Confidential testing and counselling'; accent='#ef4444'; icon='shield' },
  @{ slug='diabetes-clinic'; subtitle='Glucose monitoring and long-term control'; accent='#06b6d4'; icon='chart' },
  @{ slug='hypertension-clinic'; subtitle='Blood pressure tracking and risk reduction'; accent='#dc2626'; icon='heart' },
  @{ slug='minor-surgery'; subtitle='Safe outpatient procedures'; accent='#334155'; icon='plus' },
  @{ slug='wound-care'; subtitle='Dressing, healing and infection prevention'; accent='#16a34a'; icon='shield' },
  @{ slug='emergency-care'; subtitle='Rapid response for urgent symptoms'; accent='#b91c1c'; icon='cross' },
  @{ slug='medical-checkups'; subtitle='Preventive screenings and wellness reviews'; accent='#0284c7'; icon='chart' },
  @{ slug='occupational-health'; subtitle='Work fitness and compliance assessments'; accent='#475569'; icon='shield' },
  @{ slug='nutrition-counselling'; subtitle='Practical diet plans for healthier living'; accent='#65a30d'; icon='leaf' }
)

function To-Title([string]$slug) {
  $parts = $slug -split '-'
  $caps = @()
  foreach ($p in $parts) { if ($p.Length -gt 0) { $caps += ($p.Substring(0,1).ToUpper() + $p.Substring(1)) } }
  [string]::Join(' ', $caps)
}

function Icon-Svg([string]$kind,[string]$color) {
  switch ($kind) {
    'cross'   { "<rect x='-52' y='-12' width='104' height='24' rx='10' fill='$color'/><rect x='-12' y='-52' width='24' height='104' rx='10' fill='$color'/>"; break }
    'plus'    { "<rect x='-52' y='-12' width='104' height='24' rx='10' fill='$color'/><rect x='-12' y='-52' width='24' height='104' rx='10' fill='$color'/>"; break }
    'heart'   { "<path d='M0 52C-54 12 -84 -16 -84 -54C-84 -84 -62 -104 -34 -104C-16 -104 -2 -94 8 -80C18 -94 32 -104 50 -104C78 -104 100 -84 100 -54C100 -16 70 12 16 52L8 58L0 52Z' fill='$color'/>"; break }
    'flask'   { "<path d='M-24 -102H24V-78L48 -26C62 -2 60 30 42 50C30 64 12 72 -8 72H-8C-28 72 -46 64 -58 50C-76 30 -78 -2 -64 -26L-40 -78V-102H-24Z' fill='none' stroke='$color' stroke-width='14'/><rect x='-36' y='12' width='56' height='20' rx='10' fill='$color' opacity='0.25'/>"; break }
    'capsule' { "<rect x='-90' y='-30' width='180' height='60' rx='30' fill='none' stroke='$color' stroke-width='14'/><line x1='0' y1='-30' x2='0' y2='30' stroke='$color' stroke-width='14'/><rect x='-84' y='-24' width='78' height='48' rx='24' fill='$color' opacity='0.2'/>"; break }
    'chart'   { "<line x1='-80' y1='72' x2='80' y2='72' stroke='$color' stroke-width='12'/><rect x='-62' y='16' width='24' height='56' rx='6' fill='$color'/><rect x='-18' y='-8' width='24' height='80' rx='6' fill='$color'/><rect x='26' y='-34' width='24' height='106' rx='6' fill='$color'/>"; break }
    'leaf'    { "<path d='M-70 40C-52 -46 22 -90 96 -96C90 -20 56 56 -30 78C-16 42 -2 20 28 -6C-12 8 -40 24 -70 40Z' fill='$color'/>"; break }
    'shield'  { "<path d='M0 -112L86 -74V-8C86 48 54 96 0 120C-54 96 -86 48 -86 -8V-74L0 -112Z' fill='none' stroke='$color' stroke-width='14'/><path d='M0 -58V46M-40 -6H40' stroke='$color' stroke-width='12'/>"; break }
    default   { "<circle cx='0' cy='0' r='58' fill='none' stroke='$color' stroke-width='14'/>" }
  }
}

foreach ($s in $services) {
  $title = To-Title $s.slug
  $iconSvg = Icon-Svg $s.icon $s.accent
  $svg = @"
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 780' role='img' aria-labelledby='title desc'>
  <title id='title'>$title</title>
  <desc id='desc'>$($s.subtitle)</desc>
  <defs>
    <linearGradient id='bg' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0%' stop-color='#f0f9ff'/>
      <stop offset='100%' stop-color='#ecfeff'/>
    </linearGradient>
    <linearGradient id='band' x1='0' y1='0' x2='1' y2='0'>
      <stop offset='0%' stop-color='$($s.accent)'/>
      <stop offset='100%' stop-color='#0f172a'/>
    </linearGradient>
  </defs>
  <rect width='1200' height='780' fill='url(#bg)'/>
  <rect x='78' y='72' width='1044' height='636' rx='38' fill='#ffffff'/>
  <rect x='78' y='72' width='1044' height='152' rx='38' fill='url(#band)'/>
  <circle cx='1002' cy='148' r='62' fill='#ffffff' opacity='0.14'/>
  <circle cx='168' cy='148' r='36' fill='#ffffff' opacity='0.14'/>
  <text x='132' y='165' fill='#ffffff' font-family='Segoe UI, Arial, sans-serif' font-size='52' font-weight='700'>RON Medical Center</text>
  <text x='132' y='318' fill='#0f172a' font-family='Segoe UI, Arial, sans-serif' font-size='60' font-weight='700'>$title</text>
  <text x='132' y='382' fill='#334155' font-family='Segoe UI, Arial, sans-serif' font-size='34'>$($s.subtitle)</text>
  <text x='132' y='432' fill='#475569' font-family='Segoe UI, Arial, sans-serif' font-size='28'>Serving families with safe, modern and compassionate care.</text>
  <rect x='132' y='486' width='358' height='80' rx='40' fill='$($s.accent)'/>
  <text x='311' y='538' text-anchor='middle' fill='#ffffff' font-family='Segoe UI, Arial, sans-serif' font-size='32' font-weight='700'>Book Appointment</text>
  <g transform='translate(880,420)'>
    <circle cx='0' cy='0' r='140' fill='#e2e8f0'/>
    <circle cx='0' cy='0' r='108' fill='#f8fafc'/>
    $iconSvg
  </g>
</svg>
"@
  Set-Content -Path ("public/images/services/" + $s.slug + ".svg") -Value $svg -Encoding utf8
}
Write-Output 'Department images regenerated.'
