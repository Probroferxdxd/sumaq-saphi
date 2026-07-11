export const REGIONS = ['Todas', 'Andes', 'Amazonía', 'Costa']

export const products = [
  {
    id: 'elixir-andes',
    name: 'Elixir de los Andes',
    subtitle: 'Quinta Andina',
    description:
      'Aceite facial restitutivo con extracto de maíz morado y rosa andina. Nutre profundamente y devuelve luminosidad natural.',
    price: 89,
    currency: 'S/',
    region: 'Andes',
    image: '/images/peru-piel.jpg',
  },
  {
    id: 'labial-maiz-morado',
    name: 'Labial Maíz Morado',
    description:
      'Color intenso con pigmentos naturales de maíz morado. Hidratación prolongada sin parabenos ni crueldad animal.',
    price: 45,
    currency: 'S/',
    region: 'Andes',
    image: '/images/piloto.jpg',
  },
  {
    id: 'crema-cacao',
    name: 'Crema de Cacao Amazónico',
    description:
      'Textura sedosa enriquecida con manteca de cacao silvestre y aceites de castaña. Ideal para pieles secas y sensibles.',
    price: 72,
    currency: 'S/',
    region: 'Amazonía',
    image: '/images/tienda-hero.png',
  },
  {
    id: 'serum-quinoa',
    name: 'Sérum de Quinoa',
    description:
      'Concentrado antioxidante con proteína de quinoa y vitamina E. Fortalece la barrera cutánea y unifica el tono.',
    price: 95,
    currency: 'S/',
    region: 'Andes',
    image: '/images/hero-bg.jpg',
  },
  {
    id: 'balsamo-lucuma',
    name: 'Bálsamo de Lúcuma',
    description:
      'Bálsamo multiuso para labios y mejillas con manteca de lúcuma. Aporta un tono cálido y natural.',
    price: 38,
    currency: 'S/',
    region: 'Costa',
    image: '/images/colaboradora.jpg',
  },
  {
    id: 'mascarilla-arcilla',
    name: 'Mascarilla Arcilla Andina',
    description:
      'Arcilla volcánica purificante con hierbas medicinales de Cusco. Limpia poros y equilibra la piel grasa.',
    price: 55,
    currency: 'S/',
    region: 'Andes',
    image: '/images/productores.jpg',
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}
