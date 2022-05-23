import {
  createSVGElement,
  mount,
} from '../../utils/renderer/utils'

export function createContext(w, h) {
  const svg = createSVGElement('svg')
  svg.setAttribute('width', w)
  svg.setAttribute('height', h)
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`)
  const g = createSVGElement('g')
  mount(svg, g)
  return {
    node: svg,
    group: g,
  }
}
