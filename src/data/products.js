import labialRojo from '../assets/imagenes/labial-rojo.png'
import labialMorado from '../assets/imagenes/labial-morado.png'
import delineadorMorado from '../assets/imagenes/delineador-morado.png'
import delineadorVerde from '../assets/imagenes/delineador-verde.png'
import blushNaranja from '../assets/imagenes/blush-naranja.png'
import glossRojo from '../assets/imagenes/gloss-rojo.png'
import blushMorado from '../assets/imagenes/blush-morado.png'
import lienzoCarnaval from '../assets/imagenes/lienzo-carnaval.png'

export const REGIONS = ['Todas', 'Andes', 'Amazonía', 'Costa']

export const products = [
  {
    id: 'petalo-rojo',
    name: 'Petalo Rojo',
    subtitle: 'Labial de Achote',
    description:
      'Color intenso con pigmentos naturales de achiote. Hidratación prolongada sin parabenos ni crueldad animal.',
    details: 'Textura cremosa y de larga duración. Ideal para pieles secas que buscan un acabado natural y definido.',
    ingredients: 'Achiote, cera de abejas, manteca de karité, aceite de jojoba.',
    price: 45,
    currency: 'S/',
    region: 'Amazonía',
    image: labialRojo,
  },
  {
    id: 'petalo-violeta',
    name: 'Petalo Violeta',
    subtitle: 'Labial de Maíz Morado',
    description:
      'Color profundo con pigmentos de maíz morado. Hidrata y protege los labios con antioxidantes naturales.',
    details: 'Acabado satinado, con un toque suave que no reseca. Perfecto para un look elegante de día o noche.',
    ingredients: 'Maíz morado, aceite de ricino, manteca de cacao, vitamina E.',
    price: 45,
    currency: 'S/',
    region: 'Andes',
    image: labialMorado,
  },
  {
    id: 'trazo-violeta',
    name: 'Trazo Violeta',
    subtitle: 'Delineador de Maíz Morado',
    description:
      'Delineador rico en antioxidantes de maíz morado y vitamina E. Asegura un trazo preciso y definido.',
    details: 'Resistente al sudor y de fácil difuminado para looks intensos o suaves.',
    ingredients: 'Maíz morado, cera de carnauba, aceite de argán, vitamina E.',
    price: 40,
    currency: 'S/',
    region: 'Andes',
    image: delineadorMorado,
  },
  {
    id: 'trazo-verde',
    name: 'Trazo Verde',
    subtitle: 'Delineador de Hierbas Andinas',
    description:
      'Delineador herbal con extractos de hoja verde y antioxidantes. Define la mirada mientras protege la piel.',
    details: 'Textura suave que se desliza sin arrastrar y mantiene la intensidad durante horas.',
    ingredients: 'Extracto de hoja verde, cera de carnauba, aceite de girasol, manteca de karité.',
    price: 40,
    currency: 'S/',
    region: 'Costa',
    image: delineadorVerde,
  },
  {
    id: 'aura-naranja',
    name: 'Aura Naranja',
    subtitle: 'Blush Iluminador',
    description:
      'Rubor iluminador con polvo de cáscara de naranja y arcilla volcánica. Aporta un brillo saludable y natural.',
    details: 'Textura ligera y modulable, ideal para mejillas y pómulos con acabado radiante.',
    ingredients: 'Arcilla volcánica, polvo de cáscara de naranja, aceite de semilla de uva, mica natural.',
    price: 35,
    currency: 'S/',
    region: 'Amazonía',
    image: blushNaranja,
  },
  {
    id: 'aura-rosa',
    name: 'Aura Rosa',
    subtitle: 'Gloss Labial',
    description:
      'Gloss hidratante con pigmentos suaves y brillo duradero. Hidrata los labios sin sensación pegajosa.',
    details: 'Aporta un tono rosado natural con una sensación ligera y fresca.',
    ingredients: 'Aceite de jojoba, extracto de pétalo de rosa, manteca de cacao, vitamina E.',
    price: 35,
    currency: 'S/',
    region: 'Amazonía',
    image: blushMorado,
  },
  {
    id: 'nectar-coral',
    name: 'Nectar Coral',
    subtitle: 'Blush Coral',
    description:
      'Polvo compacto con notas corales inspiradas en la flora peruana. Aporta calidez y frescura al rostro.',
    details: 'Fácil de difuminar y perfecto para pieles claras o medias que buscan un tono natural.',
    ingredients: 'Mica, extracto de coral, óleo de rosa mosqueta, almidón de maíz.',
    price: 40,
    currency: 'S/',
    region: 'Amazonía',
    image: glossRojo,
  },
  {
    id: 'paleta-carnaval',
    name: 'Paleta Carnaval',
    subtitle: 'Paleta de Sombras',
    description:
      'Paleta con tonos vibrantes y versátiles inspirados en las celebraciones andinas. Mezcla mates y destellos.',
    details: 'Incluye colores cálidos y fríos para crear looks de día y de noche con textura cremosa.',
    ingredients: 'Mica, óxidos minerales, aceite de semilla de albaricoque, extracto de quinoa.',
    price: 55,
    currency: 'S/',
    region: 'Amazonía',
    image: lienzoCarnaval,
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}
