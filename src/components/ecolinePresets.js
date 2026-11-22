/**
 * Composities voor de ecoline-achtergronden.
 * x / y / r in een vlak van 1000 × 1000. o = dekking (0–1).
 * Speel gerust met seed, positie en kleur – het blijft organisch.
 */
export const presets = {
  // Volgens de visuele richtlijn: pruim/terracotta links, olijf rechts, warm onder, crème midden.
  // Let op: op brede schermen valt ca. y < 170 en y > 830 buiten beeld.
  hero: [
    { color: 'zand', x: 470, y: 500, r: 380, rx: 1.5, seed: 2, o: 0.18 },
    { color: 'aubergine', x: 30, y: 250, r: 210, ry: 1.2, seed: 3, o: 0.95 },
    { color: 'pruim', x: -10, y: 430, r: 150, seed: 4, o: 0.74 },
    { color: 'terracotta', x: 70, y: 560, r: 170, rx: 1.2, seed: 5, o: 0.81 },
    { color: 'olijf', x: 110, y: 740, r: 180, rx: 1.3, seed: 6, o: 0.68 },
    { color: 'aubergine', x: 60, y: 900, r: 220, rx: 1.4, seed: 7, o: 0.88 },
    { color: 'perzik', x: 400, y: 170, r: 160, rx: 1.4, seed: 8, o: 0.57 },
    { color: 'olijf', x: 580, y: 160, r: 140, seed: 9, o: 0.51 },
    { color: 'terracotta', x: 880, y: 160, r: 170, rx: 1.2, seed: 10, o: 0.57 },
    { color: 'salie', x: 940, y: 380, r: 220, ry: 1.2, seed: 11, o: 0.81 },
    { color: 'olijf', x: 900, y: 320, r: 120, seed: 12, o: 0.68 },
    { color: 'perzik', x: 700, y: 480, r: 210, seed: 13, o: 0.57 },
    { color: 'terracotta', x: 820, y: 700, r: 220, rx: 1.3, seed: 14, o: 0.78 },
    { color: 'roest', x: 1000, y: 800, r: 170, seed: 15, o: 0.74 },
    { color: 'aubergine', x: 700, y: 880, r: 190, rx: 1.5, seed: 16, o: 0.68 },
    { color: 'salie', x: 330, y: 720, r: 170, rx: 1.4, seed: 17, o: 0.43 },
    { color: 'olijf', x: 520, y: 900, r: 150, rx: 1.4, seed: 18, o: 0.54 },
  ],
  soft: [
    { color: 'zand', x: 260, y: 400, r: 380, rx: 1.4, seed: 41, o: 0.75 },
    { color: 'salie', x: 900, y: 200, r: 220, seed: 43, o: 0.45 },
    { color: 'terracotta', x: 960, y: 820, r: 160, seed: 47, o: 0.28 },
  ],
  warm: [
    { color: 'terracotta', x: 120, y: 260, r: 260, rx: 1.2, seed: 51, o: 0.42 },
    { color: 'zand', x: 600, y: 560, r: 460, rx: 1.5, seed: 53, o: 0.8 },
    { color: 'aubergine', x: 900, y: 140, r: 160, seed: 57, o: 0.25 },
    { color: 'salie', x: 860, y: 860, r: 220, seed: 59, o: 0.45 },
  ],
  green: [
    { color: 'salie', x: 820, y: 420, r: 380, rx: 1.3, seed: 61, o: 0.6 },
    { color: 'olijf', x: 980, y: 140, r: 160, seed: 63, o: 0.3 },
    { color: 'zand', x: 120, y: 760, r: 300, rx: 1.3, seed: 67, o: 0.7 },
    { color: 'terracotta', x: 60, y: 120, r: 120, seed: 71, o: 0.28 },
  ],
  plum: [
    { color: 'aubergine', x: 180, y: 500, r: 380, rx: 1.4, seed: 81, o: 0.72 },
    { color: 'terracotta', x: 760, y: 360, r: 280, rx: 1.3, seed: 83, o: 0.6 },
    { color: 'olijf', x: 920, y: 820, r: 220, seed: 87, o: 0.5 },
    { color: 'salie', x: 520, y: 900, r: 200, seed: 89, o: 0.45 },
  ],
  page: [
    { color: 'salie', x: 120, y: 200, r: 300, rx: 1.3, seed: 91, o: 0.6 },
    { color: 'zand', x: 620, y: 520, r: 500, rx: 1.4, seed: 93, o: 0.85 },
    { color: 'terracotta', x: 900, y: 160, r: 220, seed: 97, o: 0.42 },
    { color: 'aubergine', x: 960, y: 760, r: 130, seed: 99, o: 0.22 },
  ],
  footer: [
    { color: 'olijf', x: 100, y: 300, r: 320, rx: 1.3, seed: 101, o: 0.55 },
    { color: 'aubergine', x: 700, y: 600, r: 440, rx: 1.5, seed: 103, o: 0.75 },
    { color: 'terracotta', x: 980, y: 140, r: 200, seed: 107, o: 0.5 },
  ],
}
