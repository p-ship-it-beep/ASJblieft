import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import { site, phoneLink, whatsappLink } from '../config/site'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-panel">
          <div className="footer-brand">
            <Logo className="footer-logo" />
            <p className="footer-payoff">{site.payoff}</p>
          </div>
          <ul className="footer-contact">
            <li>
              <Mail size={18} aria-hidden="true" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            {site.phone && (
              <li>
                <Phone size={18} aria-hidden="true" />
                <a href={phoneLink(site.phone)}>{site.phone}</a>
              </li>
            )}
            {site.whatsapp && (
              <li>
                <MessageCircle size={18} aria-hidden="true" />
                <a href={whatsappLink(site.whatsapp)} target="_blank" rel="noreferrer">WhatsApp</a>
              </li>
            )}
            <li>
              <MapPin size={18} aria-hidden="true" />
              <span>{site.region}</span>
            </li>
          </ul>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {site.name}</span>
            <Link to="/privacy">Privacyverklaring</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
