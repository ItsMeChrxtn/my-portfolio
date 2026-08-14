/** GitHub-style language dots, used on project cards and filter pills. */
const palette = {
  React: '#61dafb',
  'React Leaflet': '#199900',
  Leaflet: '#199900',
  'Node.js': '#5fa04e',
  Express: '#8892b0',
  MongoDB: '#47a248',
  'Socket.io': '#a5b4c9',
  PHP: '#8993be',
  MySQL: '#00758f',
  SQLite: '#0f80cc',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572a5',
  Flask: '#7b8794',
  Vite: '#bd34fe',
  Arduino: '#00979d',
  'C++': '#f34b7d',
  ESP32: '#e7352c',
  'ESP32-CAM': '#e7352c',
  'SIM800L GSM': '#ff9e64',
  'TFT Display': '#7dcfff',
  'Servo Motors': '#e0af68',
  'Stepper Motors': '#e0af68',
  'Keypad/LCD': '#73daca',
  'TCS34725 Color Sensor': '#f7768e',
  'Ultrasonic Sensors': '#2ac3de',
  'Fingerprint Sensor': '#bb9af7',
  'Face Recognition': '#bb9af7',
  EEPROM: '#9aa5ce',
  Relay: '#9aa5ce',
  JWT: '#d63aff',
}

export function techColor(tech) {
  return palette[tech] ?? 'var(--faint)'
}
