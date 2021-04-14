---
title: phaser3中文化教學 - 01 - 初始化你的遊戲吧!
lang: zh-Hant-TW
author: NoseGates
description: 將phaser3官網上英文的教程經過我的腦袋翻譯過後再寫出的教學文章
sidebar: false
---

# 01 - 初始化你的遊戲吧!

本篇是專門介紹phaser3這套遊戲引擎

有鑑於線上大多英文內容

作者將網路上大多數的教程吸收以後

加上自己的使用經驗~~踩雷經驗~~

撰寫而成的中文教學文章

[[toc]]

::: details 悄悄話
本系列文章

有鑑於作者沒有美術天分

遊戲需要的圖片都會找線上範例

**第一個遊戲範例**是官網範例+個人解說

**第二個遊戲範例**會找另一個有物理效果的線上範例+個人解說

手把手做完練習帶你上手Phaser3
:::

## Phaser3簡介

[Phaser官網](https://phaser.io/)

![phaser3官網圖](https://i.imgur.com/FTNYxKe.jpg)

### Phaser 是一個 HTML5 遊戲框架 (Game framework)，協助開發跨平台的 2D 遊戲

#### phaser有的優勢

* 快速，開源，免費，跨平台
* 使用方法簡單，容易上手
* 支持WebGL和canvas渲染
* 大量的官方範例
* 支援PWA


## 快速起步

這裡使用的編輯器是 **vscode**

並且安裝Live Server這個套件
![live server](https://i.imgur.com/kxiE95W.png)

建立一個基本的Html頁面

在裡面放置一個 `div#game`

引入phaser3

``` javascript
<script src="//cdn.jsdelivr.net/npm/phaser@3.23.0/dist/phaser.js"></script>
```
::: tip
撰寫本文時版本為 @3.23.0
或
觀看目前[穩定版本](https://phaser.io/download/stable)
:::

上述步驟都完成就可以進入下一階段

或是直接複製下方模板進入下一階段

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>phaser3</title>
</head>
<body>
  <div id="game"></div>
  <script src="//cdn.jsdelivr.net/npm/phaser@3.23.0/dist/phaser.js"></script>
</body>
</html>
```

## 初始化遊戲

在script內添加下列內容

``` javascript
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game',
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

const game = new Phaser.Game(config)

function preload () {
}

function create () {
}

function update () {
}
```

接著開啟Live Server

你的畫面大概會長這樣

![初始化遊戲畫面](https://i.imgur.com/elmzfJJ.png)

這時**心裡一驚!** 是不是壞了?

這我還不能跟你保證

但如果你按下F12然後看到

![phaser3的穩定console](https://i.imgur.com/iOkwJTB.png)

就可以說你沒有壞

而且成功初始化遊戲囉

::: warning 下回提醒
下一篇開始的教學會使用到一些圖片

可以去[官網上下載](https://phaser.io/tutorials/making-your-first-phaser-3-game-chinese)
:::