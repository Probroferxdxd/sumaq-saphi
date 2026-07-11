import { useEffect } from 'react'
import Hero from '../components/inicio-components/Hero'
import PeruEnLaPiel from '../components/inicio-components/PeruEnLaPiel'
import Piloto from '../components/inicio-components/Piloto'
import Ecos from '../components/inicio-components/Ecos'
import { scrollToHashSection } from '../hooks/usePage'

export default function InicioPage() {
  useEffect(() => {
    scrollToHashSection()
    window.addEventListener('hashchange', scrollToHashSection)
    return () => window.removeEventListener('hashchange', scrollToHashSection)
  }, [])

  return (
    <>
      <Hero />
      <PeruEnLaPiel />
      <Piloto />
      <Ecos />
    </>
  )
}
