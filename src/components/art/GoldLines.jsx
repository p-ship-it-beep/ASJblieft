/** Dunne, slingerende gouden lijnen over de aquarel (zoals in de richtlijn). */
export default function GoldLines({ className = '' }) {
  return (
    <svg className={`gold-lines ${className}`} viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <g fill="none" stroke="var(--goud)" strokeLinecap="round" vectorEffect="non-scaling-stroke">
        <path d="M-20 300 C 90 330 160 250 260 230 C 340 214 380 260 330 300" strokeWidth="1.4" />
        <path d="M-20 560 C 70 520 140 600 230 600 C 330 600 360 520 470 560 C 560 592 600 640 700 620" strokeWidth="1.2" opacity=".8" />
        <path d="M-20 820 C 160 760 300 880 520 870 C 760 860 900 760 1100 800 C 1250 830 1330 900 1460 880" strokeWidth="1.3" />
        <path d="M1460 60 C 1380 120 1330 230 1260 240 C 1210 248 1220 190 1260 190 C 1310 190 1330 260 1290 320 C 1250 380 1290 440 1360 470 C 1420 495 1430 560 1460 600" strokeWidth="1.3" />
        <path d="M760 330 C 820 300 880 330 900 380" strokeWidth="1" opacity=".7" />
      </g>
    </svg>
  )
}
