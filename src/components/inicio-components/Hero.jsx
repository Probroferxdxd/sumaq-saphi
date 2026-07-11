import { ChevronDown } from 'lucide-react'
import './Hero.scss'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__overlay" />
      <div className="hero__content container">
        <h1 className="hero__title">
          Belleza que nace de nuestras raíces
        </h1>
        <div className="hero__actions">
          <a href="#sobre-nosotros" className="btn btn--white">
            Conoce nuestra historia
          </a>
          <a href="#tienda" className="btn btn--outline">
            Descubre nuestros productos
          </a>
        </div>
      </div>
      <a href="#peru-piel" className="hero__scroll" aria-label="Desplazarse hacia abajo">
        <ChevronDown size={28} strokeWidth={1.5} />
      </a>
    </section>
  )
}
