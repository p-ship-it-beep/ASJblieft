/** Lijn-iconen voor de kaarten, in de stijl van de richtlijn. */
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
}

export function IconZwanger(props) {
  return (
    <svg viewBox="0 0 72 96" {...base} {...props}>
      <path d="M34 8 C 26 8 22 16 24 22 C 25 26 23 28 22 31 C 24 32 26 32 27 35" />
      <path d="M34 8 C 44 8 46 20 40 28 C 38 32 40 36 44 38" />
      <path d="M27 35 C 22 40 18 46 20 52 C 14 60 12 70 18 78 C 22 84 30 88 40 90" />
      <path d="M44 38 C 50 44 50 52 46 58 C 54 64 58 72 54 80 C 52 86 46 90 40 90" />
      <path d="M44 72 C 41 68 36 70 38 74 C 39 77 44 80 44 80 C 44 80 49 77 50 74 C 52 70 47 68 44 72 Z" />
    </svg>
  )
}

export function IconGroep(props) {
  return (
    <svg viewBox="0 0 110 72" {...base} {...props}>
      <circle cx="22" cy="20" r="8" />
      <circle cx="55" cy="14" r="9" />
      <circle cx="88" cy="20" r="8" />
      <path d="M6 62 C 6 44 12 34 22 34 C 30 34 34 38 37 44" />
      <path d="M104 62 C 104 44 98 34 88 34 C 80 34 76 38 73 44" />
      <path d="M36 62 C 36 40 44 30 55 30 C 66 30 74 40 74 62" />
      <path d="M55 58 C 51 53 45 55 47 60 C 48 63 55 67 55 67 C 55 67 62 63 63 60 C 65 55 59 53 55 58 Z" />
    </svg>
  )
}

export function IconHart(props) {
  return (
    <svg viewBox="0 0 80 80" {...base} {...props}>
      <path d="M40 72 C 30 60 8 46 8 26 C 8 14 18 8 26 8 C 34 8 38 14 40 20 C 42 12 48 6 58 8 C 68 10 74 20 70 32 C 66 46 52 58 40 72" />
      <path d="M40 72 C 38 66 36 62 32 60" />
    </svg>
  )
}
