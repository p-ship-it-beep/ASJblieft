/**
 * Stijlkeuzes om te testen (via het stijlpaneel, ?stijl=aan).
 * Keuzes worden in de eigen browser bewaard en gelden alleen daar.
 * Definitief maken = de gekozen waarden overnemen in global.css / site.js.
 */
import { site } from '../config/site'

export const STORAGE_KEY = 'asjblieft-stijl'
export const PANEL_KEY = 'asjblieft-stijlpaneel'

/** Alle groentinten halen minimaal WCAG AA (4,5:1) met crème tekst erop. */
export const greens = [
  { value: '#556B4F', label: 'Olijf (huidig)' },
  { value: '#5F6B3A', label: 'Mosgroen' },
  { value: '#66703B', label: 'Mosgroen warm' },
  { value: '#6A7340', label: 'Mosgroen licht' },
  { value: '#58652F', label: 'Mosgroen vol' },
  { value: '#4D5A2C', label: 'Mosgroen diep' },
  { value: '#5B6447', label: 'Grijsmos' },
]

export const headingColors = [
  { value: '#6B2E4A', label: 'Aubergine (huidig)' },
  { value: '#7A3B58', label: 'Aubergine zacht' },
  { value: '#5A2440', label: 'Aubergine diep' },
]

export const textColors = [
  { value: '#333333', label: 'Donkergrijs (huidig)' },
  { value: '#3A3335', label: 'Warm antraciet' },
  { value: '#45283A', label: 'Aubergine donker' },
  { value: '#5A2440', label: 'Aubergine diep' },
]

/**
 * Lettertypes. `load` laadt een testlettertype pas wanneer het gekozen wordt,
 * zodat gewone bezoekers niets extra's downloaden.
 */
export const headingFonts = [
  { value: 'playfair', label: 'Playfair Display (huidig)', css: "'Playfair Display', Georgia, serif" },
  {
    value: 'cormorant', label: 'Cormorant Garamond', css: "'Cormorant Garamond', Georgia, serif",
    load: () => Promise.all([import('@fontsource/cormorant-garamond/500.css'), import('@fontsource/cormorant-garamond/600.css')]),
  },
  {
    value: 'lora', label: 'Lora', css: "'Lora', Georgia, serif",
    load: () => Promise.all([import('@fontsource/lora/400.css'), import('@fontsource/lora/500.css')]),
  },
  {
    value: 'fraunces', label: 'Fraunces', css: "'Fraunces', Georgia, serif",
    load: () => Promise.all([import('@fontsource/fraunces/400.css'), import('@fontsource/fraunces/500.css')]),
  },
]

export const bodyFonts = [
  { value: 'dmsans', label: 'DM Sans (huidig)', css: "'DM Sans', system-ui, sans-serif" },
  {
    value: 'nunito', label: 'Nunito Sans', css: "'Nunito Sans', system-ui, sans-serif",
    load: () => Promise.all([import('@fontsource/nunito-sans/400.css'), import('@fontsource/nunito-sans/600.css')]),
  },
  {
    value: 'sourcesans', label: 'Source Sans 3', css: "'Source Sans 3', system-ui, sans-serif",
    load: () => Promise.all([import('@fontsource/source-sans-3/400.css'), import('@fontsource/source-sans-3/600.css')]),
  },
  {
    value: 'lora', label: 'Lora (met schreef)', css: "'Lora', Georgia, serif",
    load: () => Promise.all([import('@fontsource/lora/400.css'), import('@fontsource/lora/500.css'), import('@fontsource/lora/400-italic.css')]),
  },
]

export const handFonts = [
  { value: 'dancing', label: 'Dancing Script (huidig)', css: "'Dancing Script', cursive" },
  { value: 'parisienne', label: 'Parisienne', css: "'Parisienne', cursive", load: () => import('@fontsource/parisienne/400.css') },
  { value: 'allura', label: 'Allura', css: "'Allura', cursive", load: () => import('@fontsource/allura/400.css') },
  { value: 'sacramento', label: 'Sacramento', css: "'Sacramento', cursive", load: () => import('@fontsource/sacramento/400.css') },
]

export const defaults = {
  groen: greens[0].value,
  kop: headingColors[0].value,
  tekst: textColors[0].value,
  fontKop: headingFonts[0].value,
  fontTekst: bodyFonts[0].value,
  fontHand: handFonts[0].value,
  paneel: 0.78, // dekking van de crème panelen (0 = doorzichtig, 1 = dicht)
  heroTitel: site.showHeroTitle !== false,
}

function applyFont(varName, list, value) {
  const root = document.documentElement
  const font = list.find((f) => f.value === value)
  if (!font || value === list[0].value) {
    root.style.removeProperty(varName)
    return
  }
  font.load?.()
  root.style.setProperty(varName, font.css)
}

export function loadChoices() {
  try {
    return { ...defaults, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') }
  } catch {
    return { ...defaults }
  }
}

export function saveChoices(choices) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(choices))
  } catch {
    /* opslag niet beschikbaar */
  }
}

export function clearChoices() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    /* idem */
  }
}

/** Zet de keuzes als CSS-variabelen op <html>. */
export function applyChoices(c) {
  const root = document.documentElement
  const set = (name, value, def) => (value && value !== def ? root.style.setProperty(name, value) : root.style.removeProperty(name))
  set('--groen', c.groen, defaults.groen)
  set('--kop', c.kop, defaults.kop)
  set('--tekst', c.tekst, defaults.tekst)
  set('--paneel-dekking', String(c.paneel), String(defaults.paneel))
  applyFont('--font-kop', headingFonts, c.fontKop)
  applyFont('--font-tekst', bodyFonts, c.fontTekst)
  applyFont('--font-hand', handFonts, c.fontHand)
  root.dataset.heroTitel = c.heroTitel ? 'aan' : 'uit'
}

/** WCAG-contrastverhouding tussen twee hexkleuren. */
export function contrast(a, b) {
  const lum = (hex) => {
    const [r, g, bl] = [1, 3, 5]
      .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
      .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
    return 0.2126 * r + 0.7152 * g + 0.0722 * bl
  }
  const [x, y] = [lum(a), lum(b)]
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05)
}

/** Leesbare samenvatting om door te sturen. */
export function describe(c) {
  const name = (list, v) => list.find((o) => o.value.toLowerCase() === v.toLowerCase())?.label || 'eigen kleur'
  const font = (list, v) => (list.find((f) => f.value === v)?.label || v).replace(' (huidig)', '')
  return [
    'Stijlkeuzes ASJblieft:',
    `- Groen (knoppen, links): ${c.groen} (${name(greens, c.groen)})`,
    `- Kleur koppen: ${c.kop} (${name(headingColors, c.kop)})`,
    `- Kleur tekst: ${c.tekst} (${name(textColors, c.tekst)})`,
    `- Lettertype koppen: ${font(headingFonts, c.fontKop)}`,
    `- Lettertype tekst: ${font(bodyFonts, c.fontTekst)}`,
    `- Lettertype handschrift: ${font(handFonts, c.fontHand)}`,
    `- Dekking panelen: ${Math.round(c.paneel * 100)}%`,
    `- Titel ASJblieft op homepage: ${c.heroTitel ? 'aan' : 'uit'}`,
  ].join('\n')
}
