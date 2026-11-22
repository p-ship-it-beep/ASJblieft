import { useEffect } from 'react'
import { site } from '../config/site'

/** Zet per pagina een eigen <title> en meta description. */
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : `${site.name} – ${site.payoff.replace(/\.$/, '')}`
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    if (description) meta.content = description
  }, [title, description])
}
