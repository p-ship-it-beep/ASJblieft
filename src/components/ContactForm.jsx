import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import Button from './Button'
import { site, subjects } from '../config/site'
import './ContactForm.css'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(v) {
  const e = {}
  if (!v.naam.trim()) e.naam = 'Vul je naam in.'
  if (!v.email.trim()) e.email = 'Vul je e-mailadres in.'
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Dit e-mailadres lijkt niet te kloppen.'
  if (!v.akkoord) e.akkoord = 'Geef aan dat je akkoord gaat met de privacyverklaring.'
  return e
}

/** Bepaalt of er een formulierdienst is ingesteld (anders mailto). */
function formTarget() {
  const { provider, endpoint, accessKey } = site.form
  if (provider === 'web3forms') return accessKey ? endpoint || 'https://api.web3forms.com/submit' : null
  return endpoint || null
}

export default function ContactForm({ initialSubject = 'kennismaking' }) {
  const [values, setValues] = useState({
    naam: '', email: '', telefoon: '', onderwerp: initialSubject, toelichting: '', akkoord: false, website: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | mailto | error
  const formRef = useRef(null)

  const set = (name) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    if (values.website) return // honeypot ingevuld: spam

    const found = validate(values)
    setErrors(found)
    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      formRef.current.querySelector(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    const subjectLabel = subjects.find((s) => s.value === values.onderwerp)?.label || 'Contact'
    const target = formTarget()

    if (!target) {
      console.info(
        '[ASJblieft] Geen formulierdienst ingesteld (VITE_FORM_ENDPOINT / VITE_FORM_KEY in .env). ' +
          'Het formulier valt terug op een mailto-link.',
      )
      const body = [
        `Naam: ${values.naam}`,
        `E-mail: ${values.email}`,
        values.telefoon && `Telefoon: ${values.telefoon}`,
        `Onderwerp: ${subjectLabel}`,
        values.toelichting && `\n${values.toelichting}`,
      ].filter(Boolean).join('\n')
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${subjectLabel} via de website`)}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }

    setStatus('sending')
    const payload = {
      naam: values.naam,
      email: values.email,
      telefoon: values.telefoon,
      onderwerp: subjectLabel,
      toelichting: values.toelichting,
      website: values.website,
    }
    if (site.form.provider === 'web3forms') {
      Object.assign(payload, {
        access_key: site.form.accessKey,
        subject: `${subjectLabel} via asjblieft.nl`,
        from_name: 'Website ASJblieft',
        botcheck: '',
      })
    }

    try {
      const res = await fetch(target, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('sent')
    } catch (err) {
      console.error('[ASJblieft] Versturen mislukt:', err)
      setStatus('error')
    }
  }

  if (status === 'sent' || status === 'mailto') {
    return (
      <div className="form-thanks" role="status">
        <Heart size={32} strokeWidth={1.5} aria-hidden="true" />
        <p className="form-thanks-text">Dankjewel. Ik neem zo snel mogelijk persoonlijk contact met je op.</p>
        {status === 'mailto' && (
          <p className="form-note">
            Je e-mailprogramma is geopend met je bericht. Verstuur die e-mail om hem bij mij te laten aankomen.
          </p>
        )}
      </div>
    )
  }

  const fieldProps = (name) => ({
    id: `f-${name}`,
    name,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `f-${name}-fout` : undefined,
  })
  const Error = ({ name }) =>
    errors[name] ? <p className="field-error" id={`f-${name}-fout`}>{errors[name]}</p> : null

  return (
    <form ref={formRef} className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="f-naam">Naam <span className="req">(verplicht)</span></label>
        <input {...fieldProps('naam')} type="text" autoComplete="name" value={values.naam} onChange={set('naam')} required />
        <Error name="naam" />
      </div>

      <div className="field">
        <label htmlFor="f-email">E-mailadres <span className="req">(verplicht)</span></label>
        <input {...fieldProps('email')} type="email" autoComplete="email" value={values.email} onChange={set('email')} required />
        <Error name="email" />
      </div>

      <div className="field">
        <label htmlFor="f-telefoon">Telefoonnummer</label>
        <input {...fieldProps('telefoon')} type="tel" autoComplete="tel" value={values.telefoon} onChange={set('telefoon')} />
      </div>

      <div className="field">
        <label htmlFor="f-onderwerp">Onderwerp</label>
        <select {...fieldProps('onderwerp')} value={values.onderwerp} onChange={set('onderwerp')}>
          {subjects.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="f-toelichting">Korte toelichting</label>
        <p className="field-hint" id="f-toelichting-hint">Een paar woorden is genoeg. De rest bespreken we samen.</p>
        <textarea
          id="f-toelichting"
          name="toelichting"
          rows="3"
          aria-describedby="f-toelichting-hint"
          value={values.toelichting}
          onChange={set('toelichting')}
        />
      </div>

      {/* Honeypot: onzichtbaar voor bezoekers, bots vullen het in */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="f-website">Laat dit veld leeg</label>
        <input id="f-website" name="website" type="text" tabIndex="-1" autoComplete="off" value={values.website} onChange={set('website')} />
      </div>

      <div className="field field-check">
        <input {...fieldProps('akkoord')} type="checkbox" checked={values.akkoord} onChange={set('akkoord')} required />
        <label htmlFor="f-akkoord">
          Ik ga akkoord met de verwerking van mijn gegevens volgens de <Link to="/privacy">privacyverklaring</Link>
        </label>
        <Error name="akkoord" />
      </div>

      {status === 'error' && (
        <p className="form-error" role="alert">
          Er ging iets mis bij het versturen. Probeer het nog eens, of mail direct naar{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}

      <Button type="submit" arrow={false} disabled={status === 'sending'} aria-busy={status === 'sending'}>
        {status === 'sending' ? 'Bezig met versturen…' : 'Verstuur'}
        <Heart size={17} strokeWidth={1.8} aria-hidden="true" />
      </Button>
    </form>
  )
}
