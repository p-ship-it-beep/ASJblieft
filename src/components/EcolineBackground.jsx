import { useId, useMemo } from 'react'
import { blobPath } from '../lib/blob'
import './EcolineBackground.css'

/**
 * Ecoline-achtergrond: SVG-vlekken in de paletkleuren met rafelige randen,
 * uitlopende inkt en papiertextuur. Staat vast (fixed) achter de inhoud.
 *
 * Gebruik:  <EcolineBackground variant="home" />
 * Later een echte scan gebruiken?  <EcolineBackground image="/ecoline/home.webp" />
 *
 * Coördinaten in een vlak van 1600 × 1000. Kleur zit aan de randen,
 * het midden blijft licht voor leesbaarheid. o = dekking (0.35–0.75).
 */
const compositions = {
  home: {
    blobs: [
      { c: 'aubergine', x: 60, y: 120, r: 230, rx: 1.2, seed: 3, o: 0.62 },
      { c: 'terracotta', x: 40, y: 470, r: 190, ry: 1.2, seed: 5, o: 0.55 },
      { c: 'olijf', x: 130, y: 860, r: 220, rx: 1.4, seed: 7, o: 0.5 },
      { c: 'zand', x: 520, y: 40, r: 210, rx: 1.6, seed: 9, o: 0.7 },
      { c: 'salie', x: 1480, y: 180, r: 260, ry: 1.1, seed: 11, o: 0.6 },
      { c: 'olijf', x: 1560, y: 470, r: 170, seed: 13, o: 0.45 },
      { c: 'terracotta', x: 1380, y: 900, r: 260, rx: 1.4, seed: 15, o: 0.55 },
      { c: 'aubergine', x: 900, y: 1010, r: 200, rx: 1.8, seed: 17, o: 0.45 },
      { c: 'salie', x: 560, y: 990, r: 180, rx: 1.5, seed: 19, o: 0.42 },
    ],
    lines: [
      'M-20 330 C120 300 210 380 330 340 C420 310 440 250 400 230',
      'M1080 -10 C1120 90 1230 140 1300 110 C1350 90 1340 40 1300 50 C1250 64 1290 170 1400 220 C1480 256 1560 240 1620 280',
      'M-20 760 C160 700 300 820 520 800 C700 784 760 900 940 880',
    ],
  },
  begeleiding: {
    blobs: [
      { c: 'salie', x: 40, y: 160, r: 240, ry: 1.2, seed: 21, o: 0.55 },
      { c: 'aubergine', x: 1500, y: 90, r: 220, rx: 1.3, seed: 23, o: 0.55 },
      { c: 'terracotta', x: 1560, y: 520, r: 210, seed: 25, o: 0.5 },
      { c: 'zand', x: 120, y: 620, r: 240, rx: 1.3, seed: 27, o: 0.7 },
      { c: 'olijf', x: 300, y: 1000, r: 240, rx: 1.5, seed: 29, o: 0.45 },
      { c: 'aubergine', x: 1200, y: 1010, r: 220, rx: 1.6, seed: 31, o: 0.4 },
    ],
    lines: [
      'M1620 300 C1500 330 1430 260 1340 290 C1270 314 1280 380 1330 380',
      'M-20 900 C140 840 280 940 480 900',
    ],
  },
  postpartum: {
    blobs: [
      { c: 'terracotta', x: 80, y: 100, r: 250, rx: 1.3, seed: 41, o: 0.55 },
      { c: 'zand', x: 700, y: 20, r: 220, rx: 1.8, seed: 43, o: 0.65 },
      { c: 'salie', x: 1520, y: 300, r: 250, seed: 45, o: 0.55 },
      { c: 'aubergine', x: 30, y: 760, r: 220, ry: 1.2, seed: 47, o: 0.48 },
      { c: 'olijf', x: 1450, y: 920, r: 240, rx: 1.4, seed: 49, o: 0.5 },
      { c: 'terracotta', x: 800, y: 1010, r: 180, rx: 1.6, seed: 51, o: 0.4 },
    ],
    lines: [
      'M-20 420 C100 380 200 460 300 430 C380 404 380 340 330 340',
      'M1100 1020 C1180 920 1330 960 1420 880 C1500 810 1560 820 1620 780',
    ],
  },
  over: {
    blobs: [
      { c: 'aubergine', x: 1540, y: 120, r: 250, rx: 1.2, seed: 61, o: 0.55 },
      { c: 'salie', x: 60, y: 280, r: 230, ry: 1.3, seed: 63, o: 0.55 },
      { c: 'terracotta', x: 1500, y: 760, r: 240, seed: 65, o: 0.5 },
      { c: 'zand', x: 400, y: 960, r: 260, rx: 1.6, seed: 67, o: 0.7 },
      { c: 'olijf', x: 40, y: 900, r: 190, seed: 69, o: 0.45 },
    ],
    lines: [
      'M300 -20 C260 80 160 120 80 100 C30 88 40 40 80 50',
      'M1620 560 C1500 600 1430 540 1360 580',
    ],
  },
  contact: {
    blobs: [
      { c: 'olijf', x: 60, y: 90, r: 220, rx: 1.3, seed: 81, o: 0.5 },
      { c: 'terracotta', x: 1530, y: 160, r: 230, seed: 83, o: 0.5 },
      { c: 'zand', x: 1500, y: 620, r: 260, ry: 1.2, seed: 85, o: 0.7 },
      { c: 'aubergine', x: 120, y: 900, r: 240, rx: 1.4, seed: 87, o: 0.48 },
      { c: 'salie', x: 1100, y: 1010, r: 220, rx: 1.7, seed: 89, o: 0.5 },
    ],
    lines: [
      'M-20 560 C90 520 160 600 260 570',
      'M1620 860 C1480 820 1400 900 1280 880 C1200 866 1190 800 1240 800',
    ],
  },
}

export default function EcolineBackground({ variant = 'home', image }) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const comp = compositions[variant] || compositions.home
  const paths = useMemo(() => comp.blobs.map((b) => blobPath({ ...b, points: 10, wobble: 0.42 })), [comp])

  if (image) {
    return (
      <div className="ecoline" aria-hidden="true">
        <div className="ecoline-image" style={{ backgroundImage: `url(${image})` }} />
      </div>
    )
  }

  return (
    <div className="ecoline" aria-hidden="true">
      <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" focusable="false">
        <defs>
          {/* rafelige randen + uitlopende inkt */}
          <filter id={`ink-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="3" seed="4" result="grof" />
            <feDisplacementMap in="SourceGraphic" in2="grof" scale="90" xChannelSelector="R" yChannelSelector="G" result="d1" />
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="9" result="fijn" />
            <feDisplacementMap in="d1" in2="fijn" scale="14" xChannelSelector="R" yChannelSelector="G" result="d2" />
            <feGaussianBlur in="d2" stdDeviation="3" />
          </filter>
          {/* papiertextuur */}
          <filter id={`papier-${uid}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="2" />
            <feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.38  0 0 0 0 0.3  0 0 0 0.5 0" />
          </filter>
          {comp.blobs.map((b, i) => (
            <radialGradient key={i} id={`g-${uid}-${i}`} cx="45%" cy="45%" r="60%">
              <stop offset="0%" stopColor={`var(--${b.c})`} stopOpacity={b.o * 0.55} />
              <stop offset="70%" stopColor={`var(--${b.c})`} stopOpacity={b.o * 0.85} />
              <stop offset="100%" stopColor={`var(--${b.c})`} stopOpacity={b.o} />
            </radialGradient>
          ))}
        </defs>

        <g filter={`url(#ink-${uid})`}>
          {paths.map((d, i) => (
            <g key={i} className="ecoline-blob">
              <path d={d} fill={`url(#g-${uid}-${i})`} />
              {/* donkerder pigmentrand, zoals opgedroogde ecoline */}
              <path d={d} fill="none" stroke={`var(--${comp.blobs[i].c})`} strokeOpacity={comp.blobs[i].o * 0.5} strokeWidth="5" />
            </g>
          ))}
        </g>

        <g className="ecoline-lines" fill="none" strokeLinecap="round">
          {comp.lines.map((d, i) => (
            <path key={i} d={d} stroke={i % 2 ? 'var(--terracotta)' : 'var(--oker)'} strokeWidth="2" />
          ))}
        </g>

        <rect width="1600" height="1000" filter={`url(#papier-${uid})`} opacity="0.18" />
      </svg>
    </div>
  )
}
