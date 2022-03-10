import { createRenderer as createSvgRenerer } from './svg/renderer'

export function createRenderer(
  width,
  height,
  createRendererImpl = null,
) {
  return createRendererImpl
    ? createRendererImpl(width, height)
    : createSvgRenerer(width, height)
}
