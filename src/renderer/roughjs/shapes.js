import { mount } from '../../utils/dom'

/**
 * @param {string} type
 * @param {any} ctx
 * @param  {...any} attrs
 */
export function shape(type, ctx, ...attrs) {
  const { group, rough } = ctx
  const el = rough[type](...attrs)
  mount(group, el)
}

export function line(ctx, attrs) {
  const { x1, y1, x2, y2, ...opts } = attrs
  return shape('line', ctx, x1, y1, x2, y2, opts)
}

export function rect(ctx, attrs) {
  const { width, height, x, y, ...opts } = attrs

  const x1 = width > 0 ? x : x + width
  const y1 = height > 0 ? y : y + height
  return shape(
    'rectangle',
    ctx,
    x1,
    y1,
    Math.abs(width),
    Math.abs(height),
    opts,
  )
}

export function path(ctx, attrs) {
  const { d, ...opts } = attrs
  const path = Array.isArray(d) ? d.flat().join(' ') : d
  return shape('path', ctx, path, opts)
}

export function circle(ctx, attrs) {
  const { cx, cy, r, fill, opts } = attrs
  const roughFill =
    fill === 'transparent' ? undefined : fill
  return shape('circle', ctx, cx, cy, r * 2, {
    ...opts,
    fill: roughFill,
  })
}
