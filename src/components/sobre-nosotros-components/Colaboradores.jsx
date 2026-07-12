import './Colaboradores.scss'
import divinaOlivia from '../../assets/imagenes/divina-olivia.jpg'
import productorOriginario from '../../assets/imagenes/productor-originario.jpg'

const collaborators = [
  {
    image: divinaOlivia,
    name: 'Divina Olivia',
    role: 'Directora Creativa',
    description:
      'Visionaria del maquillaje contemporáneo que fusiona las paletas de color de la sierra peruana con las tendencias más vanguardistas de París y Milán.',
  },
  {
    image: productorOriginario,
    name: 'Productores Regionales',
    role: 'Guardianes de la Tierra',
    description:
      'Más de 50 familias de Cusco, Ayacucho y San Martín que proveen los insumos orgánicos más puros mediante técnicas ancestrales de cultivo.',
  },
]

export default function Colaboradores() {
  return (
    <section id="colaboradores" className="colaboradores">
      <div className="container">
        <header className="colaboradores__header">
          <h2 className="section-title">Nuestros Colaboradores</h2>
          <p className="colaboradores__subtitle">
            La sinergia entre el talento regional y la visión global.
          </p>
        </header>
        <div className="colaboradores__grid">
          {collaborators.map(({ image, name, role, description }) => (
            <article key={name} className="colaboradores__card">
              <div style={{ backgroundImage: `url(${image})` }} className="colaboradores__image" />
              <div className="colaboradores__body">
                <h3 className="colaboradores__name">{name}</h3>
                <span className="colaboradores__role">{role}</span>
                <p className="colaboradores__desc">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
