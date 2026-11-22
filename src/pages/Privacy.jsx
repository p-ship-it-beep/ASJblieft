import Panel from '../components/Panel'
import usePageMeta from '../lib/usePageMeta'
import { site } from '../config/site'
import './Pages.css'

const sections = [
  { id: 'gegevens', title: 'Welke gegevens' },
  { id: 'doel', title: 'Waarvoor ik je gegevens gebruik' },
  { id: 'bewaartermijn', title: 'Hoe lang ik je gegevens bewaar' },
  { id: 'rechten', title: 'Jouw rechten' },
]

export default function Privacy() {
  usePageMeta('Privacyverklaring', 'Privacyverklaring van ASJblieft.')

  return (
    <section className="container section-tight">
      <Panel className="narrow-panel">
        <h1>Privacyverklaring</h1>
        <p><span className="placeholder">[Definitieve tekst volgt]</span></p>
        {sections.map((s) => (
          <div key={s.id} id={s.id}>
            <h2>{s.title}</h2>
            <p><span className="placeholder">[Definitieve tekst volgt]</span></p>
          </div>
        ))}
        <h2>Contact</h2>
        <p>
          Vragen over je gegevens? Mail naar <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <p><span className="placeholder">[Definitieve tekst volgt]</span></p>
      </Panel>
    </section>
  )
}
