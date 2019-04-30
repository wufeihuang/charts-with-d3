function init() {
  const xScale = d3.scalePoint()
    .domain(d3.range(0, data.length))
    .range([0, mainWidth])
    // .padding(.2)

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([mainHeight, 0])

  function drawCircles() {
    g.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d, i) => xScale(i))
      .attr('cy', d => yScale(d))
      .attr('r', 5)
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
        d3.axisBottom(xScale)
      )

    y
      .call(
        d3.axisLeft(yScale)
          .ticks(data.length)
      )
  }

  function render() {
    updateTitle()
    updateSvg()
    drawCircles()
    drawAxis()
  }

  render()

  return render
}

const update = init()