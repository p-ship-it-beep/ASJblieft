import Button from '../components/Button'
import Panel from '../components/Panel'
import ServiceCard from '../components/ServiceCard'
import { HeroConnection, HandsHolding, GroupCircle, OpenHeart, Leaf } from '../components/illustrations'
import usePageMeta from '../lib/usePageMeta'
import { site } from '../config/site'
import './Pages.css'

const forWho = [
  'Stellen die samen nadenken over een zwangerschapskeuze',
  'Mensen met een kinderwens',
  'Mensen die een zwangerschap hebben verloren',
  'Mensen die een abortus hebben meegemaakt',
  'Moeders in de periode na de bevalling',
]

export default function Home() {
  usePageMeta(
    null,
    'ASJblieft – persoonlijke begeleiding bij zwangerschapskeuzes, zwangerschapsverlies en het ouderschap in Den Haag en omgeving. Samen in alle fases.',
  )

  return (
    <>
      <section className="hero container">
        <div className="hero-text">
          <h1 className="hero-title">{site.name}</h1>
          <p className="accent hero-accent">{site.tagline}</p>
          <p className="hero-lead">
            Soms is het leven een wirwar van gevoelens, keuzes en vragen. {site.name} biedt een luisterend oor, warme
            begeleiding en ruimte om stil te staan bij wat jij nodig hebt.
          </p>
          <Button to="/begeleiding">Ontdek wat ik voor je kan betekenen</Button>
        </div>
        <HeroConnection className="hero-art" />
      </section>

      <section className="container section-tight" aria-label="Wat ik doe">
        <div className="grid-3">
          <ServiceCard illustration={HandsHolding} title="Begeleiding" to="/begeleiding">
            Bij zwangerschapskeuzes, miskraam en abortus.
          </ServiceCard>
          <ServiceCard illustration={GroupCircle} title="Postpartum groepen" to="/postpartum-groepen">
            Samen delen, verbinden en ruimte voor jouw verhaal.
          </ServiceCard>
          <ServiceCard illustration={OpenHeart} title="Over mij" to="/over-mij">
            Wie ik ben, en wat mij drijft.
          </ServiceCard>
        </div>
      </section>

      <section className="container section">
        <Panel className="for-who">
          <Leaf className="for-who-leaf" />
          <h2>Voor wie</h2>
          <p>{site.name} is er voor iedereen die in een van deze fases ruimte zoekt voor het eigen verhaal:</p>
          <ul className="soft-list">
            {forWho.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p>
            Je bent van harte welkom voor een kennismakingsgesprek. Zonder verplichtingen, gewoon om te ontdekken of het
            klikt en wat je nodig hebt.
          </p>
          <Button to="/contact?onderwerp=kennismaking">Plan een kennismakingsgesprek</Button>
        </Panel>
      </section>
    </>
  )
}
