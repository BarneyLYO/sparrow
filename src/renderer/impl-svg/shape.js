/* eslint-disable implicit-arrow-linebreak */
import {
  applyAttributes,
  createSVGElement,
  mount,
} from '../../utils/renderer/utils'

export function shape(type, ctx, attributes) {
  const { group } = ctx
  const el = createSVGElement(type)
  applyAttributes(el, attributes)

  mount(group, el)
  return el
}

export const line = (ctx, attrs) =>
  shape('line', ctx, attrs)

export const rect = (ctx, attrs) => {
  const { width, height, x, y } = attrs

  return shape('rect', ctx, {
    ...attrs,
    width: Math.abs(width),
    height: Math.abs(height),
    x: width > 0 ? x : x + width,
    y: height > 0 ? y : y + height,
  })
}

export const circle = (ctx, attrs) =>
  shape('circle', ctx, attrs)

export const text = (ctx, attrs) => {
  const { text, ...rest } = attrs
  const textElement = shape('text', ctx, rest)
  textElement.textContent = text
  return textElement
}

export const path = (ctx, attrs) => {
  const { d } = attrs
  return shape('path', ctx, {
    ...attrs,
    d: d.flat().join(' '),
  })
}

export const ring = (ctx, attrs) => {
  const { cx, cy, r1, r2, ...styles } = attrs

  const { stroke, strokeWidth, fill } = styles
  const defaultStrokeWidth = 1

  const innerStroke = circle(ctx, {
    fill: 'transparent',
    stroke: stroke || fill,
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

  const outerStroke = circle(ctx, {
    fill: 'transparent',
    stroke: stroke || fill,
    strokeWidth,
    cx,
    cy,
    r: r2,
  })

  return [innerStroke, ring, outerStroke]
}

export const shapeImpl = {
  line,
  rect,
  circle,
  text,
  path,
  ring,
}
