function init() {
  const xScale = d3.scaleBand()
    .domain(d3.range(0, data.length))
    .range([0, mainWidth])
    .padding(.2)
    // .paddingInner(.2)

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([mainHeight, 0])

  function drawMain() {
    ctx.save()
    ctx.translate(margin.left, margin.top)
    ctx.fillStyle = 'orangered'
    ctx.strokeStyle = '#000'

    const barWidth = xScale.bandwidth()

    data.forEach((d, i) => {
      if(!d) return // 值为0不绘制，不然会有多余边框

      const x = 
      ctx.beginPath()
      ctx.rect(xScale(i), yScale(d), barWidth, mainHeight - yScale(d))
      ctx.fill()
      ctx.stroke()
    })
    
    ctx.restore()
  }

  function drawX() {
    const tickLength = 6
    const bandwidth = xScale.bandwidth()

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
      const x = xScale(i) + bandwidth/2
      ctx.moveTo(x, 0)
      ctx.lineTo(x, tickLength)
      ctx.fillText(i, x, tickLength + 4)
    })

    ctx.stroke()
    ctx.restore()
  }

  function drawY() {
    const tickLength = 6
    const ticks = yScale.ticks()

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
    drawMain()
    drawAxis()
  }

  render()

  return render
}

const update = init()