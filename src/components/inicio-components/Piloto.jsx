import "./Piloto.scss";

const bullets = [
  "Sostenibilidad radical desde la semilla al frasco: Las exportaciones peruanas de parte de la escencia de maíz morado superan las 588 toneladas, generando más de US$ 1.18 millones (Unah, 2023)",
  "Comercio justo con comunidades altoandinas y amazónicas: . Miles de agricultores y artesanos de comunidades originarias integran estas redes, lo que les permite preservar sus técnicas ancestrales y recibir beneficios adicionales para el desarrollo de sus localidades.(Coordinadora Estatal de Comercio Justo, 2022)",
  "Fórmulas libres de crueldad y ricas en antioxidantes naturales: La industria cosmética peruana ha experimentado un crecimiento significativo, con exportaciones que alcanzaron los US$ 1.5 millones en 2022, destacando la demanda de productos naturales y sostenibles en mercados internacionales. (Ministerio de Economía y Finanzas, 2022)",
];

export default function Piloto() {
  return (
    <section id="piloto" className="piloto">
      <div className="container piloto__grid">
        <div className="piloto__image-wrap">
          <div className="image-element"></div>
        </div>
        <div className="piloto__text">
          <h2 className="piloto__title">Nuestro Piloto</h2>
          <p className="piloto__intro">
            Nuestro piloto nace del respeto por la naturaleza, nuestros
            cosméticos utilizan ingredientes nativos del Perú, honrando los
            ciclos de la tierra y las manos que la trabajan.
          </p>
          <ul className="piloto__list">
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
