import Button from '../components/Button'
import Panel from '../components/Panel'
import { UnfoldingFlower, Nest, HandsHolding } from '../components/illustrations'
import usePageMeta from '../lib/usePageMeta'
import './Pages.css'

export default function Begeleiding() {
  usePageMeta(
    'Begeleiding',
    'Persoonlijke begeleiding bij zwangerschapskeuzes en na miskraam of abortus, in Den Haag. Gesprekken individueel of samen met je partner.',
  )

  return (
    <>
      <section className="container page-intro">
        <HandsHolding className="page-intro-art" />
        <div>
          <h1>Begeleiding</h1>
          <p className="accent">Ruimte voor wat jij nodig hebt</p>
          <p className="lead">
            Persoonlijke begeleiding bij zwangerschapskeuzes en na een miskraam of abortus. In gesprekken krijg je de
            ruimte om stil te staan bij wat er speelt, in jouw tempo.
          </p>
        </div>
      </section>

      <section className="container section-tight stack">
        <Panel as="article" className="block-with-art" id="zwangerschapskeuzes">
          <UnfoldingFlower className="block-art" />
          <div>
            <h2>Begeleiding bij zwangerschapskeuzes</h2>
            <p>
              Voor mensen die twijfelen over het voortzetten van een zwangerschap, en ook voor mensen die nadenken over het
              behouden of voortzetten ervan.
            </p>
            <p>
              Ik geef geen antwoord en neem geen beslissing over. Door gesprekken en gerichte vragen help ik je om je
              eigen gedachten, gevoelens en inzichten te onderzoeken, zodat je tot een eigen antwoord kunt komen.
            </p>
            <p>Dat kan in één gesprek of in meerdere gesprekken. De begeleiding is mogelijk:</p>
            <ul className="soft-list">
              <li>individueel;</li>
              <li>samen met een partner;</li>
              <li>of als combinatie van gesprekken samen en apart.</li>
            </ul>
          </div>
        </Panel>

        <Panel as="article" className="block-with-art" id="miskraam-abortus">
          <Nest className="block-art" />
          <div>
            <h2>Begeleiding na miskraam en abortus</h2>
            <p>
              Ik ben gecertificeerd miskraam- en abortuscoach en werk met het vijfstappenprogramma van Miskraambegeleiding
              Nederland.
            </p>
            <p>Deze begeleiding is er voor mensen die:</p>
            <ul className="soft-list">
              <li>een miskraam hebben meegemaakt;</li>
              <li>een abortus hebben gehad waar ze achter staan, en die toch verwerking met zich meebrengt;</li>
              <li>een abortus hebben meegemaakt die moeilijk of ongewenst voelde.</li>
            </ul>
          </div>
        </Panel>

        <Panel as="article">
          <h2>Praktisch</h2>
          <ul className="soft-list">
            <li>Gesprekken duren ongeveer 60 minuten. Een goed gesprek mag de ruimte krijgen die het nodig heeft.</li>
            <li>De begeleiding vindt fysiek plaats in Den Haag.</li>
            <li>Een gesprek tijdens een wandeling is mogelijk.</li>
            <li>
              Andere locaties zijn bespreekbaar. Vooral na een miskraam of abortus kan een neutrale plek prettig zijn.
            </li>
            <li>De gesprekken vinden plaats in persoonlijk contact; er is geen online begeleiding.</li>
          </ul>
          <Button to="/contact?onderwerp=kennismaking">Plan een kennismakingsgesprek</Button>
        </Panel>
      </section>
    </>
  )
}
