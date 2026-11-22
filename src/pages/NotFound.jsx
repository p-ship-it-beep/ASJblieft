import Button from '../components/Button'
import Panel from '../components/Panel'
import { Path } from '../components/illustrations'
import usePageMeta from '../lib/usePageMeta'
import './Pages.css'

export default function NotFound() {
  usePageMeta('Pagina niet gevonden', 'Deze pagina bestaat niet (meer).')

  return (
    <section className="container section">
      <Panel className="narrow-panel center">
        <Path className="notfound-art" />
        <h1>Deze pagina bestaat niet</h1>
        <p>Misschien is de link veranderd. Geen zorgen, je vindt de weg vanaf de homepage.</p>
        <Button to="/">Naar Home</Button>
      </Panel>
    </section>
  )
}
