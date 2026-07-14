import { useEffect } from 'react'
import HistoriaHero from '../components/historia-components/HistoriaHero'
import { scrollToHashSection } from '../hooks/usePage'

export default function HistoriaPage() {
  useEffect(() => {
    scrollToHashSection()
    window.addEventListener('hashchange', scrollToHashSection)
    return () => window.removeEventListener('hashchange', scrollToHashSection)
  }, [])

  return (
    <>
      <HistoriaHero />
    </>
  )
}
