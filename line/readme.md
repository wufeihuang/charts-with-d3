## d3.line()

### @init
- d3.line()
- d3.lineRadial

### @config
- line.x
- line.y
- line.defined
- line.curve
- line.context

- lineRadial.angle
- lineRadial.radius
- lineRadial.defined
- lineRadial.curve
- lineRadial.context

### @compute
- line
- lineRadial

## d3.scalePoint()

### @category 
- Ordinal Scales

- d3.scaleOrdinal
- d3.scaleImplicit
- d3.scaleBand
- d3.scalePoint

### @init
- d3.scalePoint

### @config
- point.domain
- point.range
- point.rangeRound
- point.round
- point.padding
- point.align

- ordinal.domain
- ordinal.range
- ordinal.unknown

- band.domain
- band.range
- band.rangeRound
- band.round
- band.paddingInner
- band.paddingOuter
- band.padding
- band.align

### @compute
- point
- point.bandwidth
- point.step
- point.copy

- ordinal
- ordinal.copy

- band
- band.bandwidth
- band.step
- band.copy

## d3.scaleLinear()

### @category
- Continuous Scales

- d3.scaleLinear
- d3.scalePow
- d3.scaleSqrt
- d3.scaleLog
- d3.scaleSymlog
- d3.scaleIdentity
- d3.scaleTime
- d3.scaleUtc

### @init
- d3.scaleLinear

### @config
- continuous.domain
- continuous.range
- continuous.rangeRound
- continuous.clamp
- continuous.interpolate
- continuous.unknown
- continuous.tickFormat
- continuous.nice

- pow.exponent
- log.base

### @compute
- continuous
- continuous.invert
- continuous.ticks
- continuous.copy

## d3.axisBottom() & d3.axisLeft()

### @category
- d3.axisTop
- d3.axisRight
- d3.axisBottom
- d3.axisLeft

### @config
- axis.scale  ==> d3.axisBottom(scale)
- axis.ticks
- axis.tickArguments
- axis.tickValues
- axis.tickFormat
- axis.tickSize
- axis.tickSizeInner
- axis.tickSizeOuter
- axis.tickPadding

### @draw
- axis

## svg shape
- svg:path