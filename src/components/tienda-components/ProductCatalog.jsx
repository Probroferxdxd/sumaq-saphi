import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { products, REGIONS } from '../../data/products'
import { openConfirmWindow } from '../../utils/checkout'
import './ProductCatalog.scss'

export default function ProductCatalog() {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('Todas')

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    return products.filter((product) => {
      const matchesRegion = region === 'Todas' || product.region === region
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.region.toLowerCase().includes(query)
      return matchesRegion && matchesSearch
    })
  }, [search, region])

  return (
    <section id="catalogo" className="catalog">
      <div className="container">
        <header className="catalog__header">
          <h2 className="catalog__title">Colección Sumaq Saphi</h2>
          <p className="catalog__subtitle">
            Cosmética consciente elaborada con ingredientes nativos del Perú.
          </p>
        </header>

        <div className="catalog__toolbar">
          <div className="catalog__search">
            <Search size={18} strokeWidth={1.5} aria-hidden="true" />
            <input
              type="search"
              placeholder="Buscar productos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Buscar productos"
            />
          </div>
          <div className="catalog__filter">
            <label htmlFor="region-select">Región</label>
            <select
              id="region-select"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              {REGIONS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="catalog__empty">
            No encontramos productos con esos criterios. Prueba otra búsqueda o región.
          </p>
        ) : (
          <div className="catalog__grid">
            {filtered.map((product) => (
              <article key={product.id} className="catalog__card">
                <div className="catalog__image-wrap">
                  <img src={product.image} alt={product.name} className="catalog__image" />
                  <span className="catalog__region">{product.region}</span>
                </div>
                <div className="catalog__body">
                  {product.subtitle && (
                    <span className="catalog__subtitle-product">{product.subtitle}</span>
                  )}
                  <h3 className="catalog__name">{product.name}</h3>
                  <p className="catalog__desc">{product.description}</p>
                  <div className="catalog__footer">
                    <span className="catalog__price">
                      {product.currency} {product.price.toFixed(2)}
                    </span>
                    <button
                      type="button"
                      className="btn btn--burgundy catalog__buy"
                      onClick={() => openConfirmWindow(product)}
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
