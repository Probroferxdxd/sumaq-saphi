import './AboutNav.scss'

const links = [
  { label: 'Misión', section: 'mision' },
  { label: 'Visión', section: 'vision' },
  { label: 'Colaboradores', section: 'colaboradores' },
  { label: '¿Por qué nosotros?', section: 'por-que-nosotros' },
  { label: 'Equipo', section: 'equipo' },
]

export default function AboutNav() {
  return (
    <nav className="about-nav" aria-label="Secciones de Sobre Nosotros">
      <div className="container about-nav__inner">
        {links.map(({ label, section }) => (
          <a
            key={section}
            href={`#sobre-nosotros/${section}`}
            className="about-nav__link"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
