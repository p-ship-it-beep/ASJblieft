import './Logo.css'

/**
 * Woordmerk ASJblieft in handschrift.
 * "ASJ" vormt één geheel (letters schuiven in elkaar), "blieft" staat
 * er direct tegenaan maar is niet gekoppeld.
 */
export default function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`}>
      <span className="logo-asj">ASJ</span>
      <span className="logo-blieft">blieft</span>
    </span>
  )
}
