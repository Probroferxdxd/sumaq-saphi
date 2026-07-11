import './Ecos.scss'

const quotes = [
  {
    text: 'Una belleza con raíces',
    author: 'Elena Vargas',
    role: 'Artista',
  },
  {
    text: 'Innovación con propósito',
    author: 'Mateo Ruiz',
    role: 'Curador',
  },
  {
    text: 'Orgullo peruano',
    author: 'Sofía Castro',
    role: 'Diseñadora',
  },
  {
    text: 'Ayuda a las comunidades',
    author: 'Impacto Social Perú',
    role: '',
  },
]

export default function Ecos() {
  return (
    <section className="ecos">
      <div className="container">
        <h2 className="section-title">Ecos de Nuestra Esencia</h2>
        <div className="ecos__grid">
          {quotes.map(({ text, author, role }) => (
            <blockquote key={author} className="ecos__quote">
              <span className="ecos__mark" aria-hidden="true">&ldquo;</span>
              <p className="ecos__text">{text}</p>
              <footer className="ecos__author">
                {author}{role && `, ${role}`}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
