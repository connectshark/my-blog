---
title: 08 - Fun with HTML5 Canvas
author: NoseGates
lang: zh-Hant-TW
description: html5 canvas應用
---
# 08 - Fun with HTML5 Canvas
[展示](https://connectshark.github.io/JavaScript30/08%20-%20Fun%20with%20HTML5%20Canvas/index-Chambers.html)
## 內容概要
![內容概要](https://i.imgur.com/W7qon7o.gif)
將畫布展開至全屏

滑鼠點下去時模擬拿筆畫圖的感覺
## 重點整理
* 滑鼠事件和細節
* 畫布顏色和尺寸控制

### 滑鼠事件和細節

此篇需要注意的滑鼠事件有四個
* mousemove
* mousedown
* mouseup
* mouseout

其中`mousemove`事件會一直觸發

必須要在`mousedown`時才開始畫

同時設定初始位置的xy座標
``` javascript
canvas.addEventListener('mousedown', (e) => {
  isDraw = true
  lastX = e.offsetX
  lastY = e.offsetY
})
```
> `mousemove`時才能有線段畫圖

而其他兩個事件則結束畫畫
::: tip
`mouseout`是當滑鼠移出畫布時觸發
:::

### 畫布顏色和尺寸控制

#### 畫布的顏色用`hsl(${數字}, 100%, 50%)`

每觸發一次`drawing()`數字就往上加

超過360就重置回0循環~

#### 尺寸直接判斷`ctx.lineWidth`

用`direction`變數控制數字遞增或遞減

超過寬度超過100或小於5則
``` javascript
direction = !direction
```

然後根據目前的布林值遞增或遞減