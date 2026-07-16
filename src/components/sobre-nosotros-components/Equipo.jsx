import './Equipo.scss'
import Alonso from '../../assets/imagenes/alonso.jpg'
import Santiago from '../../assets/imagenes/santiango.jpg'
import Fernando from '../../assets/imagenes/fernando.jpg'
import Alessandra from '../../assets/imagenes/alessandra.jpg'
import Eduardo from '../../assets/imagenes/eduardo.jpg'


const members = [
  {
    image: Alonso,
    name: 'Alonso Castro',
    role: 'Lider',
    bio: 'Futuro ingeniero con capacidad de liderazgo y oratoria, preparado para todo',
  },
  {
    image: Santiago,
    name: 'Santiago Quispe',
    role: 'Evaluador',
    bio: 'Futuro economísta y habil en voley',
  },
  {
    image: Fernando,
    name: 'Fernando Bullon',
    role: 'Especialista en sostenibilidad',
    bio: 'Futuro Ingeniero de Software listo para la hackaton',
  },
  {
    image: Alessandra,
    name: 'Alessandra Bustamante',
    role: 'Temporizador',
    bio: 'Armadora de rompecabezas y futura ingeniera de software con gran capacidad de liderazgo',
  },
  {
    image: Eduardo,
    name: 'Eduardo Igarza',
    role: 'Secretario',
    bio: 'Futuro cocinero con iniciativa y resiliencia ante la adversidad',
  }
]

export default function Equipo() {
  return (
    <section id="equipo" className="equipo">
      <div className="container">
        <header className="equipo__header">
          <h2 className="section-title">Los miembros del equipo</h2>
          <p className="equipo__subtitle">
            Las personas que dan vida a nuestra visión de belleza consciente.
          </p>
        </header>
        <div className="equipo__grid">
          {members.map(({ image, name, role, bio }) => (
            <article key={name} className="equipo__card">
              <div className="equipo__body">
                <h3 className="equipo__name">{name}</h3>
                <span className="equipo__role">{role}</span>
                <p className="equipo__bio">{bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
