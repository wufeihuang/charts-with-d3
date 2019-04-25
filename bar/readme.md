# 饼图

## d3.arc

`d3.arc` 返回路径生成函数，用来创建 path 路径字符串。

## d3.pie

将数组转换成饼图绘图数据

## viewBox && preserveAspectRatio

不给svg 设置固定宽高，使用 viewBox 来实现 svg 自适应。要注意的是没有设置 svg 宽高的话，svg会基于随父元素的宽度缩放，所以有时候会超过父元素高度。

一般要恰好适配，应该保持父元素宽高和 svg 的viewBox宽高的比例一致。