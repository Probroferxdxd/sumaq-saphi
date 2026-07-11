import './AboutIntro.scss'

export default function AboutIntro() {
  return (
    <section className="about-intro">
      <div className="about-intro__overlay" />
      <div className="container about-intro__content">
        <span className="about-intro__label">Conoce quiénes somos</span>
        <h1 className="about-intro__title">Sobre Nosotros</h1>
        <p className="about-intro__text">
          Sumaq Saphi nace del encuentro entre la sabiduría botánica andina y el diseño
          contemporáneo. Somos una marca peruana de cosmética consciente que honra nuestras
          raíces mientras construye un futuro más justo y sostenible.
        </p>
      </div>
    </section>
  )
}
