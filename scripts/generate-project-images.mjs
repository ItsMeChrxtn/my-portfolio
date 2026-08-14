import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const outDir = join(process.cwd(), 'public', 'projects')

const projects = [
  {
    file: 'disaster-map.svg',
    title: 'Hazard Alert',
    label: 'DRRM map operations',
    icon: 'map',
    primary: '#dc2626',
    secondary: '#0891b2',
  },
  {
    file: 'public-market-management-system.svg',
    title: 'Market Management',
    label: 'permits, prices, schedules',
    icon: 'market',
    primary: '#16a34a',
    secondary: '#0f766e',
  },
  {
    file: 'philfirst.svg',
    title: 'HR Services',
    label: 'jobs and applications',
    icon: 'briefcase',
    primary: '#2563eb',
    secondary: '#7c3aed',
  },
  {
    file: 'occ-services-portal.svg',
    title: 'Identity Portal',
    label: 'face verification services',
    icon: 'face',
    primary: '#7c3aed',
    secondary: '#0891b2',
  },
  {
    file: 'league-websites.svg',
    title: 'League System',
    label: 'standings and schedules',
    icon: 'court',
    primary: '#ea580c',
    secondary: '#2563eb',
  },
  {
    file: 'personal-portfolio-v1.svg',
    title: 'Portfolio V1',
    label: 'developer profile system',
    icon: 'portfolio',
    primary: '#6d28d9',
    secondary: '#0891b2',
  },
  {
    file: 'tide-storm-monitoring-system.svg',
    title: 'Tide Monitor',
    label: 'coastal sensor alerts',
    icon: 'waves',
    primary: '#0284c7',
    secondary: '#0f766e',
  },
  {
    file: 'automated-medicine-sorter.svg',
    title: 'Medicine Sorter',
    label: 'color and shape routing',
    icon: 'pills',
    primary: '#db2777',
    secondary: '#7c3aed',
  },
  {
    file: 'panghabi.svg',
    title: 'Panghabi Display',
    label: 'loom pattern guide',
    icon: 'weave',
    primary: '#9333ea',
    secondary: '#ca8a04',
  },
  {
    file: 'myler-cutter.svg',
    title: 'Mylar Cutter',
    label: 'stepper cutting rig',
    icon: 'cutter',
    primary: '#475569',
    secondary: '#0891b2',
  },
  {
    file: 'ilaw.svg',
    title: 'Ilaw Controller',
    label: 'automatic relay lighting',
    icon: 'light',
    primary: '#ca8a04',
    secondary: '#ea580c',
  },
  {
    file: 'canvas-cutter.svg',
    title: 'Canvas Cutter',
    label: 'keypad cutting machine',
    icon: 'cutter',
    primary: '#0f766e',
    secondary: '#475569',
  },
  {
    file: 'steel-cabinet.svg',
    title: 'Steel Cabinet Lock',
    label: 'biometric access control',
    icon: 'lock',
    primary: '#334155',
    secondary: '#7c3aed',
  },
  {
    file: 'borrow-return-tool-system.svg',
    title: 'Tool Kiosk',
    label: 'barcode borrow and return',
    icon: 'barcode',
    primary: '#0f766e',
    secondary: '#2563eb',
  },
]

function iconMarkup(icon, primary, secondary) {
  const common = `stroke-linecap="round" stroke-linejoin="round" fill="none"`

  const icons = {
    barcode: `
      <rect x="70" y="68" width="250" height="110" rx="18" fill="#fff" opacity=".94"/>
      <path d="M96 92v62M118 92v62M148 92v62M166 92v62M206 92v62M232 92v62M264 92v62M292 92v62" stroke="${primary}" stroke-width="8"/>
      <path d="M86 204h220" stroke="${secondary}" stroke-width="12" ${common}/>
    `,
    briefcase: `
      <rect x="74" y="94" width="240" height="132" rx="24" fill="#fff" opacity=".94"/>
      <path d="M142 94V70h104v24M74 140h240M178 140v26h34v-26" stroke="${primary}" stroke-width="12" ${common}/>
      <path d="M112 198h166" stroke="${secondary}" stroke-width="10" ${common}/>
    `,
    court: `
      <rect x="74" y="66" width="240" height="180" rx="22" fill="#fff" opacity=".92"/>
      <path d="M194 66v180M74 156h240M118 112a48 48 0 0 1 0 88M270 112a48 48 0 0 0 0 88" stroke="${primary}" stroke-width="9" ${common}/>
      <circle cx="194" cy="156" r="30" stroke="${secondary}" stroke-width="9" fill="none"/>
    `,
    cutter: `
      <rect x="80" y="176" width="232" height="52" rx="18" fill="#fff" opacity=".92"/>
      <path d="M98 132h168l36 44H82z" fill="#fff" opacity=".76"/>
      <path d="M130 92h132M150 92v84M242 92v84M112 204h176" stroke="${primary}" stroke-width="12" ${common}/>
      <path d="M194 82l-24 94h48z" fill="${secondary}" opacity=".9"/>
    `,
    face: `
      <rect x="96" y="66" width="196" height="196" rx="36" fill="#fff" opacity=".92"/>
      <path d="M128 122V96h26M234 96h26v26M128 206v26h26M260 206v26h-26" stroke="${primary}" stroke-width="10" ${common}/>
      <path d="M154 170c15 24 65 24 80 0M156 142h.1M232 142h.1" stroke="${secondary}" stroke-width="12" ${common}/>
    `,
    light: `
      <circle cx="194" cy="126" r="56" fill="#fff" opacity=".92"/>
      <path d="M166 188h56M172 214h44M194 44v26M116 76l20 20M272 76l-20 20M84 136h30M274 136h30" stroke="${primary}" stroke-width="12" ${common}/>
      <path d="M158 126a36 36 0 0 1 72 0" stroke="${secondary}" stroke-width="10" ${common}/>
    `,
    lock: `
      <rect x="104" y="126" width="180" height="120" rx="24" fill="#fff" opacity=".92"/>
      <path d="M142 126V98a52 52 0 0 1 104 0v28M194 166v40" stroke="${primary}" stroke-width="12" ${common}/>
      <circle cx="194" cy="160" r="18" fill="${secondary}" opacity=".9"/>
    `,
    map: `
      <path d="M74 78l78-24 84 28 78-24v174l-78 24-84-28-78 24z" fill="#fff" opacity=".9"/>
      <path d="M152 54v174M236 82v174M112 158h164" stroke="${primary}" stroke-width="9" ${common}/>
      <path d="M194 92c-30 0-54 24-54 54 0 42 54 86 54 86s54-44 54-86c0-30-24-54-54-54z" fill="${secondary}" opacity=".88"/>
      <circle cx="194" cy="146" r="18" fill="#fff"/>
    `,
    market: `
      <path d="M78 112h232l-24-48H102z" fill="#fff" opacity=".92"/>
      <path d="M96 112v122h196V112M122 112v-24M170 112v-24M218 112v-24M266 112v-24" stroke="${primary}" stroke-width="10" ${common}/>
      <rect x="128" y="152" width="60" height="82" rx="8" fill="${secondary}" opacity=".86"/>
      <path d="M210 158h54M210 186h54M210 214h54" stroke="${primary}" stroke-width="9" ${common}/>
    `,
    pills: `
      <rect x="96" y="82" width="80" height="170" rx="40" fill="#fff" opacity=".92" transform="rotate(-28 136 167)"/>
      <rect x="208" y="74" width="80" height="178" rx="40" fill="#fff" opacity=".92" transform="rotate(28 248 163)"/>
      <path d="M100 162l74-40M218 164l70 36" stroke="${primary}" stroke-width="10" ${common}/>
      <circle cx="194" cy="168" r="26" fill="${secondary}" opacity=".88"/>
    `,
    portfolio: `
      <rect x="76" y="70" width="236" height="176" rx="24" fill="#fff" opacity=".92"/>
      <circle cx="142" cy="134" r="34" fill="${secondary}" opacity=".9"/>
      <path d="M106 202c16-30 56-30 72 0M208 118h60M208 154h72M208 190h50" stroke="${primary}" stroke-width="10" ${common}/>
    `,
    waves: `
      <path d="M76 184c28-26 58-26 88 0s60 26 90 0 58-26 88 0" stroke="#fff" stroke-width="18" ${common} opacity=".95"/>
      <path d="M76 224c28-26 58-26 88 0s60 26 90 0 58-26 88 0" stroke="${secondary}" stroke-width="14" ${common}/>
      <path d="M194 62v88M158 104h72M142 150h104" stroke="${primary}" stroke-width="12" ${common}/>
      <circle cx="194" cy="62" r="22" fill="#fff" opacity=".92"/>
    `,
    weave: `
      <rect x="82" y="74" width="224" height="164" rx="22" fill="#fff" opacity=".92"/>
      <path d="M122 94v124M162 94v124M202 94v124M242 94v124M282 94v124M102 114h184M102 154h184M102 194h184" stroke="${primary}" stroke-width="8" ${common}/>
      <path d="M102 114c40 40 104 40 184 0M102 194c40-40 104-40 184 0" stroke="${secondary}" stroke-width="9" ${common}/>
    `,
  }

  return icons[icon] ?? icons.portfolio
}

function svg(project) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 384 288" role="img" aria-labelledby="title desc">
  <title id="title">${project.title}</title>
  <desc id="desc">${project.label}</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${project.primary}"/>
      <stop offset="1" stop-color="${project.secondary}"/>
    </linearGradient>
    <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
      <path d="M28 0H0v28" fill="none" stroke="#fff" stroke-opacity=".14" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="384" height="288" rx="0" fill="url(#bg)"/>
  <rect width="384" height="288" fill="url(#grid)"/>
  <circle cx="324" cy="40" r="70" fill="#fff" opacity=".12"/>
  <circle cx="56" cy="248" r="96" fill="#fff" opacity=".1"/>
  ${iconMarkup(project.icon, project.primary, project.secondary)}
  <rect x="28" y="228" width="328" height="40" rx="20" fill="#0f172a" opacity=".52"/>
  <text x="48" y="249" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="700" fill="#fff">${project.title}</text>
  <text x="48" y="264" font-family="Inter, Arial, sans-serif" font-size="10" font-weight="600" fill="#fff" opacity=".76">${project.label}</text>
</svg>
`
}

mkdirSync(outDir, { recursive: true })

for (const project of projects) {
  writeFileSync(join(outDir, project.file), svg(project))
}
