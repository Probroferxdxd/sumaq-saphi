import { BadgeCheck, Sparkles, Leaf, CircleDot } from 'lucide-react'
import './Mission.scss'

const values = [
  {
    icon: BadgeCheck,
    title: 'Calidad',
    description: 'Excelencia artesanal en cada formulación botánica.',
  },
  {
    icon: Sparkles,
    title: 'Innovación',
    description: 'Ciencia moderna aplicada a la sabiduría ancestral.',
  },
  {
    icon: Leaf,
    title: 'Ingredientes',
    description: 'Tesoros nativos extraídos con respeto y gratitud.',
  },
  {
    icon: CircleDot,
    title: 'Identidad',
    description: 'El orgullo de nuestra herencia cultural peruana.',
  },
]

export default function Mission() {
  return (
    <section id="mision" className="mission">
      <div className="container">
        <h2 className="section-title">Nuestra Misión</h2>
        <div className="mission__grid">
          {values.map(({ icon: Icon, title, description }) => (
            <article key={title} className="mission__item">
              <Icon className="mission__icon" size={36} strokeWidth={1.25} />
              <h3 className="mission__item-title">{title}</h3>
              <p className="mission__item-desc">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
