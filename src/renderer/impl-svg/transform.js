import {
  applyTransform,
  createSVGElement,
  mount,
} from '../../utils/renderer/utils'

export function transform(type, ctx, ...parms) {
  const { group } = ctx
  applyTransform(group, `${type}(${parms.join(', ')})`)
}

export function translate(ctx, tx, ty) {
  transform('translate', ctx, tx, ty)
}

export function rotate(ctx, theta) {
  transform('rotate', ctx, theta)
}

export function scale(ctx, sx, sy) {
  transform('scale', ctx, sx, sy)
}

export function save(ctx) {
  const { group } = ctx
  const newGroup = createSVGElement('g')
  mount(group, newGroup)
  ctx.group = newGroup
}

export function restore(ctx) {
  const { group } = ctx
  const { parentNode } = group
  ctx.group = parentNode
}

export const transformImpl = {
  translate,
  rotate,
  scale,
  save,
  restore,
}
