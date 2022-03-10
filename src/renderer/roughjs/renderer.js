import { intensifyContext as context } from './context'
import { line, circle, rect, path } from './shapes'

export function createPlugin() {
  return {
    line,
    circle,
    rect,
    path,
    context,
  }
}
