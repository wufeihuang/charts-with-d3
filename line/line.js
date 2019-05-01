function init() {
  const xScale = d3.scalePoint()
    .domain(d3.range(data.length))
    .range([0, mainWidth])

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([mainHeight, 0])

  const line = d3.line()
    .x((d, i) => xScale(i))
    .y(d => yScale(d))
    .defined(d => !!d || d === 0)

  function drawLine() {
    g
      .append('path')
      .attr('d', line(data))
      .attr('fill', 'none')
      .attr('stroke', '#000')
  }

  function drawAxis() {
    g.append('g')
      .attr('transform', `translate(0, ${mainHeight})`)
      .call(
        d3.axisBottom()
          .scale(xScale)
      )

    g.append('g')
      .call(
        d3.axisLeft()
          .scale(yScale)
      )
  }

  function render() {
    updateTitle()
    updateSvg()
    drawLine()
    drawAxis()
  }

  render()

  return render
}

const render = init()