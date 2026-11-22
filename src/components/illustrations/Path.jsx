import Sketch from './Sketch'

/** Een slingerend pad. */
export default function Path({ className, label }) {
  return (
    <Sketch viewBox="0 0 200 200" className={className} label={label} wash={[{ cx: 120, cy: 60, rx: 36, c: 'salie', o: 0.35 }]}>
      <path d="M40 196 C52 160 132 152 128 118 C124 90 70 92 78 64 C84 44 112 36 120 18" />
      <path d="M104 196 C110 168 170 156 162 116 C156 86 104 88 108 64 C110 48 124 38 128 20" />
      {/* stapjes op het pad */}
      <path d="M78 178 L88 174" />
      <path d="M126 140 L136 136" />
      <path d="M104 96 L112 100" />
      <path d="M100 62 L108 60" />
      {/* tak langs het pad */}
      <path d="M170 196 C174 180 176 166 184 150" />
      <path d="M176 176 C166 172 160 164 160 154 C170 158 176 166 176 176 Z" />
      <path d="M181 160 C188 152 196 150 200 152 C196 160 188 162 181 160 Z" />
    </Sketch>
  )
}
