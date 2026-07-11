import { Heart, Recycle, Handshake, Globe } from 'lucide-react'
import './PorQueNosotros.scss'

const reasons = [
  {
    icon: Heart,
    title: 'Belleza con propósito',
    description:
      'Cada producto cuenta una historia de origen, comunidad y respeto por la naturaleza peruana.',
  },
  {
    icon: Recycle,
    title: 'Compromiso ecoamigable',
    description:
      'Formulaciones limpias, empaques responsables y procesos que minimizan nuestro impacto ambiental.',
  },
  {
    icon: Handshake,
    title: 'Comercio justo',
    description:
      'Trabajamos directamente con productores altoandinos y amazónicos, asegurando condiciones dignas.',
  },
  {
    icon: Globe,
    title: 'Identidad peruana',
    description:
      'Ingredientes nativos como maíz morado, cacao y quinoa en cosmética de lujo con alma local.',
  },
]

export default function PorQueNosotros() {
  return (
    <section id="por-que-nosotros" className="por-que">
      <div className="container">
        <header className="por-que__header">
          <h2 className="section-title por-que__title">¿Por qué nosotros?</h2>
          <p className="por-que__subtitle">
            Elegir Sumaq Saphi es elegir belleza consciente, trazabilidad y orgullo de origen.
          </p>
        </header>
        <div className="por-que__grid">
          {reasons.map(({ icon: Icon, title, description }) => (
            <article key={title} className="por-que__card">
              <Icon className="por-que__icon" size={32} strokeWidth={1.25} />
              <h3 className="por-que__card-title">{title}</h3>
              <p className="por-que__card-desc">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
