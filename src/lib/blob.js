// Maakt organische, onregelmatige vlekvormen (deterministisch per seed).
function rng(seed) {
  let s = (Math.abs(Math.floor(seed)) % 2147483646) + 1
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

/**
 * @param {object} b { x, y, r, rx?, ry?, seed, points?, wobble?, rot? }
 * @returns {string} SVG path
 */
export function blobPath({ x, y, r, rx = 1, ry = 1, seed = 1, points = 9, wobble = 0.38, rot = 0 }) {
  const rand = rng(seed * 9301 + 49297)
  const pts = []
  const rr = (rot * Math.PI) / 180
  for (let i = 0; i < points; i++) {
    const a = (i / points) * Math.PI * 2 + (rand() - 0.5) * 0.5
    const rad = r * (1 - wobble / 2 + rand() * wobble)
    const px = Math.cos(a) * rad * rx
    const py = Math.sin(a) * rad * ry
    pts.push([x + px * Math.cos(rr) - py * Math.sin(rr), y + px * Math.sin(rr) + py * Math.cos(rr)])
  }
  // Gesloten Catmull-Rom → Bézier
  const n = pts.length
  let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n]
    const p1 = pts[i]
    const p2 = pts[(i + 1) % n]
    const p3 = pts[(i + 2) % n]
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    d += ` C${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`
  }
  return d + 'Z'
}
