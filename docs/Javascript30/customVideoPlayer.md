---
title: 11 - Custom Video Player
author: NoseGates
lang: zh-Hant-TW
description: 使用html5的影片播放器做客製化播放器功能
---
# 11 - Custom Video Player

## 展示

![展示](https://i.imgur.com/P8t50gW.jpg)

## 內容概要

使用html5的video客製化播放器功能

video本身提供相當齊全的事件可供監聽，但因不熟悉需搭配[mdn網站](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)服用

主要可會使用的屬性

- paused 暫停
- volume 音量
- playbackRate 播放速率
- currentTime 目前播放秒數
- duration 全部秒數

## 重點整理

### textContent

用來修改tag中間的內容
``` javascript
toggle.textContent = '填入的文字'
```

### dataset

善用dataset屬性實現相同功能提供不同變數的操作

html中設置
``` html
<button data-skip="-10" class="player__button">« 10s</button>
```
js中取用
``` javascript
this.dataset.skip
```


### video操作

操作video的方式
直接選取video tag後直接使用

``` javascript
video.addEventListener('play', toggleBtn)
video.addEventListener('click', togglePlay)
video.addEventListener('pause', toggleBtn)
video.addEventListener('timeupdate', updateProgressBar)

let currentTime = video.currentTime
let duration = video.duration


video.requestFullscreen()
video.play()
video.pause()
```