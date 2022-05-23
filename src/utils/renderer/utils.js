export function createSVGElement(type) {
  return document.createElementNS(
    'http://www.w3.org/2000/svg',
    type,
  )
}

export function mount(parent, child) {
  return parent && parent.appendChild(child)
}

export function createDiv() {
  const div = document.createElement('div')
  document.body.appendChild(div)
  return div
}

export function getAttributes(node, attributes) {
  return attributes.reduce((total, curr) => {
    total[curr] = node.getAttribute(curr)
    return total
  }, Object.create(null))
}

export function applyAttributes(el, attributes) {
  for (const [k, v] of Object.entries(attributes)) {
    const kebabCaseKey = k.replace(
      /[A-Z]/g,
      (m) => `-${m.toLocaleLowerCase()}`,
    )
    el.setAttribute(kebabCaseKey, v)
  }
}

export function applyTransform(el, transform) {
  const oldTransform = el.getAttribute('transform') || ''
  const prefix = oldTransform ? `${oldTransform} ` : ''
  el.setAttribute('transform', `${prefix}${transform}`)
}
