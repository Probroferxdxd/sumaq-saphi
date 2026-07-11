import { useEffect, useState } from 'react'

export function getPageFromHash() {
  const raw = window.location.hash.replace(/^#\/?/, '')

  if (raw.startsWith('tienda/confirmar')) return 'confirmar-compra'
  if (raw.startsWith('tienda')) return 'tienda'

  const first = raw.split('/')[0].split('?')[0] || 'inicio'
  if (first === 'sobre-nosotros') return 'sobre-nosotros'
  return 'inicio'
}

export function getHashParams() {
  const hash = window.location.hash
  const queryIndex = hash.indexOf('?')
  if (queryIndex === -1) return new URLSearchParams()
  return new URLSearchParams(hash.slice(queryIndex + 1))
}

export function getSectionFromHash() {
  const raw = window.location.hash.replace(/^#\/?/, '')
  const parts = raw.split('/')

  if (parts[0] === 'sobre-nosotros' && parts[1]) {
    return parts[1].split('?')[0]
  }

  if (parts[0] === 'tienda' && parts[1] && parts[1] !== 'confirmar') {
    return parts[1].split('?')[0]
  }

  if (parts[0] && !['sobre-nosotros', 'inicio', 'tienda'].includes(parts[0])) {
    return parts[0].split('?')[0]
  }

  return null
}

export function scrollToHashSection() {
  const sectionId = getSectionFromHash()
  if (!sectionId) return

  requestAnimationFrame(() => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

export function usePage() {
  const [page, setPage] = useState(getPageFromHash)

  useEffect(() => {
    const onHashChange = () => setPage(getPageFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return { page }
}

export function pageHref(page, section) {
  if (page === 'sobre-nosotros') {
    return section ? `#sobre-nosotros/${section}` : '#sobre-nosotros'
  }
  if (page === 'tienda') {
    return section ? `#tienda/${section}` : '#tienda'
  }
  return section ? `#${section}` : '#inicio'
}
