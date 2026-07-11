import { ArrowRight } from 'lucide-react'
import './Footer.scss'

const navigation = [
  { label: 'Sustainability', href: '#' },
  { label: 'Ethical Sourcing', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact', href: '#' },
]

const discover = [
  { label: 'Maquillaje', href: '#tienda' },
  { label: 'Cuidado de Piel', href: '#tienda' },
  { label: 'Ingredientes', href: '#tienda' },
  { label: 'Nuestra Tienda', href: '#tienda' },
  { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
]

const social = [
  { label: 'Instagram', href: '#' },
  { label: 'Vogue Perú', href: '#' },
  { label: 'TikTok', href: '#' },
]

export default function Footer() {
  return (
    <footer id="apoyanos" className="footer">
      <div className="container footer__support">
        <div className="footer__support-copy">
          <p className="footer__support-eyebrow">Apóyanos</p>
          <h3>Tu apoyo ayuda a que la belleza peruana siga floreciendo con propósito.</h3>
          <p>Cada compra y cada gesto de confianza impulsa a Sumaq Saphi a cuidar nuestras raíces y compartirlas con el mundo.</p>
        </div>
        <a href="#tienda" className="btn btn--white footer__support-btn">
          Descubrir productos
        </a>
      </div>

      <div className="container footer__grid">
        <div className="footer__brand">
          <h2 className="footer__logo">Sumaq Saphi</h2>
          <p className="footer__tagline">Beautiful Roots, Modern Luxury.</p>
          <span className="footer__accent">Radiante Belleza Interior</span>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Navegación</h3>
          <ul>
            {navigation.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Descubre</h3>
          <ul>
            {discover.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__newsletter">
          <h3 className="footer__heading">Únete</h3>
          <p>Recibe novedades sobre nuestra herencia y lanzamientos.</p>
          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Tu email" aria-label="Correo electrónico" />
            <button type="submit" aria-label="Suscribirse">
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© 2024 Sumaq Saphi. All rights reserved. Hecho con orgullo en Perú.</p>
        <div className="footer__social">
          {social.map(({ label, href }) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
