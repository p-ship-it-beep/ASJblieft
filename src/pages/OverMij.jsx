import { useState } from 'react'
import Button from '../components/Button'
import Panel from '../components/Panel'
import { OpenHeart } from '../components/illustrations'
import usePageMeta from '../lib/usePageMeta'
import './Pages.css'

/** Foto in een organische uitsnede. Zolang public/images/annemarie.webp ontbreekt: placeholder. */
function Portrait() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="portrait">
      {!failed ? (
        <img src="/images/annemarie.webp" alt="Annemarie, de persoon achter ASJblieft" onError={() => setFailed(true)} />
      ) : (
        <span className="portrait-placeholder">Foto volgt</span>
      )}
    </div>
  )
}

export default function OverMij() {
  usePageMeta('Over mij', 'Maak kennis met Annemarie, de persoon achter ASJblieft, en ontdek waar de naam vandaan komt.')

  return (
    <>
      <section className="container page-intro about-intro">
        <Portrait />
        <div>
          <h1>Over mij</h1>
          <p className="accent">De persoon achter ASJblieft</p>
          <p className="lead">
            Ik ben Annemarie. <span className="placeholder">[Tekst volgt: achtergrond en ervaring]</span>
          </p>
        </div>
      </section>

      <section className="container section-tight stack">
        <Panel className="block-with-art">
          <OpenHeart className="block-art" />
          <div>
            <h2>Over de naam</h2>
            <p>ASJ zijn mijn initialen.</p>
            <p>De naam klinkt als "alsjeblieft", uitgesproken met een Haags accent.</p>
            <p>Mijn moeder zegt bij een bedankje vaak: "Daar heb je het voor."</p>
            <p>Ik bén ASJblieft: de persoon achter het bedrijf en de begeleiding.</p>
          </div>
        </Panel>

        <Panel>
          <h2>Mijn achtergrond</h2>
          <p><span className="placeholder">[Tekst volgt: achtergrond en ervaring]</span></p>
          <h2>Wat mij drijft</h2>
          <p><span className="placeholder">[Tekst volgt: wat mij drijft]</span></p>
          <Button to="/contact?onderwerp=kennismaking">Plan een kennismakingsgesprek</Button>
        </Panel>
      </section>
    </>
  )
}
