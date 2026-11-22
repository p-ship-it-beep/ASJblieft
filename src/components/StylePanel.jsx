import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Palette, X, Copy, RotateCcw, Check } from 'lucide-react'
import {
  greens, headingColors, textColors, defaults, PANEL_KEY,
  loadChoices, saveChoices, clearChoices, applyChoices, contrast, describe,
} from '../lib/styleChoices'
import './StylePanel.css'

/** Of het paneel zichtbaar is: ?stijl=aan / ?stijl=uit, onthouden in de browser. */
function usePanelEnabled(search) {
  const param = new URLSearchParams(search).get('stijl')
  try {
    if (param === 'aan') localStorage.setItem(PANEL_KEY, '1')
    if (param === 'uit') localStorage.removeItem(PANEL_KEY)
    return localStorage.getItem(PANEL_KEY) === '1'
  } catch {
    return param === 'aan'
  }
}

function Swatches({ name, options, value, onChange, against }) {
  return (
    <div className="sp-swatches" role="radiogroup" aria-label={name}>
      {options.map((o) => {
        const active = o.value.toLowerCase() === value.toLowerCase()
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={active}
            className={`sp-swatch ${active ? 'is-active' : ''}`}
            onClick={() => onChange(o.value)}
            title={`${o.label} ${o.value}${against ? ` – contrast ${contrast(o.value, against).toFixed(1)}:1` : ''}`}
          >
            <span className="sp-dot" style={{ background: o.value }} />
            <span className="sp-label">{o.label}</span>
          </button>
        )
      })}
    </div>
  )
}

export default function StylePanel() {
  const { search } = useLocation()
  const enabled = usePanelEnabled(search)
  const [open, setOpen] = useState(true)
  const [c, setC] = useState(loadChoices)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    applyChoices(c)
    saveChoices(c)
  }, [c])

  if (!enabled) return null

  const update = (key) => (value) => setC((prev) => ({ ...prev, [key]: value }))
  const groenContrast = contrast(c.groen, '#FAF8F5')

  async function copy() {
    const text = describe(c)
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      window.prompt('Kopieer deze tekst:', text)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function reset() {
    clearChoices()
    setC({ ...defaults })
  }

  if (!open) {
    return (
      <button type="button" className="sp-fab" onClick={() => setOpen(true)} aria-label="Stijlpaneel openen">
        <Palette size={22} aria-hidden="true" />
      </button>
    )
  }

  return (
    <aside className="sp" aria-label="Stijlpaneel (alleen zichtbaar voor jou)">
      <div className="sp-head">
        <strong>Stijl testen</strong>
        <button type="button" className="sp-icon" onClick={() => setOpen(false)} aria-label="Stijlpaneel inklappen">
          <X size={18} aria-hidden="true" />
        </button>
      </div>

      <fieldset>
        <legend>Groen (knoppen, links)</legend>
        <Swatches name="Groen" options={greens} value={c.groen} onChange={update('groen')} against="#FAF8F5" />
        <label className="sp-custom">
          <input type="color" value={c.groen} onChange={(e) => update('groen')(e.target.value)} />
          <span>Eigen tint: {c.groen.toUpperCase()}</span>
        </label>
        <p className={`sp-contrast ${groenContrast >= 4.5 ? 'ok' : 'bad'}`}>
          Contrast met crème letters: {groenContrast.toFixed(1)}:1 {groenContrast >= 4.5 ? '(voldoet)' : '(te licht, minimaal 4,5)'}
        </p>
      </fieldset>

      <fieldset>
        <legend>Kleur koppen</legend>
        <Swatches name="Kleur koppen" options={headingColors} value={c.kop} onChange={update('kop')} />
      </fieldset>

      <fieldset>
        <legend>Kleur tekst</legend>
        <Swatches name="Kleur tekst" options={textColors} value={c.tekst} onChange={update('tekst')} />
      </fieldset>

      <fieldset>
        <legend>Homepage</legend>
        <label className="sp-switch">
          <input type="checkbox" checked={c.heroTitel} onChange={(e) => update('heroTitel')(e.target.checked)} />
          <span>Grote titel "ASJblieft" tonen</span>
        </label>
      </fieldset>

      <div className="sp-actions">
        <button type="button" className="sp-btn" onClick={copy}>
          {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
          {copied ? 'Gekopieerd' : 'Kopieer mijn keuzes'}
        </button>
        <button type="button" className="sp-btn sp-btn-ghost" onClick={reset}>
          <RotateCcw size={16} aria-hidden="true" /> Standaard
        </button>
      </div>
      <p className="sp-note">Alleen zichtbaar voor jou. Verbergen: <code>?stijl=uit</code></p>
    </aside>
  )
}
