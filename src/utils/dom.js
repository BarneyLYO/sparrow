const REGEX_SINGLE_UPPERCASE = /[A-Z]/g

export function applyAttributes(el, attrs) {
  Object.entries(attrs).forEach(([key, val]) => {
    /*
      replace the camelCase => kebab-came
     */
    const kebabCaseKey = key.replace(
      REGEX_SINGLE_UPPERCASE,
      (matchedStr) => `-${matchedStr.toLocaleLowerCase()}`,
    )
    el.setAttribute(kebabCaseKey, val)
  })
}

export function applyTransform(el, transform) {
  const oldTransform = el.getAttribute('transform') || ''
  const prefix = oldTransform ? `${oldTransform}` : ''
  el.setAttribute('transform', `${prefix}${transform}`)
}

export function createSVGElement(type) {
  return document.createElementNS(
    'http://www.w3.org/2000/svg',
    type,
  )
}

export function createDiv() {
  const div = document.createElement('div')
  document.body.appendChild(div)
  return div
}

export function mount(parent, child) {
  return parent && parent.appendChild(child)
}

export function getAttributes(node, attrs) {
  return attrs.reduce(
    (total, cur) => (
      (total[cur] = node.getAttribute(cur)), total
    ),
    {},
  )
}
