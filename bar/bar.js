function init() {
  const xScale = d3.scaleBand()
    .domain(d3.range(0, data.length))
    .range([0, mainWidth])
    .padding(.2)

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([mainHeight, 0])

  function drawBars() {
    g
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    g.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(i))
      .attr('width', xScale.bandwidth())
      .attr('y', d => yScale(d))
      .attr('height', d => mainHeight - yScale(d))
      .attr('stroke', '#000')
      .attr('fill', 'orangered')
  }

  function drawAxis() {
    const x = g
      .append('g')
      .attr('transform', `translate(0, ${mainHeight})`)

    const y = g
      .append('g')
      .attr('transform', `translate(0, 0)`)

    x
      .call(
        d3.axisBottom()
        .scale(xScale)
      )

    y
      .call(
        d3.axisLeft()
          .scale(yScale)
          .ticks(data.length)
      )
  }

  function render() {
    updateTitle()
    updateSvg()
    drawBars()
    drawAxis()
  }

  render()

  return render
}

const update = init()