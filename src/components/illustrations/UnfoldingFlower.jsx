import Sketch from './Sketch'

/** Een bloem die zich ontvouwt. */
export default function UnfoldingFlower({ className, label }) {
  return (
    <Sketch viewBox="0 0 200 220" className={className} label={label} wash={[{ cx: 100, cy: 82, rx: 50, ry: 44, c: 'terracotta', o: 0.2 }]}>
      {/* steel en blaadjes */}
      <path d="M100 210 C97 180 103 150 100 116" />
      <path d="M100 176 C86 170 76 158 74 144 C88 146 98 158 100 176 Z" />
      <path d="M101 156 C114 148 128 148 138 154 C128 164 112 164 101 156 Z" />
      {/* bloemblaadjes die openvouwen */}
      <path d="M100 112 C94 92 94 70 100 50 C106 70 106 92 100 112 Z" />
      <path d="M98 112 C80 104 66 86 64 62 C82 70 94 88 98 112" />
      <path d="M102 112 C120 104 134 86 136 62 C118 70 106 88 102 112" />
      <path d="M96 114 C74 116 52 106 40 86 C62 84 82 96 96 114" />
      <path d="M104 114 C126 116 148 106 160 86 C138 84 118 96 104 114" />
    </Sketch>
  )
}
