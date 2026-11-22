/**
 * CENTRALE GEGEVENS VAN DE WEBSITE
 * --------------------------------
 * Pas hier contactgegevens en praktische informatie aan.
 * Waarden die op `null` staan zijn nog niet bekend en worden
 * automatisch niet (of als "volgt nog") getoond op de website.
 *
 * Kleuren en lettertypes staan in: src/styles/tokens.css
 */
export const site = {
  name: 'ASJblieft',
  payoff: 'Samen in alle fases.',
  tagline: 'Omdat jouw verhaal telt.',
  owner: 'Annemarie',
  url: 'https://www.asjblieft.nl',
  region: 'Den Haag en omgeving',

  // Contact
  email: 'annemarie@asjblieft.nl',
  phone: null, //    bijv. '06 12345678'  (nog niet bekend)
  whatsapp: null, // bijv. '31612345678' (internationaal, zonder + of spaties)

  // Nog niet bekend – laten staan op null tot het definitief is
  openingHours: null,
  rates: null,
  bookingUrl: null,

  // Individuele begeleiding
  sessionLength: 'ongeveer 60 minuten',
  sessionCity: 'Den Haag',

  // Postpartum groepen
  postpartum: {
    locationName: 'Tara Verloskundigenpraktijk',
    address: 'Prins Hendrikstraat 151',
    city: 'Den Haag',
    moments: ['woensdagmiddag', 'zaterdagochtend'],
    meetings: 4,
    groupSize: null, //  nog niet bekend
    startDates: null, // nog niet bekend, bijv. ['woensdag 14 januari 2027']
  },

  /**
   * Contactformulier
   * - endpoint leeg ('')  → tijdelijke mailto-oplossing (bezoeker verstuurt zelf een e-mail)
   * - '/contact.php'     → PHP-script op de hosting (zie public/contact.php)
   * - of een formulierdienst, bijv. 'https://formspree.io/f/xxxxxxx'
   * In de lokale ontwikkelomgeving wordt altijd mailto gebruikt (PHP draait daar niet).
   */
  contactForm: {
    endpoint: import.meta.env.PROD ? '/contact.php' : '',
  },
}

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/begeleiding', label: 'Begeleiding' },
  { to: '/postpartum-groepen', label: 'Postpartum groepen' },
  { to: '/over-mij', label: 'Over mij' },
  { to: '/contact', label: 'Contact' },
]

/** Onderwerpen in het contactformulier. `value` wordt gebruikt in links: /contact?onderwerp=postpartum */
export const subjects = [
  { value: 'kennismaking', label: 'Kennismakingsgesprek' },
  { value: 'keuze', label: 'Begeleiding bij een zwangerschapskeuze' },
  { value: 'verlies', label: 'Begeleiding na miskraam of abortus' },
  { value: 'postpartum', label: 'Interesse in een Postpartum groep' },
  { value: 'anders', label: 'Iets anders' },
]

export const whatsappLink = (nr) => `https://wa.me/${nr}`
export const phoneLink = (nr) => `tel:${nr.replace(/[^\d+]/g, '')}`
