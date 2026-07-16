import { ChevronDown } from 'lucide-react'
import './HistoriaHero.scss'

export default function Hero() {
  return (
    <section id="historia" className="historia-hero">
      <div className="historia-hero__overlay" />
      <div className="historia-hero__content container">
        <h1 className="historia-hero__title">
          Belleza que nace de nuestras raíces
        </h1>
        <div className="historia-hero__actions">
          <a href="#historias" className="btn btn--white">
            Conoce nuestra historia
          </a>
          <a href="#tienda" className="btn btn--outline">
            Descubre nuestros productos
          </a>
        </div>
      </div>
      <a href="#historias" className="historia-hero__scroll" aria-label="Desplazarse hacia abajo">
        <ChevronDown size={28} strokeWidth={1.5} />
      </a>
    </section>
  )
}
