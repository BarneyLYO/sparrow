const canvas = document.getElementById('canvas')

canvas.style.width = '400px'
canvas.style.height = '200px'

canvas.width = 400
canvas.height = 200

if (canvas instanceof HTMLCanvasElement) {
  const context = canvas.getContext('2d')

  context.fillStyle = 'red'
  context.strokeStyle = 'yellow'
  context.lineWidth = 10
  context.strokeRect(0, 0, 100, 100)
  context.fillRect(5, 5, 95, 95)

  context.fillStyle = 'black'
  context.font = '25px PingFangSC-Regular, sans-serif'
  context.fillText('Hello', 150, 100)

  context.fillStyle = 'red'
  context.fillRect(0, 0, 50, 50)
  context.fillStyle = 'red'
  context.fillRect(0, 0, 50, 50)
}
