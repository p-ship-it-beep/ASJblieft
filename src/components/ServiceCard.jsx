import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './ServiceCard.css'

/** Kaart op een transparant crème paneel: illustratie, kop, korte tekst en "Lees meer". */
export default function ServiceCard({ illustration: Illustration, title, children, to }) {
  return (
    <article className="service-card">
      {Illustration && <Illustration className="service-card-art" />}
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
        {to && (
          <Link className="read-more" to={to}>
            Lees meer<span className="sr-only"> over {title.toLowerCase()}</span>
            <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  )
}
