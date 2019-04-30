function init() {
  const xScale = d3.scalePoint()
    .domain(d3.range(0, data.length))
    .range([0, mainWidth])

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([mainHeight, 0])

  function drawCircles() {
    const r = 5

    ctx.save()
    ctx.translate(margin.left, margin.top)
    ctx.fillStyle = 'orangered'
    ctx.strokeStyle = '#000'

    data.forEach((d, i) => {
      ctx.beginPath()
      ctx.arc(xScale(i), yScale(d), r, 0, Math.PI*2, false)
      ctx.stroke()
      ctx.fill()
    })
    
    ctx.restore()
  }

  function drawX() {
    const tickLength = 6
    const fontSize = 14

    ctx.save()
    ctx.font = '14px sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    ctx.strokeStyle = '#000'
    ctx.fillStyle = '#000'
    ctx.translate(margin.left, height - margin.bottom)

    // main line
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(mainWidth, 0)
    ctx.stroke()

    // ticks
    ctx.beginPath()
    data.forEach((d, i) => {
      const x = xScale(i)
      ctx.moveTo(x, 0)
      ctx.lineTo(x, tickLength)
      ctx.fillText(d, x, tickLength + 4)
    })

    ctx.stroke()
    ctx.restore()
  }

  function drawY() {
    const tickLength = 6
    const fontSize = 14
    const ticks = yScale.ticks(5)

    ctx.save()
    ctx.font = '14px sans-serif'
    ctx.textAlign = 'right'
    ctx.textBaseline = 'middle'

    ctx.strokeStyle = '#000'
    ctx.fillStyle = '#000'

    ctx.translate(margin.left, margin.top)

    // main line
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(0, mainHeight)
    ctx.stroke()

    // ticks
    ctx.beginPath()
    ticks.forEach(d => {
      const y = yScale(d)
      ctx.moveTo(0, y)
      ctx.lineTo(-tickLength, y)
      ctx.fillText(d, -tickLength - 2, y)
    })

    ctx.stroke()
    ctx.restore()
  }

  function drawAxis() {
    drawX()
    drawY()
  }

  function render() {
    updateTitle()
    updateCanvas()
    drawCircles()
    drawAxis()
  }

  render()

  return render
}

const update = init()