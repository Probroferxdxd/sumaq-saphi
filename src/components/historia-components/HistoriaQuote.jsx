import { Leaf } from 'lucide-react'
import './HistoriaQuote.scss'

export default function HistoriaQuote() {
  return (
    <section className="historia-quote">
      <div className="container historia-quote__container">
        <Leaf className="historia-quote__icon" size={28} strokeWidth={1.5} />
        <blockquote className="historia-quote__text">
          "No buscamos solo ingredientes, buscamos alianzas de vida."
        </blockquote>
      </div>
    </section>
  )
}
