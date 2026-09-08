/** Brand-ish dots used on project tags, skill tiles, and filter pills. */
const palette = {
  // Frontend
  HTML: '#e34f26',
  CSS: '#1572b6',
  JavaScript: '#f0db4f',
  TypeScript: '#3178c6',
  React: '#61dafb',
  'Next.js': '#6e7681',
  'Tailwind CSS': '#38bdf8',
  Bootstrap: '#7952b3',
  Vite: '#bd34fe',

  // Backend
  'Node.js': '#5fa04e',
  Express: '#6b7280',
  'Express.js': '#6b7280',
  PHP: '#8993be',
  Python: '#3572a5',
  'Python (Flask)': '#3572a5',
  Flask: '#4b5563',
  'Socket.io': '#7c8aa5',

  // Data
  MongoDB: '#47a248',
  MySQL: '#00758f',
  SQLite: '#0f80cc',

  // Tools
  Git: '#f05032',
  GitHub: '#6e7681',
  JWT: '#d63aff',
  Postman: '#ff6c37',
  'VS Code': '#0078d4',

  // Deployment
  Vercel: '#525252',
  Render: '#46e3b7',
  Railway: '#8b5cf6',
  Hostinger: '#673de6',

  // Mapping
  Leaflet: '#199900',
  'React Leaflet': '#199900',

  // Hardware
  Arduino: '#00979d',
  'C++': '#f34b7d',
  ESP32: '#e7352c',
  'ESP32-CAM': '#e7352c',
  'SIM800L GSM': '#ff9e64',
  'TFT Display': '#38bdf8',
  'Servo Motors': '#d99a2b',
  'Stepper Motors': '#d99a2b',
  'Keypad/LCD': '#0d9488',
  'TCS34725 Color Sensor': '#e5484d',
  'Ultrasonic Sensors': '#0891b2',
  'Fingerprint Sensor': '#8b5cf6',
  'Face Recognition': '#8b5cf6',
  EEPROM: '#64748b',
  Relay: '#64748b',
}

const fallback = '#6b7280'

export function techColor(tech) {
  return palette[tech] ?? fallback
}

/** Two stops for a tile gradient, safe for any tech name. */
export function techGradient(tech) {
  const base = techColor(tech)
  return `linear-gradient(140deg, ${base}, ${base}bb)`
}
