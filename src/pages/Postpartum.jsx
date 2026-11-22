import { Sparkles, BatteryMedium, Baby, HeartHandshake } from 'lucide-react'
import Button from '../components/Button'
import Panel from '../components/Panel'
import { GroupCircle } from '../components/illustrations'
import usePageMeta from '../lib/usePageMeta'
import { site } from '../config/site'
import './Pages.css'

const themes = [
  { icon: Sparkles, text: 'De overgang naar het moederschap en identiteit' },
  { icon: BatteryMedium, text: 'Eigen behoeften, energie en grenzen' },
  { icon: Baby, text: 'De verbinding met je baby en vertrouwen in jezelf als moeder' },
  { icon: HeartHandshake, text: 'Relatie, intimiteit en seksualiteit' },
]

export default function Postpartum() {
  usePageMeta(
    'Postpartum groepen',
    'Postpartum groepen in Den Haag: ontmoeting, herkenning, reflectie en verbinding voor moeders na de bevalling.',
  )
  const loc = site.postpartumLocation

  return (
    <>
      <section className="container page-intro">
        <GroupCircle className="page-intro-art" />
        <div>
          <h1>Postpartum groepen</h1>
          <p className="accent">Samen delen, samen verbinden</p>
          <p className="lead">
            Voor moeders die na de bevalling behoefte hebben aan ontmoeting, herkenning, reflectie en verbinding.
          </p>
        </div>
      </section>

      <section className="container section-tight stack">
        <Panel>
          <h2>Ruimte voor jouw verhaal</h2>
          <p>
            Een groep komt standaard vier keer bij elkaar. Heeft de groep behoefte om langer samen op te trekken, dan
            kunnen er bijeenkomsten bij.
          </p>
          <p>
            Het is ruimte voor je eigen verhaal en je eigen ervaring. Het is geen cursus of training om een betere moeder
            te worden.
          </p>
          <p>
            We werken met verschillende reflectieve werkvormen. Voorbereiding is niet nodig, en iedereen bepaalt zelf wat
            ze deelt.
          </p>
        </Panel>

        <div>
          <h2 className="section-title">Mogelijke thema's</h2>
          <ul className="grid-4 theme-cards">
            {themes.map(({ icon: Icon, text }) => (
              <li key={text} className="theme-card">
                <Icon size={32} strokeWidth={1.5} aria-hidden="true" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <Panel>
          <h2>Praktisch</h2>
          <ul className="soft-list">
            <li>Locatie: {loc.name}, {loc.street}, {loc.city}</li>
            <li>Mogelijke momenten: woensdagmiddag of zaterdagochtend</li>
            <li>Een groep start zodra er voldoende aanmeldingen zijn en de locatie beschikbaar is</li>
            <li>Er is geen vaste leeftijdsgrens voor baby's</li>
            <li>Aanmelden tijdens de zwangerschap kan; de bijeenkomsten starten nadat de verloskundige zorg is afgesloten</li>
          </ul>
          <Button to="/contact?onderwerp=postpartum">Ik heb interesse in een Postpartum groep</Button>
        </Panel>
      </section>
    </>
  )
}
