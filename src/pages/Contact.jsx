import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Mail, Phone, MessageCircle, MapPin, Heart } from 'lucide-react'
import { PageHero } from '../components/ui'
import { site, subjects, phoneLink, whatsappLink } from '../config/site'

export default function Contact() {
  const [params] = useSearchParams()
  const initial = subjects.some((s) => s.value === params.get('onderwerp')) ? params.get('onderwerp') : 'kennismaking'
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    if (data.website) return // honeypot: spam

    const subjectLabel = subjects.find((s) => s.value === data.onderwerp)?.label || 'Contact'
    const endpoint = site.contactForm.endpoint

    if (!endpoint) {
      // Tijdelijke oplossing: e-mailprogramma van de bezoeker openen
      const body = `${data.bericht}\n\n${data.naam}\n${data.email}${data.telefoon ? `\n${data.telefoon}` : ''}`
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${subjectLabel} – via de website`)}&body=${encodeURIComponent(body)}`
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, onderwerpLabel: subjectLabel }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHero title="Contact" script="Fijn dat je er bent">
        Heb je een vraag, wil je kennismaken of je aanmelden voor een Postpartum groep? Laat een bericht achter, dan neem
        ik zo snel mogelijk contact met je op.
      </PageHero>

      <section className="section">
        <div className="container contact-grid">
          <form className="glass-card contact-form" onSubmit={onSubmit}>
            {status === 'sent' ? (
              <div className="form-thanks" role="status">
                <Heart size={32} strokeWidth={1.5} />
                <h2>Dank je wel</h2>
                <p>
                  {site.contactForm.endpoint
                    ? 'Je bericht is verstuurd. Ik neem zo snel mogelijk contact met je op.'
                    : 'Je e-mailprogramma is geopend met je bericht. Verstuur de e-mail om hem bij mij te laten aankomen.'}
                </p>
                <button type="button" className="btn btn-ghost" onClick={() => setStatus('idle')}>
                  Nog een bericht sturen
                </button>
              </div>
            ) : (
              <>
                <label>
                  Waar gaat je bericht over?
                  <select name="onderwerp" defaultValue={initial}>
                    {subjects.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </label>
                <div className="form-row">
                  <label>
                    Naam
                    <input name="naam" required autoComplete="name" />
                  </label>
                  <label>
                    E-mailadres
                    <input name="email" type="email" required autoComplete="email" />
                  </label>
                </div>
                <label>
                  <span>Telefoonnummer <span className="optional">(optioneel)</span></span>
                  <input name="telefoon" type="tel" autoComplete="tel" />
                </label>
                <label>
                  Je bericht
                  <textarea name="bericht" rows="6" required />
                </label>
                <label className="hp" aria-hidden="true">
                  Laat dit veld leeg
                  <input name="website" tabIndex="-1" autoComplete="off" />
                </label>
                <p className="form-note">Je gegevens gebruik ik alleen om contact met je op te nemen.</p>
                {status === 'error' && (
                  <p className="form-error" role="alert">
                    Er ging iets mis bij het versturen. Probeer het nog eens, of mail direct naar{' '}
                    <a href={`mailto:${site.email}`}>{site.email}</a>.
                  </p>
                )}
                <button className="btn" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Versturen…' : 'Verstuur bericht'} <Heart size={17} strokeWidth={1.7} />
                </button>
              </>
            )}
          </form>

          <aside className="contact-aside">
            <h2>Direct contact</h2>
            <ul className="contact-list">
              <li><Mail size={19} /><a href={`mailto:${site.email}`}>{site.email}</a></li>
              {site.phone && <li><Phone size={19} /><a href={phoneLink(site.phone)}>{site.phone}</a></li>}
              {site.whatsapp && (
                <li><MessageCircle size={19} /><a href={whatsappLink(site.whatsapp)} target="_blank" rel="noreferrer">Stuur een WhatsApp</a></li>
              )}
              <li><MapPin size={19} /><span>Gesprekken in {site.sessionCity}</span></li>
            </ul>
            <p className="script aside-script">{site.tagline.replace(/\.$/, '')}</p>
          </aside>
        </div>
      </section>
    </>
  )
}
