function init() {
  const xScale = d3.scalePoint()
    .domain(d3.range(data.length))
    .range([0, mainWidth])

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([mainHeight, 0])

  const line = d3.line()
    .x((d, i) => xScale(i))
    .y(yScale)
    .defined(d => !!d || d === 0)
    .context(ctx)

  function drawMain() {
    ctx.save()
    ctx.translate(margin.left, margin.top)
    ctx.strokeStyle = '#000'

    line(data)
    
    ctx.stroke()
    ctx.restore()
  }

  function drawX() {
    const tickSize = 6
    const tickPadding = 2

    ctx.save()

    ctx.strokeStyle = '#000'
    ctx.fillStyle = '#000'
    ctx.font = '14px sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'

    ctx.translate(margin.left, height - margin.bottom)

    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(mainWidth, 0)
    ctx.stroke()

    ctx.beginPath()
    data.forEach((d, i) => {
      const x = xScale(i)
      ctx.moveTo(x, 0)
      ctx.lineTo(x, tickSize)
      ctx.fillText(i, x, tickSize + tickPadding)
    })

    ctx.stroke()

    ctx.restore()
  }

  function drawY() {
    const tickSize = 6
    const tickPadding = 2
    const ticks = yScale.ticks()

    ctx.save()
    ctx.strokeStyle = '#000'
    ctx.fillStyle = '#000'
    ctx.font = '14px sans-serif'
    ctx.textAlign = 'right'
    ctx.textBaseline = 'middle'

    ctx.translate(margin.left, margin.top)

    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(0, mainHeight)
    ctx.stroke()

    ticks.forEach(d => {
      const y = yScale(d)
      ctx.moveTo(0, y)
      ctx.lineTo(-tickSize, y)
      ctx.fillText(d, -tickSize-tickPadding, y)
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
    drawMain()
    drawAxis()
  }

  render()

  return render
}

const update = init()