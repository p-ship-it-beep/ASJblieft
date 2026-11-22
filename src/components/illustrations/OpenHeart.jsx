import Sketch from './Sketch'

/** Een hart in één lijn getekend, licht open. */
export default function OpenHeart({ className, label }) {
  return (
    <Sketch viewBox="0 0 200 180" className={className} label={label} wash={[{ cx: 98, cy: 92, rx: 54, ry: 46, c: 'terracotta', o: 0.2 }]}>
      <path d="M94 166 C70 144 34 120 28 84 C24 58 40 36 64 34 C82 33 94 44 99 60 C104 42 118 30 138 31 C162 33 178 54 172 82 C166 112 138 136 112 154" />
      <path d="M94 166 C90 170 84 172 78 170" />
    </Sketch>
  )
}
