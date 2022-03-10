import { createContext } from './context'
import {
  line,
  circle,
  text,
  rect,
  path,
  ring,
} from './shape'

import {
  restore,
  save,
  scale,
  translate,
  rotate,
} from './transform'

export function createRenderer(width, height) {
  const ctx = createContext(width, height)

  return {
    line: (opt) => line(ctx, opt),
    circle: (opt) => circle(ctx, opt),
    text: (opt) => text(ctx, opt),
    rect: (opt) => rect(ctx, opt),
    path: (opt) => path(ctx, opt),
    ring: (opt) => ring(ctx, opt),
    restore: () => restore(ctx),
    save: () => save(ctx),
    scale: (...args) => scale(ctx, ...args),
    rotate: (...args) => rotate(ctx, ...args),
    translate: (...args) => translate(ctx, ...args),
    node: () => ctx.node,
    group: () => ctx.group,
  }
}
