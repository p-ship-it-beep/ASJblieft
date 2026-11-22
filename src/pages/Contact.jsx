import { useSearchParams } from 'react-router-dom'
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react'
import Panel from '../components/Panel'
import ContactForm from '../components/ContactForm'
import { Path } from '../components/illustrations'
import usePageMeta from '../lib/usePageMeta'
import { site, subjects, phoneLink, whatsappLink } from '../config/site'
import './Pages.css'

export default function Contact() {
  usePageMeta('Contact', 'Neem contact op met ASJblieft of vraag een vrijblijvend kennismakingsgesprek aan.')
  const [params] = useSearchParams()
  const requested = params.get('onderwerp')
  const initialSubject = subjects.some((s) => s.value === requested) ? requested : 'kennismaking'

  return (
    <>
      <section className="container page-intro">
        <Path className="page-intro-art" />
        <div>
          <h1>Contact</h1>
          <p className="accent">Fijn dat je er bent</p>
          <p className="lead">
            Heb je een vraag, of wil je kennismaken? Laat het me weten. Een kennismakingsgesprek is vrijblijvend: we
            ontdekken samen wat je nodig hebt.
          </p>
        </div>
      </section>

      <section className="container section-tight contact-layout">
        <Panel>
          <h2>Stuur een bericht</h2>
          <ContactForm key={initialSubject} initialSubject={initialSubject} />
        </Panel>

        <Panel as="aside" className="contact-direct">
          <h2>Direct contact</h2>
          <ul className="contact-list">
            <li>
              <Mail size={20} aria-hidden="true" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            {site.phone && (
              <li>
                <Phone size={20} aria-hidden="true" />
                <a href={phoneLink(site.phone)}>{site.phone}</a>
              </li>
            )}
            {site.whatsapp && (
              <li>
                <MessageCircle size={20} aria-hidden="true" />
                <a href={whatsappLink(site.whatsapp)} target="_blank" rel="noreferrer">Stuur een WhatsApp</a>
              </li>
            )}
            <li>
              <MapPin size={20} aria-hidden="true" />
              <span>{site.region}</span>
            </li>
          </ul>
        </Panel>
      </section>
    </>
  )
}
