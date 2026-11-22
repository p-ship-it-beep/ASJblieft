import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Ecoline from './Ecoline'

/** Olijfgroene pilknop met pijl. */
export function Button({ to, href, children, variant = '', icon = true, ...rest }) {
  const cls = `btn ${variant}`.trim()
  const inner = (
    <>
      {children}
      {icon && <ArrowRight size={18} strokeWidth={1.8} />}
    </>
  )
  if (href) return <a className={cls} href={href} {...rest}>{inner}</a>
  return <Link className={cls} to={to} {...rest}>{inner}</Link>
}

/** Onderstreepte "Lees meer →"-link. */
export function MoreLink({ to, children = 'Lees meer' }) {
  return (
    <Link className="more-link" to={to}>
      <span>{children}</span> <ArrowRight size={16} strokeWidth={1.8} />
    </Link>
  )
}

/** Glazen kaart met lijn-icoon, zoals op de homepage. */
export function ServiceCard({ icon: Icon, title, children, to, linkLabel }) {
  return (
    <article className="glass-card service-card">
      {Icon && <Icon className="service-icon" />}
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
        {to && <MoreLink to={to}>{linkLabel}</MoreLink>}
      </div>
    </article>
  )
}

/** Kop voor binnenpagina's: aquarel, titel in serif, ondertitel in script. */
export function PageHero({ title, script, children }) {
  return (
    <section className="page-hero">
      <div className="bg-aquarel" aria-hidden="true" />
      <div className="container page-hero-inner">
        <h1>{title}</h1>
        {script && <p className="script page-hero-script">{script}</p>}
        {children && <div className="lead">{children}</div>}
      </div>
    </section>
  )
}

/** Aquarelband met een oproep tot contact. */
export function ContactBand({ title = 'Wil je even kennismaken?', children, to = '/contact', label = 'Neem contact op' }) {
  return (
    <section className="contact-band">
      <Ecoline preset="plum" />
      <div className="container">
        <div className="glass-card contact-band-card">
          <h2>{title}</h2>
          <p>{children || 'Een eerste gesprek is vrijblijvend. We kijken samen wat jij nodig hebt – in jouw tempo.'}</p>
          <Button to={to}>{label}</Button>
        </div>
      </div>
    </section>
  )
}
