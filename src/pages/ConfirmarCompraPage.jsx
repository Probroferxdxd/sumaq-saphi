import { useEffect, useState } from 'react'
import { getHashParams } from '../hooks/usePage'
import { getProductById } from '../data/products'
import './ConfirmarCompra.scss'

export default function ConfirmarCompraPage() {
  const [confirmed, setConfirmed] = useState(false)
  const params = getHashParams()
  const productId = params.get('product')
  const region = params.get('region')
  const product = getProductById(productId)

  useEffect(() => {
    document.title = confirmed
      ? 'Compra confirmada — Sumaq Saphi'
      : 'Confirmar compra — Sumaq Saphi'
  }, [confirmed])

  if (!product) {
    return (
      <div className="confirm">
        <div className="confirm__card">
          <h1>Producto no encontrado</h1>
          <p>No pudimos encontrar el producto seleccionado.</p>
          <button type="button" className="btn btn--burgundy" onClick={() => window.close()}>
            Cerrar ventana
          </button>
        </div>
      </div>
    )
  }

  if (confirmed) {
    return (
      <div className="confirm">
        <div className="confirm__card confirm__card--success">
          <span className="confirm__badge">✓</span>
          <h1>¡Compra confirmada!</h1>
          <p>
            Tu pedido de <strong>{product.name}</strong> ({region}) ha sido registrado.
            Recibirás un correo con los detalles de envío.
          </p>
          <p className="confirm__note">
            Total: {product.currency} {product.price.toFixed(2)}
          </p>
          <button type="button" className="btn btn--burgundy" onClick={() => window.close()}>
            Cerrar ventana
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="confirm">
      <div className="confirm__card">
        <span className="confirm__brand">Sumaq Saphi</span>
        <h1>Confirmar compra</h1>
        <p className="confirm__intro">Revisa los detalles de tu pedido antes de continuar.</p>

        <div className="confirm__product">
          <img src={product.image} alt={product.name} />
          <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <dl className="confirm__details">
              <div>
                <dt>Región</dt>
                <dd>{region}</dd>
              </div>
              <div>
                <dt>Precio</dt>
                <dd>{product.currency} {product.price.toFixed(2)}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="confirm__actions">
          <button
            type="button"
            className="btn btn--burgundy confirm__submit"
            onClick={() => setConfirmed(true)}
          >
            Confirmar compra
          </button>
          <button type="button" className="confirm__cancel" onClick={() => window.close()}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}
