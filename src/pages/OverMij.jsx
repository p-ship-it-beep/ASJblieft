import { PageHero, ContactBand } from '../components/ui'
import { site } from '../config/site'

export default function OverMij() {
  return (
    <>
      <PageHero title="Over mij" script={`Hoi, ik ben ${site.owner}`} />

      <section className="section">
        <div className="container narrow">
          <div>
            {/* CONCEPTTEKST – vervang door het eigen verhaal van Annemarie */}
            <h2>Wie ik ben</h2>
            <p>
              Ik ben {site.owner}. Met {site.name} bied ik begeleiding aan vrouwen die voor een zwangerschapskeuze
              staan, verlies hebben meegemaakt of net moeder zijn geworden. Ik werk in {site.region}.
            </p>
            <h2>Wat mij drijft</h2>
            <p>
              Ik geloof dat ieder verhaal ertoe doet. Juist rondom zwangerschap, keuzes en verlies voelen veel vrouwen
              zich alleen, of niet gehoord. Ik wil een plek bieden waar je wél gehoord wordt – zonder oordeel, met
              warmte en met aandacht voor wat jij nodig hebt.
            </p>
            <h2>Hoe ik werk</h2>
            <p>
              Ik luister, stel vragen en denk met je mee. Ik volg jouw tempo en vertrouw erop dat jij weet wat goed voor
              je is. Soms heb je alleen even iemand nodig om dat samen mee te ontdekken.
            </p>
          </div>
        </div>
      </section>

      <ContactBand title="Kennismaken?" to="/contact?onderwerp=kennismaking" />
    </>
  )
}
