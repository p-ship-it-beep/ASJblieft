/** Fijne bladtak in olijfgroen. */
export default function LeafBranch({ className = '' }) {
  const leaves = [
    [118, 40, -35], [96, 78, 30], [112, 112, -40], [84, 148, 28],
    [100, 184, -45], [70, 216, 25], [86, 250, -50], [56, 282, 20],
  ]
  return (
    <svg className={`leaf-branch ${className}`} viewBox="0 0 160 360" aria-hidden="true" focusable="false">
      <path d="M150 10 C 120 90 100 170 74 250 C 60 295 46 330 30 352" fill="none" stroke="var(--olijf)" strokeWidth="1.6" strokeLinecap="round" />
      {leaves.map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
          <path d="M0 0 C 8 -14 30 -18 46 -8 C 30 4 10 6 0 0 Z" fill="var(--salie)" fillOpacity=".35" stroke="var(--olijf)" strokeWidth="1.3" strokeLinejoin="round" />
          <path d="M2 -1 C 16 -6 30 -8 42 -8" fill="none" stroke="var(--olijf)" strokeWidth=".9" />
        </g>
      ))}
    </svg>
  )
}
