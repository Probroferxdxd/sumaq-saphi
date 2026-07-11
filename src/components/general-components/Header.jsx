import { usePage, pageHref } from '../../hooks/usePage'
import './Header.scss'

const navLinks = [
  { label: 'Inicio', page: 'inicio' },
  { label: 'Sobre Nosotros', page: 'sobre-nosotros' },
  { label: 'Tienda', page: 'tienda' },
]

export default function Header() {
  const { page } = usePage()

  return (
    <header className="header">
      <div className="header__inner container">
        <a href={pageHref('inicio')} className="header__logo">
          Sumaq Saphi
        </a>
        <nav className="header__nav" aria-label="Navegación principal">
          {navLinks.map(({ label, page: linkPage }) => {
            const href = pageHref(linkPage)
            const isActive = page === linkPage

            return (
              <a
                key={label}
                href={href}
                className={`header__link${isActive ? ' header__link--active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {label}
              </a>
            )
          })}
          <a href="#apoyanos" className="btn btn--burgundy header__cta">
            Apoyanos
          </a>
        </nav>
      </div>
    </header>
  )
}
