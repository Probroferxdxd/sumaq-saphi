import { useEffect } from 'react'
import AboutIntro from '../components/sobre-nosotros-components/AboutIntro'
import AboutNav from '../components/sobre-nosotros-components/AboutNav'
import Mission from '../components/sobre-nosotros-components/Mission'
import Vision from '../components/sobre-nosotros-components/Vision'
import Colaboradores from '../components/sobre-nosotros-components/Colaboradores'
import PorQueNosotros from '../components/sobre-nosotros-components/PorQueNosotros'
import Equipo from '../components/sobre-nosotros-components/Equipo'
import { scrollToHashSection } from '../hooks/usePage'

export default function SobreNosotrosPage() {
  useEffect(() => {
    scrollToHashSection()
    window.addEventListener('hashchange', scrollToHashSection)
    return () => window.removeEventListener('hashchange', scrollToHashSection)
  }, [])

  return (
    <>
      <AboutIntro />
      <Mission />
      <Vision />
      <Colaboradores />
      <PorQueNosotros />
      <Equipo />
    </>
  )
}
