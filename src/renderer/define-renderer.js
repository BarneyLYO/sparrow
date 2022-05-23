const SUPPORTED_SHAPE_IMPLES = [
  'line',
  'circle',
  'text',
  'rect',
  'path',
  'ring',
]

const SUPPORTED_TRANSFORM_IMPLES = [
  'restore',
  'save',
  'scale',
  'translate',
  'rotate',
]

export function defineRenderer(
  ctxImpl,
  shapesImpl,
  transformImpl,
) {
  const createRenderer = (w, h) => {
    const ctx = ctxImpl(w, h)

    const shapesFns = SUPPORTED_SHAPE_IMPLES.reduce(
      (accu, curr) => ({
        ...accu,
        [curr]: (opts) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          shapesImpl[curr] && shapesImpl[curr](ctx, opts),
      }),
      Object.create(null),
    )

    const transformFns = SUPPORTED_TRANSFORM_IMPLES.reduce(
      (accu, curr) => ({
        ...accu,
        [curr]: (...args) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          transformImpl[curr] &&
          transformImpl[curr](ctx, ...args),
      }),
      Object.create(null),
    )

    return {
      node: () => ctx.node,
      group: () => ctx.group,
      ...shapesFns,
      ...transformFns,
    }
  }

  return createRenderer
}
