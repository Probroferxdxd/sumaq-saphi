import { useEffect } from 'react'
import HistoriaHero from '../components/historia-components/HistoriaHero'
import HistoriaIntro from '../components/historia-components/HistoriaIntro'
import HistoriaStories from '../components/historia-components/HistoriaStories'
import HistoriaQuote from '../components/historia-components/HistoriaQuote'
import { scrollToHashSection } from '../hooks/usePage'

export default function HistoriaPage() {
  useEffect(() => {
    scrollToHashSection()
    window.addEventListener('hashchange', scrollToHashSection)
    return () => window.removeEventListener('hashchange', scrollToHashSection)
  }, [])

  return (
    <>
      <HistoriaIntro />
      <HistoriaStories />
      <HistoriaQuote />
    </>
  )
}
