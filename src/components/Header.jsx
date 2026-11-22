import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Heart, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { site, nav } from '../config/site'
import './Button.css'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const toggleRef = useRef(null)
  const panelRef = useRef(null)

  // Menu sluiten bij paginawissel
  useEffect(() => setOpen(false), [pathname])

  // Focus in het menu, Escape sluit, Tab blijft binnen menu + knop
  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    const focusables = () => [toggleRef.current, ...panel.querySelectorAll('a')]
    focusables()[1]?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      } else if (e.key === 'Tab') {
        const items = focusables()
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`site-header ${open ? 'is-open' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label={`${site.name}, naar de homepage`}>
          <Logo className="brand-logo" />
          <span className="brand-sub">{site.subtitle}</span>
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="hoofdmenu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          <span className="sr-only">{open ? 'Menu sluiten' : 'Menu openen'}</span>
        </button>

        <nav id="hoofdmenu" ref={panelRef} className="main-nav" aria-label="Hoofdmenu">
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-small header-cta">
            Neem contact op <Heart size={17} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
