import { Link } from 'react-router-dom'
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react'
import Ecoline from './Ecoline'
import { site, nav, phoneLink, whatsappLink } from '../config/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <Ecoline preset="footer" />
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-name">{site.name}</span>
          <p className="script footer-payoff">{site.payoff}</p>
          <p>Persoonlijke begeleiding in {site.region}.</p>
        </div>

        <nav aria-label="Footermenu">
          <h2 className="footer-title">Pagina's</h2>
          <ul>
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer-title">Contact</h2>
          <ul className="contact-list">
            <li><Mail size={17} /><a href={`mailto:${site.email}`}>{site.email}</a></li>
            {site.phone && <li><Phone size={17} /><a href={phoneLink(site.phone)}>{site.phone}</a></li>}
            {site.whatsapp && (
              <li><MessageCircle size={17} /><a href={whatsappLink(site.whatsapp)} target="_blank" rel="noreferrer">WhatsApp</a></li>
            )}
            <li><MapPin size={17} /><span>{site.region}</span></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {year} {site.name}</span>
        <span>Met zorg gemaakt, voor jouw verhaal.</span>
      </div>
    </footer>
  )
}
