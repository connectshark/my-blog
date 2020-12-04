---
title: phaser3中文化教學 - 07 - 增加新的場景吧!
lang: zh-Hant-TW
author: NoseGates
description: 將phaser3官網上英文的教程經過我的腦袋翻譯過後再寫出的教學文章
sidebar: false
---

# 增加新的場景吧!

## 文章結構
[[toc]]

## 前情提要
到上一回以前都是基本的內容

讓每個人都可以製作一個可以玩的小遊戲

接下來把這個遊戲做得更精緻

能夠把遊戲做得感覺更好

::: tip 提醒
文末有提供到目前為止的內容(html檔)

給大家下載 [文末](#遊戲完成)
:::

## 為原本的場景命名

首先將場景用一個Object包住

將原本的function改為物件型式

並且新增一個key值將此場景命名為`main`

更改如下

``` javascript
const main = {
	key: 'main',
	preload: function () {/***/},
	create: function () {/***/},
	update: function () {/***/}
}
```

::: danger hitBomb和collectStar不用包在主場景裡嗎?
因為這兩支都是獨立出來負責處理遊戲物件

在先前的程式裡已有將該**場景**傳入兩支程式中

``` javascript {10}
function hitBomb (player, bomb){
	this.physics.pause()

	player.setTint(0xff0000)

	player.anims.play('turn')

	gameOver = true

	console.log(this) //main
}

```

即可看出目前程式處理的場景
:::

## 重新註冊場景

變更完成以後將回到一開始的config

讓`scene`接受一個陣列

變更如下
``` javascript {13}
const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	parent: 'game',
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
			debug: false
		}
	},
	scene: [main],
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	}
}
```
### 完成註冊場景

如此一來

雖然遊戲看起來沒什麼變化

但遊戲的場景有了命名

將可以接受多場景的切換

## 新增遊戲結束場景

新增一個場景物件

並將場景命名為`end`

``` javascript
const end = {
	key: 'end',
	preload: function () {
		
	},
	create: function () {

	},
	update: function () {
		
	}
}
```
### 註冊新場景

將場景物件加入`config`的陣列中

即完成註冊場景

## 為新場景加點東西吧
### 構思效果

- 列出我得到的分數
- 要有重新開始遊戲的按鈕
- 一點點小效果

**預計會長這樣**

![畫面](https://i.imgur.com/qPA8NVx.png)


### 實際加入效果

在`end`場景的`create`中添加以下內容

``` javascript
const gameover = this.add.text(config.width / 2, 100, `GAME OVER`, {
	color: '#ff0',
	fontFamily: 'Tahoma',
	fontSize: 40,
	resolution: 2
}).setOrigin(0.5, 0.5)

this.restart = this.add.text(config.width / 2, 400, 'restart', {
	color: '#fff',
	fontFamily: 'Tahoma',
	fontSize: 40,
	resolution: 2
}).setOrigin(0.5, 0.5).setInteractive({useHandCursor: true})
	.on('pointerup',() => {
	})
	.on('pointerover', () => {
		this.restart.alpha  = 0.5
	})
	.on('pointerout', () => {
		this.restart.alpha  = 1
	})

this.add.text(config.width / 2, 200, `SCORE: ${score}`, {
	color: '#fff',
	fontFamily: 'Tahoma',
	fontSize: 40,
	resolution: 2
}).setOrigin(0.5, 0.5)

this.tweens.add({
	targets: gameover,
	y: { from: 0, to: 100 },
	ease: 'Bounce.easeOut',
	duration: 1000,
	repeat: 0,
	yoyo: false
})
```
主要添加文字和設定style

restart按鈕有設定hover效果

gameover文字則添加動畫效果

## 兩個場景間切換

預計要玩家碰到炸彈時

過幾秒後切換到結束場景

添加以下內容
``` javascript {8-10}
function hitBomb (player, bomb){
	this.physics.pause()

	player.setTint(0xff0000)

	player.anims.play('turn')

	setTimeout(() => {
		this.scene.start('end')
	}, 5000)
}
```

即可切換至結束場景

點擊restart文字時切回原場景

同時歸零分數重新計算

``` javascript {8-9}
this.restart = this.add.text(config.width / 2, 400, 'restart', {
	color: '#fff',
	fontFamily: 'Tahoma',
	fontSize: 40,
	resolution: 2
}).setOrigin(0.5, 0.5).setInteractive({useHandCursor: true})
	.on('pointerup',() => {
		score = 0
		this.scene.start('main')
	}, this )
	.on('pointerover', () => {
		this.restart.alpha  = 0.5
	}, )
	.on('pointerout', () => {
		this.restart.alpha  = 1
	})
```

## 遊戲完成

到這裡遊戲就到一個段落

成為一個偶爾可以拿出來玩一下的小品遊戲

這裡提供到目前為止的內容給大家

<a download href="/download/phaser.html">下載小遊戲</a>

等未來自己更熟練以後

再把這個小品遊戲拿出來加入更厲害的效果

<Vssue :title="$title" />