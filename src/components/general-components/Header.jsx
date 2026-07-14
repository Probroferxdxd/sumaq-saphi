import { usePage, pageHref } from '../../hooks/usePage'
import './Header.scss'

const navLinks = [
  { label: 'Inicio', page: 'inicio' },
  { label: 'Sobre Nosotros', page: 'sobre-nosotros' },
  { label: 'Historia', page: 'historia' },
  { label: 'Tienda', page: 'tienda' },
]

export default function Header() {
  const { page } = usePage()

  const handleNavClick = (event, linkPage) => {
    event.preventDefault()
    const targetHash = pageHref(linkPage)

    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash
    }
  }

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
                onClick={(event) => handleNavClick(event, linkPage)}
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
