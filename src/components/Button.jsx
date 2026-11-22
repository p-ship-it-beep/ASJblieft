import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './Button.css'

/** Olijfgroene knop. Met `to` een interne link, met `href` een externe, anders een <button>. */
export default function Button({ to, href, children, arrow = true, small = false, className = '', ...rest }) {
  const cls = `btn ${small ? 'btn-small' : ''} ${className}`.trim()
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />}
    </>
  )
  if (to) return <Link className={cls} to={to} {...rest}>{inner}</Link>
  if (href) return <a className={cls} href={href} {...rest}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}
