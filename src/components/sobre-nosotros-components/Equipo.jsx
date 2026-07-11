import './Equipo.scss'

const members = [
  {
    image: '/images/colaboradora.jpg',
    name: 'Camila Rojas',
    role: 'Fundadora & CEO',
    bio: 'Emprendedora limeña apasionada por conectar la cosmética de lujo con la riqueza botánica del Perú.',
  },
  {
    image: '/images/productores.jpg',
    name: 'Andrés Quispe',
    role: 'Director de Operaciones',
    bio: 'Especialista en cadenas de suministro éticas con más de 10 años trabajando con comunidades rurales.',
  },
  {
    image: '/images/peru-piel.jpg',
    name: 'Valentina Mendoza',
    role: 'Jefa de Formulación',
    bio: 'Química cosmética dedicada a crear fórmulas limpias con ingredientes nativos de máxima calidad.',
  },
  {
    image: '/images/piloto.jpg',
    name: 'Lucía Fernández',
    role: 'Líder de Comunidad',
    bio: 'Gestiona las alianzas con artesanos y productores, garantizando comercio justo en cada etapa.',
  },
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
              <div className="equipo__photo-wrap">
                <img src={image} alt={name} className="equipo__photo" />
              </div>
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
