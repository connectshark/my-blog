---
title: phaser3中文化教學 - 02 - 讀取遊戲所需的素材吧~!
lang: zh-Hant-TW
author: NoseGates
description: 將phaser3官網上英文的教程經過我的腦袋翻譯過後再寫出的教學文章-config設定和讀取遊戲素材
sidebar: false
---
# 讀取遊戲所需的素材吧~!
繼上一篇以後初始化後正式將遊戲建起來

這裡先來解說config的內容
## config 設定
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
### 必要屬性
* `type`：設定遊戲渲染的環境,可以使用`Phaser.CANVAS`,`Phaser.WEBGL` , `Phaser.AUTO`,官方推薦使用`Phaser.AUTO`，`phaser`會自動嘗試使用者的渲染環境能否使用`WEBGL`,如果不能則會自行更換成`CANVAS`
* `width`:生成的畫布尺寸,寬度設定
* `height`:生成的畫布尺寸,高度設定
* `scene`:遊戲主要場景的設定,往後會在多加描述

### 額外推薦配置屬性

* `backgroundColor`: 生成遊戲時初始背景顏色設定, 預設`#000`
* `parent`: 設定畫布父層id名稱,有設定時畫布會生成在該id名稱元素裡面
* `disableContextMenu`: `true`禁止使用滑鼠右鍵,預設`false`
* `scale.mode`:設定`Phaser.Scale.FIT`可以將畫布設定成像`background-size: contain`一樣將畫布完整縮放在可視範圍內,預設`Phaser.Scale.NONE`不調整縮放
* `scale.autoCenter`:設定`Phaser.Scale.CENTER_BOTH`,可將畫布維持在畫面正中央,預設`Phaser.Scale.NO_CENTER`不調整位置

其他更多的配置可以在[這裡查看](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/game/)


## `Phaser`生命週期
每個遊戲場景都會有三支不同的涵式來控制該場景所有需要的內容
@flowstart
st=>start: 初始化遊戲
load=>operation: preload
create=>operation: create
e=>inputoutput: update

st->load->create->e->e
@flowend
> update循環

### 各涵式內容

``` javascript
function preload () {}
```
主要負責預先載入此場景中所需的遊戲素材,例如圖片,音效,影片,文字,plugin等等
``` javascript
function create () {}
```
負責將遊戲素材放置於畫面中,註冊事件,設定動畫效果等等

``` javascript
function update () {}
```
以1秒60次預設的頻率執行涵式內容

需要經常刷新的動作可以設定在裡面

稍微瞭解以後就可以開始製作第一個遊戲囉

## 在preload裡面添加下列內容
``` javascript
function preload () {
  this.load.image('sky', 'assets/sky.png');
  this.load.image('ground', 'assets/platform.png');
  this.load.image('star', 'assets/star.png');
  this.load.image('bomb', 'assets/bomb.png');
  this.load.spritesheet('dude', 
    'assets/dude.png',
    { frameWidth: 32, frameHeight: 48 }
  )
}
```

其中`this.load.image`應該很好懂,就是告訴phaser讀的是哪種素材


| load | 素材id | 來源 | 
| :---: | :--------: | :--------: |
| 範例內容 | 'sky' | 'assets/sky.png' |


接著在`create`涵式中添加以下內容
``` javascript
this.add.image(400, 300, 'sky')
```
|  image | x位置   | y位置 | key名稱,對應`preload`裡面的`id` |
| :---: | :---: | :--------: | :--------: |
|  範例內容   | 400 | 300   | 'sky'  |

如此一來你就可以在畫面中看到藍藍的天空

![藍天白雲](https://i.imgur.com/6TNPmPL.png)

::: danger 注意
預設的中心點是每個圖片的正中心點

圖片有長有短如果覺得不好配置

可以修改成

`this.add.image(0, 0, 'sky').setOrigin(0, 0)`

將中心點定在左上角
:::

## 下回預告

這回主要解說大部分設定內容還有功用

下回再來把遊戲素材全部放在畫面上吧!!

<Vssue :title="$title" />