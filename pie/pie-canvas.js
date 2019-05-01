function init() {
  const arc = d3.arc()
    .context(ctx)

  const pie = d3.pie()
    .value(d => d)
    .startAngle(0)
    .endAngle(Math.PI*2)
    .sort(null)

  function drawMain() {
    const r = Math.floor(Math.min(mainWidth, mainHeight)/2)
    arc
      .outerRadius(r)
      .innerRadius(r/2)

    ctx.save()
    ctx.translate(width/2, height/2)
    ctx.fillStyle = 'red'
    ctx.strokeStyle = '#000'

    pie(data).forEach(d => {
      arc(d)
    })
    
    ctx.fill()
    ctx.stroke()
    ctx.restore()
  }

  function drawX() {
  }

  function drawY() {
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