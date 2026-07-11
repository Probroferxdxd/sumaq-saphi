import { CheckCircle2 } from 'lucide-react'
import './Vision.scss'

const commitments = [
  '100% Empaques biodegradables',
  'Expansión a 15 mercados globales',
  'Fundación Sumaq Saphi para artesanos',
]

export default function Vision() {
  return (
    <section id="vision" className="vision">
      <div className="container vision__grid">
        <div className="vision__main">
          <h2 className="vision__title">Nuestra Visión</h2>
          <p className="vision__statement">
            Aspiramos a ser el puente global entre la sabiduría botánica de los Andes y la
            cosmética de lujo contemporánea, elevando el estándar de belleza consciente hacia
            una experiencia de conexión cultural profunda.
          </p>
          <div className="vision__year-block">
            <span className="vision__year">2030</span>
            <span className="vision__year-label">Visión de impacto global</span>
          </div>
        </div>
        <div className="vision__box">
          <h3 className="vision__box-title">Compromiso Futuro</h3>
          <ul className="vision__list">
            {commitments.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} strokeWidth={1.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
