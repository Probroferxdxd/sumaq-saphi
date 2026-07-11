import { useEffect } from 'react'
import TiendaHero from '../components/tienda-components/TiendaHero'
import ProductCatalog from '../components/tienda-components/ProductCatalog'
import { scrollToHashSection } from '../hooks/usePage'

export default function TiendaPage() {
  useEffect(() => {
    scrollToHashSection()
    window.addEventListener('hashchange', scrollToHashSection)
    return () => window.removeEventListener('hashchange', scrollToHashSection)
  }, [])

  return (
    <>
      <TiendaHero />
      <ProductCatalog />
    </>
  )
}
