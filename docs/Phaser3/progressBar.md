---
title: phaser3中文化教學 - 09 - 打造一個讀取畫面吧!
lang: zh-Hant-TW
author: NoseGates
description: 讀取進度條是每個遊戲都會有的畫面,目的是因遊戲所需要的素材過大時讀取時間過久,若沒有進度條使用者會有無法等待的感覺
sidebar: false
date: 2020-07-25
---
# 09 - 打造一個讀取畫面吧!
[[toc]]

## 目標設立

回顧前幾篇的遊戲

已經可以算是一個正式的遊戲

接下來要來做一個遊戲都有的**loading**頁

大概會長下面這樣

![loading頁面](https://i.imgur.com/vlOBiHt.png)

大概要有的條件有以下

- 百分比讀取條
- 要顯示讀取素材
- 顯示目前百分比


大致規劃好以後就開始吧！！

> 各位可以使用[上一篇](/Phaser3/phaserInWebpack)webpack的專案來製作
## 前置作業

開一支基礎的html

並且把圖片素材包放進來

要有loading的動作才可以製作畫面～
``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>demo</title>
</head>
<body>
	<script src="//cdn.jsdelivr.net/npm/phaser@3.24.1/dist/phaser.js"></script>
	<script>
		var config = {
      type: Phaser.AUTO,
      parent: 'phaser-example',
      width: 800,
      height: 600,
      scene: {
        preload: preload,
        create: create
      }
    }
    var game = new Phaser.Game(config);

    function preload() {
    	this.load.image('sky', 'assets/sky.png')
    }

    function create() {
    }
	</script>
</body>
</html>
```
建完以後還需要了解

我們要利用的讀取事件

### 讀取事件

`preload`裡提供多個讀取事件

好讓我們依照目前讀取狀態做畫面的變化

| progress | fileprogress | complete |
| :--------: | :--------: | :--------: |
| 目前讀取進度,第一個參數提供目前百分比  | 提供當前讀取的素材名稱 | 所有素材讀取完成事件 |


> 先將`preload`裡的內容修改如下
``` javascript
function preload () {
  for (let i = 0; i < 500; i++) {
    this.load.image(`sky${i}`, 'assets/sky.png')
  }
}
```
::: warning 提醒
如果沒有修改則會因為讀取太快看不到製作的效果
:::

## 元件製作

### 百分比文字

先將最重點的文字放在畫面正中間

使用者可以一目了然目前遊戲讀取進度

> 在`preload`添加以下內容
``` javascript
const percentText = this.add.text(400, 270, '0%', {
  font: '16px monospace',
  color: '#fff',
  align: 'center'
}).setOrigin(0.5, 0.5)
```

接下來註冊`preload`提供的讀取進度事件`pregress`

> 在`preload`裡添加以下內容
``` javascript
this.load.on('progress', function (value) {
  percentText.setText(parseInt(value * 100) + '%')
})
```
加完重新reload以後就可以看到百分比的數字從0跑到100的過程

### 讀取進度條

除了文字以外也要有進度條

圖案比數字更有讀取的感覺

> 在`preload`添加以下內容
``` javascript
// bar是進度條
const progressBar = this.add.graphics()
// box是進度條的外框
const progressBox = this.add.graphics()
progressBox.fillStyle(0x222222, 0.8)
progressBox.fillRect(300, 300, 200, 30)
```
先把進度條的外框畫好

接下來要利用`progress`事件的百分比讓進度條跟著百分比成長

> 將剛剛`progress`裡修改如下
``` javascript
this.load.on('progress', function (value) {
  progressBar.clear()
  progressBar.fillStyle(0xffffff, 1)
  progressBar.fillRect(305, 305, 190 * value, 20)

  percentText.setText(parseInt(value * 100) + '%')
})
```

每次都先將bar清空後再從新繪製新的bar

### 當前讀取素材

遊戲在讀取時有些遊戲會將目前的讀取素材寫出來

可以讓使用者真的看得到他在讀的狀態~~跑給你看~~

> 在`preload`裡添加以下內容
``` javascript
const assetText = this.add.text(400, 350, '', {
  font: '16px monospace',
  color: '#fff',
  align: 'center'
}).setOrigin(0.5, 0.5)
```
將讀取文字寫在讀取條的下方

接著註冊`preload`提供的事件`fileprogress`

``` javascript
this.load.on('fileprogress', function (file) {
  assetText.setText('Loading asset: ' + file.key)
})
```
該事件提供第一個參數是當前讀取的素材資訊

我們取用key的名稱

並且在每次執行的時候更新assetText文字

reload後可以看得到當前讀取的檔案是哪一支

## 製作完成
當前的畫面大概會長這樣
![成品圖](https://i.imgur.com/wLcQ2hz.png)

### 清除畫面

`preload`還提供讀取完成事件`complete`

我們利用讀取完成事件清掉畫面中用不到的讀取進度條和文字

> 在`preload`裡添加以下內容
``` javascript
this.load.on('complete', function () {
  progressBar.destroy()
  progressBox.destroy()
  percentText.destroy()
  assetText.destroy()
})
```
**大功告成**

reload就會看到讀取完成以後

讀取完成以後就可以在`create`裡開始你的遊戲

或是將此場景視為讀取專用

讀取完成後直接進入下一個**遊戲場景**


最後附上此文章所有修改完成的程式碼
``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>demo</title>
</head>
<body>
  <script src="//cdn.jsdelivr.net/npm/phaser@3.24.1/dist/phaser.js"></script>
	<script>
  var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
      preload: preload,
      create: create
    }
  };

    // Create a new Phaser Game object
  var game = new Phaser.Game(config);

  function preload() {
    for (let i = 0; i < 500; i++) {
    this.load.image(`sky${i}`, 'assets/sky.png')
  }


  const progressBar = this.add.graphics()
  const progressBox = this.add.graphics()
  progressBox.fillStyle(0x222222, 0.8)
  progressBox.fillRect(300, 300, 200, 30)
  const percentText = this.add.text(400, 270, '0%', {
    font: '16px monospace',
    color: '#fff',
    align: 'center'
  }).setOrigin(0.5, 0.5)
  const assetText = this.add.text(400, 350, '', {
    font: '16px monospace',
    color: '#fff',
    align: 'center'
  }).setOrigin(0.5, 0.5)
  this.load.on('progress', function (value) {
    progressBar.clear()
    progressBar.fillStyle(0xffffff, 1)
    progressBar.fillRect(305, 305, 190 * value, 20)

    percentText.setText(parseInt(value * 100) + '%')
  })

  this.load.on('fileprogress', function (file) {
    assetText.setText('Loading asset: ' + file.key)
  })

  this.load.on('complete', function () {
    progressBar.destroy()
    progressBox.destroy()
    percentText.destroy()
    assetText.destroy()
  })
}

  function create() {
  }
  </script>
</body>
</html>
```
[參考網站](https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/?a=13)
