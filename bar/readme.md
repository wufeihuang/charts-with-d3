#柱图

## d3.scaleBand()

```
var xScale = d3.scaleBand()
  .domain()
  .range()
  .padding(.2)

xScale.bandwidth()
```

## d3.scaleLinear()

## d3.axisBottom()

```
d3.axisBottom()
  .scale(xScale)
  .ticks(data.length)
```

## d3.axisLeft()

## svg:rect

## canvas
- ctx.rect(x, y, width, height)
- ctx.fillRect()
- ctx.strokeRect()
- ctx.clearRect()

strokeRect和fillRect绘制后不会再被fill和stroke方法影响。