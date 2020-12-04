---
title: 02 - JS and CSS Clock
author: NoseGates
lang: zh-Hant-TW
description: css + js 實現時鐘轉動效果
---
# 02 - JS and CSS Clock
[展示](https://connectshark.github.io/JavaScript30/02%20-%20JS%20and%20CSS%20Clock/index-Chambers.html)
## 內容概要
![實作效果](https://i.imgur.com/zkv3FBT.gif)

使用css製作時鐘指針,純js計算時間和轉動角度

## 重點整理
* 指針位置調整
* 各指針角度計算
* 計時器選用

### 指針位置調整
範例中的指針定位方式有稍微調整過

將各指針大小重新調整
``` css
.hand {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.05s ease-in-out;
}
```
各指針的使用`::before`製作
``` css
.second-hand::before{
  content: '';
  position: absolute;
  width: 5px;
  height: 50%;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%,0);
  background-color: white;
}
```
這樣調整的優點是在`transform`的中心點就是整個`.hand`的中心

也不用調整`transform-origin`的位置

### 各指針角度計算
簡單的數學題目
秒針和分針每走一格是 360/60=**6**(deg)
``` js
const now = new Date()

const second = now.getSeconds()
const secondDeg = second * 6
```
時針則是 360/12=**30**(deg)
``` js
const hour = now.getHours()
const hourDeg = hour * 30
```

### 計時器選用
範例使用[setInterval](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval)

這裡使用[requestAnimationFrame](https://developer.mozilla.org/zh-TW/docs/Web/API/Window.requestAnimationFrame)

個人對這兩個的差異分析如下

| 計時器名稱 | 說明 | 是否設定時間 |
| :--------: | :--------: | :---: |
| setInterval | 標準的計時器,設定固定時間重複調用function | 是 |
| requestAnimationFrame |根據使用者螢幕的更新頻率刷新,相當於不用設定時間的`setTimeout`| 否 |

對我來說`requestAnimationFrame`是專門用於頁面刷新的計時器

而`setInterval`則使用於程式內的計時器

應用於程式內如下
``` js
function animationHandler() {
  setNowTime() //設定指針走動的function
  window.requestAnimationFrame(animationHandler)
}
window.requestAnimationFrame(animationHandler)
```