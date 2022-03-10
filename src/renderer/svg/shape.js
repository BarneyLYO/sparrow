import {
  applyAttributes,
  createSVGElement,
  mount,
} from '../../utils'

const { abs } = Math

export function shape(type, ctx, attrs) {
  const { group } = ctx
  const el = createSVGElement(type)
  applyAttributes(el, attrs)
  mount(group, el)
  return el
}

export function line(ctx, attrs) {
  return shape('line', ctx, attrs)
}

/**
 * rect not allow negative,
 * width=-60 height=-60 x= 100 y = 100
 * =>
 * width=60 height=60 x=40 y=40
 * @param {*} ctx
 * @param {*} attrs
 * @returns
 */
export function rect(ctx, attrs) {
  const { width, height, x, y } = attrs

  return shape('rect', ctx, {
    width: abs(width),
    height: abs(height),
    x: width > 0 ? x : x + width,
    y: height > 0 ? y : y + height,
  })
}

export function path(ctx, attrs) {
  const { d } = attrs
  const path = Array.isArray(d) ? d.flat().join(' ') : d
  return shape('path', ctx, { ...attrs, d: path })
}

export function circle(ctx, attrs) {
  return shape('circle', ctx, attrs)
}

export function text(ctx, attrs) {
  const { text, ...rest } = attrs
  const textEl = shape('text', ctx, rest)
  textEl.textContent = text
  return textEl
}

export function ring(ctx, attrs) {
  const { cx, cy, r1, r2, ...styles } = attrs

  const { stroke, strokeWidth, fill } = styles

  const defaultStrokeWidth = 1
  const innerStroke = circle(ctx, {
    fill: 'transparent',
    stroke: stroke || null,
    strokeWidth,
    cx,
    cy,
    r: r1,
  })

  const ring = circle(ctx, {
    ...styles,
    strokeWidth:
      r2 - r1 - (strokeWidth || defaultStrokeWidth),
    stroke: fill,
    fill: 'transparent',
    cx,
    cy,
    r: (r1 + r2) / 2,
  })

  const outStroke = circle(ctx, {
    fill: 'transparent',
    stroke: stroke || fill,
    strokeWidth,
    cx,
    cy,
    r: r2,
  })

  return [innerStroke, ring, outStroke]
}
