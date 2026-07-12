import { useState } from 'react'
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
  const [donationAmount, setDonationAmount] = useState('')

  const handleDonate = (event) => {
    event.preventDefault()

    const amount = donationAmount.trim()
    if (!amount) return

    const message = encodeURIComponent(`Hola Sumaq Saphi, quiero apoyar el proyecto con S/${amount}.`)
    window.location.href = `mailto:contacto@sumaqsaphi.com?subject=Apoyo%20al%20proyecto%20Sumaq%20Saphi&body=${message}`
  }

  return (
    <footer id="apoyanos" className="footer">
      <div className="container footer__support">
        <div className="footer__support-copy">
          <p className="footer__support-eyebrow">Apóyanos</p>
          <h3>Tu apoyo ayuda a que la belleza peruana siga floreciendo con propósito.</h3>
          <p>Ingresa un monto y envíanos tu aporte para impulsar este proyecto.</p>
        </div>

        <form className="footer__donation" onSubmit={handleDonate}>
          <label className="footer__donation-label" htmlFor="donation-amount">
            Monto en soles
          </label>
          <div className="footer__donation-row">
            <span className="footer__currency">S/</span>
            <input
              id="donation-amount"
              type="number"
              min="1"
              step="0.01"
              placeholder="100"
              value={donationAmount}
              onChange={(event) => setDonationAmount(event.target.value)}
            />
            <button type="submit" className="btn footer__support-btn">
              Donar ahora
            </button>
          </div>
        </form>
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
