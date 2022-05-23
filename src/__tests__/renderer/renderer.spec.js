import { defineRenderer } from '../../renderer/define-renderer'
import { createContext as createContextSvg } from '../../renderer/impl-svg/create-ctx'
import {
  createDiv,
  mount,
} from '../../utils/renderer/utils'

const EMPTY = Object.create(null)

describe('createRenderer', () => {
  test('createContext(w,h) return expected context.', () => {
    const createContext = defineRenderer(
      createContextSvg,
      EMPTY,
      EMPTY,
    )

    const renderer = createContext(600, 400)

    const node = renderer.node()
    const group = renderer.group()

    expect(node.tagName).toBe('svg')
    expect(node.getAttribute('width')).toBe('600')
    expect(node.getAttribute('height')).toBe('400')
    expect(node.getAttribute('viewBox')).toBe('0 0 600 400')
    expect(group.tagName).toBe('g')
    expect(group.parentNode).toBe(node)

    mount(createDiv(), node)
  })
})
