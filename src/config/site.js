/**
 * CENTRALE GEGEVENS VAN DE WEBSITE
 * Pas hier contactgegevens en praktische informatie aan.
 * Waarden op `null` zijn nog niet bekend en worden dan niet getoond.
 * Kleuren staan als CSS-variabelen in src/styles/global.css.
 */
export const site = {
  name: 'ASJblieft',
  payoff: 'Samen in alle fases.',
  subtitle: 'Begeleiding bij zwangerschapskeuzes, verlies en het ouderschap',
  tagline: 'Omdat jouw verhaal telt',
  email: 'annemarie@asjblieft.nl',
  phone: null, //    volgt nog, bijv. '06 12345678'
  whatsapp: null, // volgt nog, internationaal zonder + of spaties, bijv. '31612345678'
  region: 'Den Haag en omgeving',
  postpartumLocation: {
    name: 'Tara Verloskundigenpraktijk',
    street: 'Prins Hendrikstraat 151',
    city: 'Den Haag',
  },
  /**
   * Achtergrond van de hele site
   * - 'svg'   → getekende ecolinevlekken met een eigen compositie per pagina
   * - 'canva' → de aquarel uit Canva (public/ecoline/canva-aquarel.jpg) op alle pagina's (standaard)
   * Testen zonder dit aan te passen: zet ?achtergrond=canva of ?achtergrond=svg achter
   * het adres. Die keuze onthoudt je browser; ?achtergrond=standaard zet hem terug.
   */
  background: 'canva',
  backgroundImages: {
    canva: '/ecoline/canva-aquarel.jpg',
  },

  form: {
    provider: 'web3forms', //                      of 'formspree' of 'php'
    endpoint: import.meta.env.VITE_FORM_ENDPOINT, // in .env
    accessKey: import.meta.env.VITE_FORM_KEY,
  },
}

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/begeleiding', label: 'Begeleiding' },
  { to: '/postpartum-groepen', label: 'Postpartum groepen' },
  { to: '/over-mij', label: 'Over mij' },
  { to: '/contact', label: 'Contact' },
]

/** Onderwerpen in het contactformulier. Link met ?onderwerp=<value>, bijv. /contact?onderwerp=postpartum */
export const subjects = [
  { value: 'kennismaking', label: 'Kennismakingsgesprek' },
  { value: 'keuze', label: 'Begeleiding bij een zwangerschapskeuze' },
  { value: 'verlies', label: 'Begeleiding na miskraam of abortus' },
  { value: 'postpartum', label: 'Interesse in een Postpartum groep' },
  { value: 'anders', label: 'Anders' },
]

export const whatsappLink = (nr) => `https://wa.me/${nr}`
export const phoneLink = (nr) => `tel:${nr.replace(/[^\d+]/g, '')}`
