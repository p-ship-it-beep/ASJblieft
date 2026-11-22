import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Begeleiding from './pages/Begeleiding'
import Postpartum from './pages/Postpartum'
import OverMij from './pages/OverMij'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

/** Scrollt naar boven bij een nieuwe pagina, of naar #anker als dat in de link staat. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <a className="skip-link" href="#inhoud">Direct naar de inhoud</a>
      <Header />
      <main id="inhoud">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/begeleiding" element={<Begeleiding />} />
          <Route path="/postpartum-groepen" element={<Postpartum />} />
          <Route path="/over-mij" element={<OverMij />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
