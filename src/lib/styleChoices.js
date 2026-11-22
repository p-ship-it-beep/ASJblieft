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

export const defaults = {
  groen: greens[0].value,
  kop: headingColors[0].value,
  tekst: textColors[0].value,
  heroTitel: site.showHeroTitle !== false,
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
  return [
    'Stijlkeuzes ASJblieft:',
    `- Groen (knoppen, links): ${c.groen} (${name(greens, c.groen)})`,
    `- Kleur koppen: ${c.kop} (${name(headingColors, c.kop)})`,
    `- Kleur tekst: ${c.tekst} (${name(textColors, c.tekst)})`,
    `- Titel ASJblieft op homepage: ${c.heroTitel ? 'aan' : 'uit'}`,
  ].join('\n')
}
