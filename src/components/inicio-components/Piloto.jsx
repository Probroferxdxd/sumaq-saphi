import './Piloto.scss'

const bullets = [
  'Sostenibilidad radical desde la semilla al frasco.',
  'Comercio justo con comunidades altoandinas y amazónicas.',
  'Fórmulas libres de crueldad y ricas en antioxidantes naturales.',
]

export default function Piloto() {
  return (
    <section id="piloto" className="piloto">
      <div className="container piloto__grid">
        <div className="piloto__image-wrap">
          <img
            src="/images/piloto.jpg"
            alt="Ingredientes nativos peruanos: maíz morado, cacao y semillas"
            className="piloto__image"
          />
        </div>
        <div className="piloto__text">
          <h2 className="piloto__title">Nuestro Piloto</h2>
          <p className="piloto__intro">
            Nuestro piloto nace del respeto por la naturaleza, nuestros cosméticos utilizan
            ingredientes nativos del Perú, honrando los ciclos de la tierra y las manos que
            la trabajan.
          </p>
          <ul className="piloto__list">
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
