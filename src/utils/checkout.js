export function openConfirmWindow(product) {
  const params = new URLSearchParams({
    product: product.id,
    region: product.region,
  })
  const base = `${window.location.origin}${window.location.pathname}`
  const url = `${base}#tienda/confirmar?${params.toString()}`
  window.open(url, '_blank', 'width=520,height=720,scrollbars=yes,resizable=yes')
}
