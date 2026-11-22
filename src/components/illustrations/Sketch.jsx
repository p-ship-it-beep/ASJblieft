import { useId } from 'react'

/**
 * Basis voor alle lijnillustraties.
 * - lijnen in currentColor, rond, zonder vulling
 * - een subtiel verplaatsingsfilter maakt de lijnen licht onregelmatig (getekend)
 * - met `label` krijgt de SVG role="img" + aria-label, anders aria-hidden
 * - `wash` tekent een zachte waterverfvlek achter de lijnen
 */
export default function Sketch({ viewBox, label, className = '', wash, strokeWidth = 1.7, children }) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true }

  return (
    <svg viewBox={viewBox} className={`illustration ${className}`} focusable="false" {...a11y}>
      <defs>
        <filter id={`hand-${uid}`} x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="5" result="ruis" />
          <feDisplacementMap in="SourceGraphic" in2="ruis" scale="2.4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        {wash && (
          <filter id={`wash-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="8" result="r" />
            <feDisplacementMap in="SourceGraphic" in2="r" scale="18" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="4" />
          </filter>
        )}
      </defs>
      {wash && (
        <g filter={`url(#wash-${uid})`}>
          {wash.map((w, i) => (
            <ellipse key={i} cx={w.cx} cy={w.cy} rx={w.rx} ry={w.ry ?? w.rx} fill={`var(--${w.c})`} opacity={w.o ?? 0.3} />
          ))}
        </g>
      )}
      <g
        filter={`url(#hand-${uid})`}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>
    </svg>
  )
}
