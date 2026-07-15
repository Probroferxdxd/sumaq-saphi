import { MapPin } from 'lucide-react'
import './HistoriaStories.scss'
import rosa from '../../assets/imagenes/campesino-achote.jpeg'
import donJulian from '../../assets/imagenes/campesino-cacao.jpeg'
import elena from '../../assets/imagenes/campesino-maiz.jpeg'
import miguel from '../../assets/imagenes/campesino-quinua.jpeg'

const stories = [
  {
    image: rosa,
    label: 'Achiote',
    name: 'Rosa',
    location: 'San Martín',
    quote: 'Nuestras colores son vida, pero en el mercado los tratan como mercancía barata.',
    description:
      'Rosa lucha contra la infravaloración de su trabajo por parte de intermediarios que ignoran el inmenso potencial del achiote en la alta cosmética global.',
  },
  {
    image: donJulian,
    label: 'Maíz Morado',
    name: 'Don Julián',
    location: 'Ayacucho',
    quote: 'Mis hijos ya no quieren sembrar. Dicen que el sudor no paga el pan.',
    description:
      'A pesar de ser un superalimento rico en antioxidantes, el maíz de Don Julián es visto solo como comida básica, limitando su sustento económico.',
  },
  {
    image: elena,
    label: 'Cacao Nativo',
    name: 'Elena',
    location: 'Cusco',
    quote: 'Ellos venden lujo afuera, pero aquí el precio se queda en el suelo.',
    description:
      'Elena se enfrenta a grandes corporaciones que compran su cacao nativo a precios ínfimos para luego revenderlo con un valor añadido inalcanzable para ella.',
  },
  {
    image: miguel,
    label: 'Quinua',
    name: 'Miguel',
    location: 'Puno',
    quote: 'La quinua es el orgullo de Puno, pero el orgullo no paga las herramientas.',
    description:
      'A Miguel le frustra que, pese al éxito mundial de la quinua, los costos de producción suben mientras el retorno directo al campesino sigue estancado.',
  },
]

export default function HistoriaStories() {
  return (
    <section className="historia-stories">
      <div className="container historia-stories__container">
        <div className="historia-stories__grid">
          {stories.map((story) => (
            <article key={story.name} className="historia-story">
              <div
                className="historia-story__image"
                style={{ backgroundImage: `url(${story.image})` }}
              />
              <div className="historia-story__body">
                <span className="historia-story__label">{story.label}</span>
                <div className="historia-story__header">
                  <h3 className="historia-story__name">{story.name}</h3>
                  <div className="historia-story__location">
                    <MapPin size={14} strokeWidth={2} />
                    <span>{story.location}</span>
                  </div>
                </div>
                <blockquote className="historia-story__quote">{story.quote}</blockquote>
                <p className="historia-story__description">{story.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
