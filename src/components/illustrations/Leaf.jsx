import Sketch from './Sketch'

/** Losse tak met blaadjes (decoratief accent). */
export default function Leaf({ className, label }) {
  const leaves = [
    [118, 40, -35], [96, 78, 30], [112, 112, -40], [84, 148, 28], [100, 184, -45], [70, 216, 25],
  ]
  return (
    <Sketch viewBox="0 0 160 260" className={className} label={label}>
      <path d="M150 10 C124 80 104 150 80 214 C70 236 60 248 50 256" />
      {leaves.map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
          <path d="M0 0 C8 -14 30 -18 46 -8 C30 4 10 6 0 0 Z" />
          <path d="M3 -1 C16 -6 30 -8 42 -8" strokeWidth="1" />
        </g>
      ))}
    </Sketch>
  )
}
