import { PageHero, ContactBand, Button } from '../components/ui'
import { IconZwanger, IconHart } from '../components/art/Icons'
import { site } from '../config/site'

export default function Begeleiding() {
  return (
    <>
      <PageHero title="Begeleiding" script="In jouw tempo, op jouw manier">
        Persoonlijke gesprekken bij zwangerschapskeuzes, na een miskraam of na een abortus. Zonder oordeel, met
        aandacht voor wat jij voelt en nodig hebt.
      </PageHero>

      <section className="section" id="keuzes">
        <div className="container split">
          <IconZwanger className="split-icon" />
          <div>
            <h2>Bij een zwangerschapskeuze</h2>
            <p>
              Een onverwachte zwangerschap kan je overvallen. Misschien twijfel je, misschien weet je het eigenlijk al
              maar voelt het zwaar. Of misschien zijn er omstandigheden die de keuze ingewikkeld maken.
            </p>
            <p>In de gesprekken is er ruimte om:</p>
            <ul className="soft-list">
              <li>je gevoelens en gedachten te ordenen;</li>
              <li>stil te staan bij wat voor jou belangrijk is;</li>
              <li>te onderzoeken welke keuze bij jou en jouw situatie past;</li>
              <li>na te denken over hoe je verder wilt, wat je ook besluit.</li>
            </ul>
            <p>Ik geef geen advies over wat je moet kiezen. Ik help je om je eigen antwoord te vinden.</p>
          </div>
        </div>
      </section>

      <section className="section tinted" id="verlies">
        <div className="container split">
          <IconHart className="split-icon" />
          <div>
            <h2>Na een miskraam of abortus</h2>
            <p>
              Verlies tijdens de zwangerschap is vaak een stil verdriet. De omgeving weet het soms niet, of weet niet goed
              wat te zeggen. En ook na een bewuste keuze kunnen er gevoelens zijn van verdriet, opluchting, schuld of
              twijfel – soms allemaal tegelijk.
            </p>
            <p>
              Alles wat je voelt mag er zijn. Samen geven we jouw ervaring een plek, zodat je weer ruimte krijgt om verder
              te gaan.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="werkwijze">
        <div className="container narrow">
          <h2 className="center">Werkwijze</h2>
          <ol className="steps">
            <li>
              <h3>Kennismaken</h3>
              <p>Je neemt contact op en we plannen een eerste gesprek. Daarin kijken we of het klikt en wat je zoekt.</p>
            </li>
            <li>
              <h3>Gesprekken</h3>
              <p>
                Een gesprek duurt {site.sessionLength} en vindt plaats in {site.sessionCity}. Hoeveel gesprekken je nodig
                hebt, bepalen we samen.
              </p>
            </li>
            <li>
              <h3>Afronden</h3>
              <p>We sluiten af wanneer het voor jou goed voelt, en kijken terug op wat je hebt meegenomen.</p>
            </li>
          </ol>
          <div className="info-card glass-card">
            <h3>Tarieven</h3>
            <p>{site.rates || 'De tarieven volgen binnenkort. Neem gerust contact op voor meer informatie.'}</p>
            <Button to="/contact?onderwerp=kennismaking">Plan een kennismaking</Button>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  )
}
