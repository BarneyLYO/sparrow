import {
  createSVGElement,
  mount,
  applyTransform,
} from '../../utils'

export function transform(type, ctx, ...params) {
  const { group } = ctx
  applyTransform(group, `${type}(${params.join(', ')})`)
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
  const newGrp = createSVGElement('g')
  mount(group, newGrp)
  ctx.group = newGrp
}

export function restore(ctx) {
  const { group } = ctx
  const { parentNode } = group
  ctx.group = parentNode
}
