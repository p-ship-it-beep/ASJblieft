import { PageHero, Button } from '../components/ui'

export default function NotFound() {
  return (
    <PageHero title="Pagina niet gevonden" script="Even de weg kwijt">
      <p>Deze pagina bestaat niet (meer).</p>
      <Button to="/">Terug naar de homepage</Button>
    </PageHero>
  )
}
