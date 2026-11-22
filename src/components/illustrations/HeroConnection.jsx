import Sketch from './Sketch'

/** Twee abstracte figuren, verbonden door één doorlopende lijn die een open cirkel vormt, met daaruit een groeiende tak. */
export default function HeroConnection({ className, label = 'Twee figuren verbonden door een lijn, waaruit een tak met blaadjes groeit' }) {
  return (
    <Sketch
      viewBox="0 0 420 440"
      className={className}
      label={label}
      strokeWidth={2}
      wash={[
        { cx: 205, cy: 265, rx: 118, ry: 110, c: 'zand', o: 0.55 },
        { cx: 250, cy: 300, rx: 70, c: 'terracotta', o: 0.18 },
        { cx: 160, cy: 230, rx: 60, c: 'salie', o: 0.25 },
      ]}
    >
      {/* Eén doorlopende lijn: open cirkel, door de armen van de figuren, en uit in de tak */}
      <path d="M226 120 C206 118 186 120 166 128 C116 146 84 196 86 252 C88 312 132 362 196 370 C258 378 316 344 334 288 C346 252 340 214 322 186 C302 158 274 156 262 176 C252 192 262 214 244 234 C230 250 214 254 208 254 C202 254 186 250 172 234 C160 220 158 204 162 192" />
      {/* hoofden */}
      <path d="M163 188 C150 186 142 176 144 164 C146 152 158 145 170 148 C182 151 188 163 184 174 C181 183 172 189 163 188 Z" />
      <path d="M266 176 C255 180 244 174 241 163 C238 151 246 140 258 139 C270 138 280 147 280 159 C280 167 274 173 266 176 Z" />
      {/* lichamen */}
      <path d="M150 204 C138 232 134 270 142 314" />
      <path d="M274 196 C288 224 292 266 282 312" />
      {/* tak die uit de cirkel groeit */}
      <path d="M296 150 C324 126 348 108 362 82 C368 60 368 44 364 28" />
      <path d="M326 128 C340 120 358 120 370 128 C358 138 340 138 326 128 Z" />
      <path d="M352 108 C340 98 336 82 340 68 C352 78 356 94 352 108 Z" />
      <path d="M362 70 C374 60 390 58 400 64 C390 76 374 78 362 70 Z" />
      <path d="M365 36 C356 28 354 16 358 6 C366 14 368 26 365 36 Z" />
    </Sketch>
  )
}
