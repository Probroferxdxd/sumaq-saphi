import { useEffect, useState } from 'react'
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
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      if (!mobile) {
        setIsScrolled(false)
      }
    }

    const handleScroll = () => {
      if (window.innerWidth > 768) return
      setIsScrolled(window.scrollY > 20)
    }

    handleResize()
    handleScroll()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const headerClassName = [
    'header',
    isMobile && isScrolled && page !== 'historia' ? 'header--mobile-transparent' : '',
    isMobile && isScrolled && page !== 'historia' ? 'header--mobile-faded' : '',
    page === 'historia' ? 'header--history' : ''
  ].filter(Boolean).join(' ')

  const handleNavClick = (event, linkPage) => {
    event.preventDefault()
    const targetHash = pageHref(linkPage)

    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash
    }
  }

  return (
    <header className={headerClassName}>
      <div className="header__inner container">
        <a href={pageHref('inicio')} className="header__logo">
          <div className="logo-element"></div>
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
