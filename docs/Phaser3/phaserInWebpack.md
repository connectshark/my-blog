---
title: phaser3中文化教學 - 08 - 用webpack打包phaser吧
tags: phaser
description: webpack前端神物,用webpack把遊戲打包起來
lang: zh-Hant-TW
author: NoseGates
sidebar: false
---
# 08 - 用webpack打包phaser吧


## 前言

到[上一篇為止](/Phaser3/addScene)

遊戲都還是一般的index.html檔

js也都是直接寫在裡面

沒有經過混淆 + 壓縮

作為小品遊戲尚可接受

但閱讀文章的各位都是想成為**遊戲大師**的

讓我們用這一篇將遊戲升級到另一個層級

## webpack template

個人花時間找了一下github上的很多人寫的phaser template

官方有出[template](https://github.com/photonstorm/phaser3-project-template)

不過實際使用下來尚有些問題

以及官方似乎有段時間沒更新內容

最後決定使用[**template**](https://github.com/yandeu/phaser-project-template-es6)當作此文章主要使用webpack

會選用不外乎就是

~~幾乎都設定完成0配置~~

~~馬上獻出我的星星~~

事不宜遲馬上把原專案搬進來

## es6寫法的webpack專案
### 目錄結構
```
src
|-assets 放置遊戲所需圖片
|-scripts 放所有遊戲js
  |-scenes 放場景
  |-objects 放遊戲物件
  |-game.js 專案進入點
```

必須先了解es6場景的寫法

再來進行搬移的動作

### es6場景寫法

一般的場景基礎結構如下

> src/preloadScene.js
``` js
export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload () {
    
  }

  create () {
    
  }

  update () {

  }
}
```
應該一目瞭然

`super({ key: 'PreloadScene' })`對應此場景的key名稱

各`function`對應[先前說明](/Phaser3/loadfile)

### 註冊es6場景

將場景import進來後

寫進scene中

與之前內容大同小異

> game.js
``` js
import PreloadScene from './scenes/preloadScene'
const config = {
  //...
  scene: [PreloadScene, MainScene],
  //...
}
```

## 將原專案般進來

### ~~把assets放進來~~

### 修改遊戲config

把遊戲尺寸改成原本的大小

重力的部分調整一下

其餘部分尚缺一個遊戲重新開始的場景

等後面修改到那邊的時候再調整

變更如下

> src/game.js
``` js
const DEFAULT_WIDTH = 800
const DEFAULT_HEIGHT = 600

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#314157',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [PreloadScene, MainScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 300 }
    }
  }
}
```

::: tip 提示
完整檔案放在[github](https://github.com/connectshark/phaser-example)上

以下只列出需注意內容
:::

### 場景分工

| 場景名 | 功用 |
| :--------: | :--------: |
| PreloadScene     | 讀取遊戲所需素材,動畫     |
| MainScene     | 遊玩遊戲     |
| EndScene     | 呈現遊戲所得分數,重新開始按鈕 |

### PreloadScene

將**讀取素材**和**動畫設定**放到此場景

往後的場景皆可使用素材
``` js
preload() {
  this.load.image('sky', 'assets/sky.png');
  this.load.image('ground', 'assets/platform.png');
  this.load.image('star', 'assets/star.png');
  this.load.image('bomb', 'assets/bomb.png');
  this.load.spritesheet('dude', 
    'assets/dude.png',
    { frameWidth: 32, frameHeight: 48 }
  )
}

create() {
  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  })

  this.anims.create({
    key: 'turn',
    frames: [ { key: 'dude', frame: 4 } ],
    frameRate: 20
  })

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
  })
  this.scene.start('MainScene')
}
```

### MainScene

除了**動畫設定**的所有內容搬進create裡

update內容放進update

紀錄分數的變數原宣告在最外側

各場景皆可讀取

現在改為分數宣告在此場景中

其他場景(EndScene)需要時則傳遞給它即可

``` js {7}
export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' })
  }

  preload () {
    this.score = 0
  }

  create () {
    //...
  }
```
::: tip 場景間傳遞變數
`this.scene.start()`

接受第一個變數為場景名稱

第二個變數為傳遞的內容

可以在接收變數的場景中

`create()`和`init()`中接受變數

[詳細內容](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/#es6-class)
:::

::: warning 提醒
`hitBomb`和`collectStar`
放到此檔案中場景以外的位置即可
:::

### EndScene

原內容config需要另外import進來

`create`需接收主場景傳來的分數並且顯示出來

點擊restart時不用歸零分數(已改為傳遞進來)
``` js
create (score) {
  //...
}
```
## 大功告成

遊戲已經可以正常遊玩

此篇內容全部會放到[github](https://github.com/connectshark/phaser-example)上

感謝大家閱讀


<Vssue :title="$title" />