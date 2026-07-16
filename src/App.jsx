import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/general-components/Header'
import Footer from './components/general-components/Footer'
import InicioPage from './pages/InicioPage'
import SobreNosotrosPage from './pages/SobreNosotrosPage'
import TiendaPage from './pages/TiendaPage'
import ConfirmarCompraPage from './pages/ConfirmarCompraPage'
import HistoriaPage from './pages/HistoriaPage'
import { usePage } from './hooks/usePage'

export default function App() {
  const { page } = usePage()

  if (page === 'confirmar-compra') {
    return <ConfirmarCompraPage />
  }

  return (
    <>
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {page === 'sobre-nosotros' && <SobreNosotrosPage />}
            {page === 'tienda' && <TiendaPage />}
            {page === 'inicio' && <InicioPage />}
            {page === 'historia' && <HistoriaPage />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
