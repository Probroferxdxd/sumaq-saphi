import { ShoppingBag } from 'lucide-react'
import './TiendaHero.scss'

export default function TiendaHero() {
  return (
    <section className="tienda-hero">
      <div className="tienda-hero__overlay" />
      <div className="container tienda-hero__grid">
        <div className="tienda-hero__content">
          <span className="tienda-hero__eyebrow">Alta cosmética ancestral</span>
          <h1 className="tienda-hero__title">Elixir de los Andes</h1>
          <div className="tienda-hero__actions">
            <a
              href="#"
              className="btn btn--burgundy"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('catalogo')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }}
            >
              Explorar colección
            </a>
            <a href="#sobre-nosotros" className="btn btn--outline">
              Nuestra historia
            </a>
          </div>
          <div className="tienda-hero__label">
            <span className="tienda-hero__line" />
            Nuestra tienda
          </div>
        </div>
      </div>
      <div className="tienda-hero__bag">
        <ShoppingBag size={22} strokeWidth={1.5} />
      </div>
    </section>
  )
}
