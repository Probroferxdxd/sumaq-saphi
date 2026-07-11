import Header from './components/general-components/Header'
import Footer from './components/general-components/Footer'
import InicioPage from './pages/InicioPage'
import SobreNosotrosPage from './pages/SobreNosotrosPage'
import TiendaPage from './pages/TiendaPage'
import ConfirmarCompraPage from './pages/ConfirmarCompraPage'
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
        {page === 'sobre-nosotros' && <SobreNosotrosPage />}
        {page === 'tienda' && <TiendaPage />}
        {page === 'inicio' && <InicioPage />}
      </main>
      <Footer />
    </>
  )
}
