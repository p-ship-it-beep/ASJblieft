import Sketch from './Sketch'

/** Vier abstracte figuren in een kring, met een klein hart in het midden. */
export default function GroupCircle({ className, label }) {
  const angles = [0, 90, 180, 270]
  return (
    <Sketch viewBox="0 0 200 200" className={className} label={label} wash={[{ cx: 100, cy: 100, rx: 46, c: 'salie', o: 0.3 }]}>
      {angles.map((a) => (
        <g key={a} transform={`rotate(${a} 100 100)`}>
          <path d="M100 18 C93 18 88 23 88 30 C88 37 94 42 100 42 C107 42 112 36 112 29 C111 23 106 18 100 18 Z" />
          <path d="M78 64 C80 52 89 46 100 46 C112 46 121 53 122 64" />
        </g>
      ))}
      <path d="M100 114 C92 106 82 100 82 91 C82 85 87 81 92 81 C96 81 99 84 100 88 C101 84 105 81 109 81 C114 81 118 86 118 91 C117 100 108 106 100 114 Z" />
    </Sketch>
  )
}
