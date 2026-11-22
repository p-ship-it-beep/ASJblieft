import Sketch from './Sketch'

/** Een nest of komvorm met zachte lijnen. */
export default function Nest({ className, label }) {
  return (
    <Sketch viewBox="0 0 200 160" className={className} label={label} wash={[{ cx: 100, cy: 100, rx: 70, ry: 36, c: 'zand', o: 0.6 }]}>
      <path d="M22 84 C52 74 148 74 178 84" />
      <path d="M22 84 C28 120 62 142 100 142 C138 142 172 120 178 84" />
      <path d="M34 98 C70 110 130 110 166 98" />
      <path d="M46 116 C78 126 122 126 154 116" />
      <path d="M40 90 C60 102 74 118 82 136" />
      <path d="M160 90 C140 102 126 118 118 136" />
      <path d="M70 80 C90 94 112 94 132 80" />
      {/* klein blaadje op de rand */}
      <path d="M150 78 C156 64 168 58 182 60 C176 72 164 78 150 78 Z" />
    </Sketch>
  )
}
