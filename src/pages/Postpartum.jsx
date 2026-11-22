import { CalendarDays, MapPin, Users, Repeat } from 'lucide-react'
import { PageHero, ContactBand } from '../components/ui'
import { site } from '../config/site'

const volgt = 'volgt nog'

export default function Postpartum() {
  const p = site.postpartum
  const moments = p.moments.join(' of ')
  return (
    <>
      <PageHero title="Postpartum groepen" script="Samen delen, samen dragen">
        Het eerste jaar met een baby is mooi, intens en soms eenzaam. In een kleine groep moeders is er ruimte voor
        alles wat dat met je doet.
      </PageHero>

      <section className="section">
        <div className="container narrow">
          <h2>Wat kun je verwachten?</h2>
          <p>
            In de Postpartum groepen kom je samen met andere moeders die ook net een kindje hebben gekregen. We praten
            over wat je bezighoudt: de bevalling, je nieuwe rol, je relatie, je lijf, slaap, twijfels en mooie momenten.
            Er is niets wat je moet delen – luisteren mag ook.
          </p>
          <p>
            Je ontdekt dat je niet de enige bent, en je gaat naar huis met herkenning, rust en misschien wel een paar
            nieuwe vriendinnen.
          </p>
        </div>
      </section>

      <section className="section tinted">
        <div className="container facts">
          <div className="glass-card fact">
            <MapPin strokeWidth={1.5} />
            <h3>Locatie</h3>
            <p>{p.locationName}<br />{p.address}, {p.city}</p>
          </div>
          <div className="glass-card fact">
            <CalendarDays strokeWidth={1.5} />
            <h3>Wanneer</h3>
            <p>Op {moments}.<br />Startdata: {p.startDates ? p.startDates.join(', ') : volgt}</p>
          </div>
          <div className="glass-card fact">
            <Repeat strokeWidth={1.5} />
            <h3>Bijeenkomsten</h3>
            <p>{p.meetings} bijeenkomsten</p>
          </div>
          <div className="glass-card fact">
            <Users strokeWidth={1.5} />
            <h3>Groepsgrootte</h3>
            <p>{p.groupSize || volgt}</p>
          </div>
        </div>
      </section>

      <ContactBand title="Interesse in een groep?" to="/contact?onderwerp=postpartum" label="Meld je aan of stel je vraag">
        Laat het me weten, dan houd ik je op de hoogte van de startdata.
      </ContactBand>
    </>
  )
}
