import rc from 'roughjs'

export function intensifyContext(ctx) {
  const { node } = ctx
  const rough = rc.svg(node)
  return { ...ctx, rough }
}
