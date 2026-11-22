import { useId, useMemo } from 'react'
import { blobPath } from '../lib/blob'
import { presets } from './ecolinePresets'

/**
 * Ecoline-achtergrond: organische, in elkaar overvloeiende kleurvlekken.
 * Gebruik: <Ecoline preset="hero" />  (presets staan in ecolinePresets.js)
 * Kleuren verwijzen naar CSS-variabelen uit tokens.css (bijv. 'aubergine').
 */
export default function Ecoline({ preset = 'soft', blobs, className = '' }) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const list = blobs || presets[preset] || presets.soft
  const paths = useMemo(() => list.map((b) => blobPath(b)), [list])

  return (
    <div className={`ecoline ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" focusable="false">
        <defs>
          <filter id={`wc-${uid}`} filterUnits="userSpaceOnUse" x="-200" y="-200" width="1400" height="1400">
            {/* grove, vloeiende rand */}
            <feTurbulence type="fractalNoise" baseFrequency="0.006" numOctaves="3" seed="7" result="n1" />
            <feDisplacementMap in="SourceGraphic" in2="n1" scale="110" xChannelSelector="R" yChannelSelector="G" result="d1" />
            {/* fijne, rafelige rand */}
            <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed="3" result="n2" />
            <feDisplacementMap in="d1" in2="n2" scale="16" xChannelSelector="R" yChannelSelector="G" result="d2" />
            {/* pigmentkorrel */}
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="11" result="grain" />
            <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.7 1.05" result="grainA" />
            <feComposite in="d2" in2="grainA" operator="in" result="grained" />
            <feGaussianBlur in="grained" stdDeviation="1.2" />
          </filter>
          {list.map((b, i) => (
            <radialGradient key={i} id={`g-${uid}-${i}`} cx={b.gx ?? '42%'} cy={b.gy ?? '45%'} r="62%">
              <stop offset="0%" style={{ stopColor: `var(--${b.color})`, stopOpacity: b.o * 0.35 }} />
              <stop offset="55%" style={{ stopColor: `var(--${b.color})`, stopOpacity: b.o * 0.7 }} />
              <stop offset="100%" style={{ stopColor: `var(--${b.color})`, stopOpacity: b.o }} />
            </radialGradient>
          ))}
        </defs>
        <g filter={`url(#wc-${uid})`}>
          {paths.map((d, i) => (
            <g key={i} className="ecoline-blob">
              <path d={d} fill={`url(#g-${uid}-${i})`} />
              {/* donkerder pigmentrand, zoals bij opgedroogde ecoline */}
              <path d={d} fill="none" style={{ stroke: `var(--${list[i].color})` }} strokeOpacity={list[i].o * 0.45} strokeWidth="4" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}
