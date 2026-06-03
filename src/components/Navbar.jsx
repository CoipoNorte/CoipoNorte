import { useState, useEffect } from 'react'
import { navLinks, info }      from '../data/portfolio'
import { smoothScroll }        from '../utils/smoothScroll'
import './Navbar.css'

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [active,    setActive]    = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map(l => l.id)
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-60px 0px -60% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o && o.disconnect())
  }, [])

  const handleNav = (id) => {
    smoothScroll(id)
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">

          <button className="navbar__brand" onClick={() => smoothScroll('hero')}>
            <img src="/CoipoNorte/assets/coiponorteSinFondo.ico" alt="logo" className="navbar__logo" />
            <span className="navbar__name">
              Christian <span className="navbar__name-accent">Cáceres</span>
            </span>
          </button>

          <ul className="navbar__links">
            {navLinks.map(link => (
              <li key={link.id}>
                <button
                  className={`navbar__link ${active === link.id ? 'active' : ''}`}
                  onClick={() => handleNav(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <a
              href={info.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary navbar__cta"
            >
              Contrátame
            </a>
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
            >
              <span /><span /><span />
            </button>
          </div>

        </div>
      </nav>

      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav__links">
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                className={`mobile-nav__link ${active === link.id ? 'active' : ''}`}
                onClick={() => handleNav(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <a
          href={info.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={() => setMenuOpen(false)}
        >
          💬 Contrátame
        </a>
      </div>

      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  )
}
