import { IconZwanger, IconGroep, IconHart } from '../components/art/Icons'
import { Button, ServiceCard, ContactBand } from '../components/ui'
import { site } from '../config/site'

const themes = [
  ['Twijfel bij een zwangerschap', 'Een onbedoelde of onverwachte zwangerschap? Samen brengen we in kaart wat er speelt, zonder oordeel.'],
  ['Na een miskraam of abortus', 'Verlies krijgt niet altijd de erkenning die het verdient. Hier mag jouw verdriet er gewoon zijn.'],
  ['Het eerste jaar als moeder', 'In de Postpartum groepen deel je ervaringen met andere moeders, in een veilige en warme setting.'],
]

export default function Home() {
  return (
    <>
      <section className="hero">
        {/* Achtergrond ontworpen in Canva: public/images/achtergrond-aquarel.jpg */}
        <div className="bg-aquarel" aria-hidden="true" />

        <div className="container hero-grid">
          <div className="hero-text">
            <h1 className="hero-title">{site.name}</h1>
            <p className="script hero-script">{site.tagline.replace(/\.$/, '')}</p>
            <p className="hero-lead">
              Soms is het leven een wirwar van gevoelens, keuzes en vragen.{' '}
              {site.name} biedt een luisterend oor, warme begeleiding en ruimte om stil te staan bij wat jij nodig hebt.
            </p>
            <Button to="/begeleiding">Ontdek wat ik voor je kan betekenen</Button>
          </div>
        </div>

        <div className="container card-row">
          <ServiceCard icon={IconZwanger} title="Begeleiding" to="/begeleiding">
            Bij zwangerschapskeuzes, miskraam en abortus.
          </ServiceCard>
          <ServiceCard icon={IconGroep} title="Postpartum groepen" to="/postpartum-groepen">
            Samen delen, verbinden en ruimte voor jouw verhaal.
          </ServiceCard>
          <ServiceCard icon={IconHart} title="Over mij" to="/over-mij">
            Wie ik ben, en wat mij drijft.
          </ServiceCard>
        </div>
      </section>

      <section className="section intro">
        <div className="container narrow center">
          <p className="script section-script">{site.payoff.replace(/\.$/, '')}</p>
          <h2>Ruimte voor alles wat er is</h2>
          <p>
            Een zwangerschap roept van alles op. Blijdschap, twijfel, verdriet, of alles tegelijk. Soms sta je voor een
            keuze die niemand anders voor je kan maken. Soms is er verlies, en lijkt de wereld gewoon door te gaan. En
            soms ben je net moeder geworden en vraag je je af waarom het zo anders voelt dan je had verwacht.
          </p>
          <p>
            Bij {site.name} hoeft niets. Er is geen goed of fout gevoel en geen juiste route. Ik luister, denk met je
            mee en help je te ontdekken wat voor jóu klopt.
          </p>
        </div>
      </section>

      <section className="section themes">
        <div className="container theme-grid">
          {themes.map(([t, p]) => (
            <div className="theme" key={t}>
              <span className="theme-dot" aria-hidden="true" />
              <h3>{t}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactBand />
    </>
  )
}
