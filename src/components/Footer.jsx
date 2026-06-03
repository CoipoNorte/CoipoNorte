import { info } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">

        <div className="footer__brand">
          <img src="/CoipoNorte/assets/coiponorteSinFondo.ico" alt="logo" className="footer__logo" />
          <div>
            <p className="footer__name">Christian Cáceres Marín</p>
            <p className="footer__role">Full Stack Developer · {info.location}</p>
          </div>
        </div>

        <p className="footer__copy">
          © {year} — Construido con React + Vite 🇨🇱
        </p>

      </div>
    </footer>
  )
}
