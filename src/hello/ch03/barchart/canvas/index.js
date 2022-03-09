const data = [
  { name: 'questions', value: 17 },
  { name: 'schools', value: 25 },
  { name: 'philosophers', value: 35 },
]

const chartWidth = 480
const chartHeight = 300
const margin = 15

const containerWidth = chartWidth + margin * 2
const containerHeight = chartHeight + margin * 2

const names = Array.from(data, (d) => d.name)
const values = Array.from(data, (d) => d.value)
const indics = Array.from(data, (_, i) => i)

const step = chartWidth / names.length
const barwidth = step * 0.8

const xs = Array.from(indics, (i) => i * step)
const y = chartHeight

const vmax = Math.max(...values)
const barHeights = Array.from(
  values,
  (v) => chartHeight * (v / vmax),
)

const nameColor = {
  questions: '#5B8FF9',
  philosophers: '#61DDAA',
  schools: '#65789B',
}

const colors = Array.from(names, (name) => nameColor[name])

function doPrint() {
  const canvas = document.getElementById('canvas')
  if (!(canvas instanceof HTMLCanvasElement)) return

  canvas.style.width = `${containerWidth}px`
  canvas.style.height = `${containerHeight}px`

  canvas.width = containerWidth * 2
  canvas.height = containerHeight * 2

  const context = canvas.getContext('2d')
  context.scale(2, 2)

  context.translate(margin, margin)

  indics.forEach((index) => {
    const color = colors[index]
    const x = xs[index]
    const barHeight = barHeights[index]
    const value = values[index]

    context.fillStyle = color
    context.fillRect(x, y - barHeight, barwidth, barHeight)

    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillStyle = 'white'
    context.font = '25px PingFangSC-Regular, sans-serif'
    context.fillText(
      value,
      x + barwidth / 2,
      y - barHeight / 2,
    )
  })
}

doPrint()
