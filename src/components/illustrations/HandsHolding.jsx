import Sketch from './Sketch'

/** Twee handen die elkaar vasthouden. */
export default function HandsHolding({ className, label }) {
  return (
    <Sketch viewBox="0 0 200 160" className={className} label={label} wash={[{ cx: 100, cy: 86, rx: 52, ry: 40, c: 'terracotta', o: 0.2 }]}>
      {/* linkerarm en hand van onderen */}
      <path d="M8 130 C34 124 56 116 74 104" />
      <path d="M14 150 C42 144 66 136 86 122" />
      <path d="M74 104 C80 92 90 84 102 82 C112 80 120 84 124 92" />
      {/* vingers van links die om de rechterhand vallen */}
      <path d="M102 82 C104 72 112 68 118 72 C122 76 122 84 118 90" />
      <path d="M112 76 C116 66 126 64 130 70 C133 76 130 84 126 88" />
      <path d="M86 122 C98 118 110 112 118 104" />
      {/* rechterarm en hand van boven */}
      <path d="M192 30 C166 38 146 48 130 60" />
      <path d="M194 52 C172 58 154 68 140 80" />
      <path d="M130 60 C118 66 108 74 104 86" />
      {/* duim rechts over de hand */}
      <path d="M140 80 C136 92 126 102 112 106 C102 108 94 106 90 100" />
    </Sketch>
  )
}
