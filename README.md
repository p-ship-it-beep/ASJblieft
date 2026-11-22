# ASJblieft

Website van ASJblieft: begeleiding bij zwangerschapskeuzes, verlies en het ouderschap. Gebouwd met React en Vite.

## Installeren en lokaal draaien

Je hebt [Node.js](https://nodejs.org) (versie 20 of nieuwer) nodig.

```bash
npm install
npm run dev
```

De site draait dan op http://localhost:5173.

## Gegevens aanpassen

Alle praktische gegevens staan in **`src/config/site.js`**: e-mailadres, telefoon, WhatsApp, werkgebied en de locatie van de Postpartum groepen.

- Staat `phone` of `whatsapp` op `null`, dan toont de site dat onderdeel niet.
- Kleuren staan als variabelen bovenaan `src/styles/global.css`.

## Achtergrond kiezen (SVG of Canva-aquarel)

- **Testen in je eigen browser:** zet `?achtergrond=canva` achter het adres (bijv. `/?achtergrond=canva`). Je browser onthoudt die keuze op alle pagina's. Terug naar de getekende variant: `?achtergrond=svg`. Je eigen keuze wissen: `?achtergrond=standaard`.
- **Voor alle bezoekers wisselen:** zet in `src/config/site.js` `background` op `'canva'` of terug op `'svg'`.

## Ecolinescans en foto toevoegen

- **Ecoline-achtergrond:** de achtergrond wordt nu met SVG getekend. Wil je een echte scan gebruiken, zet die als WebP in `public/ecoline/` (bijvoorbeeld `home.webp`) en geef hem mee in `src/App.jsx`:
  `<EcolineBackground variant={variant} image="/ecoline/home.webp" />`.
  In `public/ecoline/` staat ook een aquarel die eerder in Canva is gemaakt (`canva-aquarel.jpg`).
- **Foto Over mij:** zet een portretfoto als `public/images/annemarie.webp`. Zolang die ontbreekt, staat er "Foto volgt".

## Contactformulier instellen

Kopieer `.env.example` naar `.env` en kies in `site.js` bij `form.provider` een dienst:

| Dienst | `provider` | In `.env` |
|---|---|---|
| Web3Forms | `"web3forms"` | `VITE_FORM_KEY` = je access key |
| Formspree | `"formspree"` | `VITE_FORM_ENDPOINT` = je Formspree-URL |
| Eigen hosting (PHP) | `"php"` | `VITE_FORM_ENDPOINT=/api/contact.php` |

Is er niets ingesteld, dan opent het formulier het e-mailprogramma van de bezoeker (mailto).
Bij PHP: controleer het ontvangstadres bovenaan `public/api/contact.php`.

## Bouwen en uploaden

```bash
npm run build
```

Dit maakt de map `dist/`. Die inhoud kan op elke webhosting. `public/.htaccess` zorgt dat alle pagina's werken op Apache.

### Automatisch publiceren (GitHub Actions)

Bij elke push naar `main` bouwt `.github/workflows/deploy.yml` de site en uploadt `dist/` via FTPS naar `/httpdocs/`.
Stel in GitHub onder *Settings → Secrets and variables → Actions* deze secrets in:

`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `VITE_FORM_ENDPOINT`, `VITE_FORM_KEY`

### Publiceren vanaf je eigen computer

Kopieer `.env.deploy.example` naar `.env.deploy`, vul de FTP-gegevens in en draai:

```bash
npm run deploy
```

`.env.deploy` staat in `.gitignore` en komt dus nooit in git.
