import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Heart, Menu, X } from 'lucide-react'
import { site } from '../config/site'

const begeleidingSub = [
  { to: '/begeleiding#keuzes', label: 'Zwangerschapskeuzes' },
  { to: '/begeleiding#verlies', label: 'Na miskraam of abortus' },
  { to: '/begeleiding#werkwijze', label: 'Werkwijze' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const subRef = useRef(null)

  // Menu's sluiten na navigeren
  useEffect(() => {
    setOpen(false)
    setSubOpen(false)
  }, [pathname, hash])

  // Dropdown sluiten bij klik buiten of Escape
  useEffect(() => {
    if (!subOpen) return
    const onClick = (e) => subRef.current && !subRef.current.contains(e.target) && setSubOpen(false)
    const onKey = (e) => e.key === 'Escape' && setSubOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [subOpen])

  return (
    <header className={`site-header ${open ? 'is-open' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label={`${site.name} – naar de homepage`}>
          <span className="brand-name">{site.name}</span>
          <span className="brand-sub">
            Begeleiding bij zwangerschapskeuzes,<br /> verlies en het ouderschap
          </span>
        </Link>

        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="hoofdmenu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
          <span className="sr-only">Menu</span>
        </button>

        <nav id="hoofdmenu" className="main-nav" aria-label="Hoofdmenu">
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li className={`has-sub ${subOpen ? 'sub-open' : ''}`} ref={subRef}>
              <div className="sub-trigger">
                <NavLink to="/begeleiding">Begeleiding</NavLink>
                <button
                  className="sub-toggle"
                  aria-expanded={subOpen}
                  aria-label="Submenu begeleiding"
                  onClick={() => setSubOpen((v) => !v)}
                >
                  <ChevronDown size={16} />
                </button>
              </div>
              <ul className="sub-menu">
                {begeleidingSub.map((s) => (
                  <li key={s.to}><Link to={s.to}>{s.label}</Link></li>
                ))}
              </ul>
            </li>
            <li><NavLink to="/postpartum-groepen">Postpartum groepen</NavLink></li>
            <li><NavLink to="/over-mij">Over mij</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <Link to="/contact" className="btn btn-sm header-cta">
            Neem contact op <Heart size={17} strokeWidth={1.7} />
          </Link>
        </nav>
      </div>
    </header>
  )
}
