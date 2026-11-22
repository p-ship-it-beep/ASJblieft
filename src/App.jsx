import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import EcolineBackground from './components/EcolineBackground'
import Home from './pages/Home'
import Begeleiding from './pages/Begeleiding'
import Postpartum from './pages/Postpartum'
import OverMij from './pages/OverMij'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

const variants = {
  '/': 'home',
  '/begeleiding': 'begeleiding',
  '/postpartum-groepen': 'postpartum',
  '/over-mij': 'over',
  '/contact': 'contact',
}

/** Bij paginawissel naar boven scrollen; bij #anker naar dat anker. */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  const variant = variants[pathname] || 'contact'

  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#inhoud">Ga naar inhoud</a>
      <EcolineBackground variant={variant} />
      <Header />
      <main id="inhoud" className="site-main" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/begeleiding" element={<Begeleiding />} />
          <Route path="/postpartum-groepen" element={<Postpartum />} />
          <Route path="/over-mij" element={<OverMij />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
