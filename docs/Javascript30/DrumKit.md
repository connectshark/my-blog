---
title: 01 - JavaScript Drum Kit
author: NoseGates
lang: zh-Hant-TW
description: js實現鍵盤敲擊效果
---
# 01 - JavaScript Drum Kit

[展示](https://connectshark.github.io/JavaScript30/01%20-%20JavaScript%20Drum%20Kit/index-Chambers.html)

## 內容概要
![課程概要](https://i.imgur.com/GHih5TO.jpg)
按下鍵盤時,畫面中對應的元素亮起,同時播放聲音

## 重點整理
* 鍵盤事件
* 未指定按鍵錯誤
* 播放聲音
* 結束動畫
### 鍵盤事件
註冊鍵盤事件使用`keyCode`作為判斷使用者按下的是哪一個按鍵

同時找尋頁面對應的元素
``` js
function playHandler(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
}
window.addEventListener('keydown' ,playHandler)
```
### 未指定按鍵錯誤
若使用者按下畫面中沒有的按鍵
![未指定按鍵錯誤](https://i.imgur.com/tMrefdE.png)
由於其他按鍵的`keyCode`找不到對應的元素
`audio`和`key`都會是`null`

調整如下
``` js
if (!audio) return
```
### 播放聲音
一般的播放聲音
``` js
audio.play()
```
但有遇到一種情況

使用者在聲音未結束以前就按下同個按鍵第二次

聲音不會重複播放

這裡使用`currentTime`
``` js
audio.currentTime = 0
```
讓每次播放都是從頭開始

### 結束動畫

註冊`transitionend`事件

因為有變化的css不只一個

每個元素都會觸發多次`transitionend`

在這裡只鎖定css中的`transform`
``` js
function removeClass(e) {
  if (e.propertyName === 'transform') {
    e.currentTarget.classList.remove('playing')
  }
}
document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('transitionend', removeClass)
})
```