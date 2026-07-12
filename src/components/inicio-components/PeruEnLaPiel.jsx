import './PeruEnLaPiel.scss'

export default function PeruEnLaPiel() {
  return (
    <section id="peru-piel" className="peru-piel">
      <div className="container peru-piel__grid">
        <div className="peru-piel__text">
          <span className="peru-piel__label">Perú en la Piel</span>
          <h2 className="peru-piel__title">Una forma de llevar nuestra historia</h2>
          <p>
            No solo presentamos maquillaje, lo que ofrecemos es una forma de llevar el Perú
            en la piel. Cada tono, ingrediente y diseño está inspirado en la riqueza cultural
            y natural de nuestro país.
          </p>
          <p>
            Desde las tierras altas hasta la profundidad del Amazonas, capturamos la esencia
            vibrante de una nación que celebra su belleza ancestral en el mundo moderno.
          </p>
        </div>
        <div className="peru-piel__image-wrap">
          <div className="image-element"></div>
        </div>
      </div>
    </section>
  )
}
