---
title: phaser3中文化教學 - 10 - 用Vue打包phaser吧!
lang: zh-Hant-TW
author: NoseGates
description: 將phaser3官網上英文的教程經過我的腦袋翻譯過後再寫出的教學文章
date: 2020/09/06
sidebar: false
---
# 用Vue專案打包phaser吧

在先前的文章中有提到

> [如何在Webpack中打包phaser](/phaser3/phaserInWebpack)

有的時候我們的遊戲只是大專案中的一部分
甚至是某一頁的內容

一個小品遊戲能夠增進使用者對網站的好感(?

那就在vue專案中把phaser遊戲打包進去吧
甚至把phaser製作成一個元件能夠有更好的運用空間

本篇文章會將vue專案中打包phaser的一些問題手把手排除

那就馬上開始吧~
## 包進Vue
### 初始化一個vue專案
::: tip 提醒
這裡只介紹最基礎的設定
若專案有其他需要可以自己多安裝套件包
:::

使用`vue cli`起一個vue的專案



> 目前版本為`2.6.11`

在專案中安裝phaser

```js
npm i phaser
```

到這裡該準備的套件包都準備好了


### 建立`phaser`

新增一個資料夾並且新增一個`index.js`內容如下

> src/game/index.js
``` js
import Phaser from 'phaser'
import config from './config'
export default class Game extends Phaser.Game {
  constructor () {
    super(config)
  }
}
```

此`index.js`檔用途是給vue專案引入`new Game()`使用

相當於在先前遊戲中使用的`new Phaser.Game(config)`一樣

config的內容還有遊戲的檔案切分皆可沿用[用webpack打包phaser](/phaser3/phaserInWebpack)的寫法和用法

以下為大略內容配置
> src/game
``` 
game
|
|- assets/ 遊戲素材
|
|- object/ 遊戲物件
|
|- scenes/ 遊戲場景
|
|- config.js 遊戲設定檔
|
|- index.js 初始化遊戲檔
```

簡單來說有關於phaser的內容皆放在同一個資料夾裡即可
方便管理

::: warning 注意
遊戲的素材尤其是圖片

不建議放入`src/assets`中

因vue在打包過程中會壓縮圖片內容
會造成遊戲內讀取的檔名與生產版本不符
還有圖片畫質不夠清晰等等問題
:::

### 建立一個屬於phaser的原件
> src/components/game.vue
``` vue
<template>
  <div id="game">
  </div>
</template>

<script>
import Game from '../game'
export default {
  name: 'game',
  mounted () {
    window.Phaser = new Game()
  },
  destroyed () {
    window.Phaser.destroy()
  }
}
</script>
```

將剛剛建好的`index.js`引入進來

`#game`的div可以作為phaser的父層方便定位使用

::: warning window.Phaser
在較複雜的遊戲中

有時會需要與外部元件溝通或是`websocket`資料傳遞

若這時將變數儲存在該元件內的data會造成日後傳遞困難

故作者這裡都把`phaser`的變數存在`window`底下方便任位置的資料傳遞
:::

做到這邊只要在`App.vue`中引入並放在畫面上就完成了嗎?

**不還差臨門一腳**

接下來是作者先前卡關甚久的地方

## 遇到的問題

### 遊戲圖片讀不到

初始化遊戲
把該讀取的素材放進去開始製作的時候就會發現

**怎麼連一個圖都讀不到**

作者這裡嘗試了很多方式

其中一種有解的方法就是把遊戲素材資料夾放在根目錄的`public`中
遊戲可以正常讀取
但是此作法vue官方不推薦
而且也不是一個長久之計

後來花了很多時間研究才有心得

原來vue打包的時候根本沒把`game`資料夾底下的`assets`打包進去

**既然沒打包 那就我來打包**

### 設定複製遊戲素材資料夾

在根目錄底下建`vue.config.js`

並且加入以下內容

> vue.config.js
``` js
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        { from: 'src/game/assets', to: 'assets' }
      ])
    ]
  }
}
```

這裡使用webpack複製檔案的插件
直接設定要複製的檔案位置和目的地位置即可

使用此方式的**優點**在於

我們的遊戲素材不會被壓縮而導致遊戲畫面模糊

也不用在webpack中設定很多針對`phaser`略過的內容

遊戲相關的內容可以在相同資料夾下易於管理

## 大功告成

在前端框架中引用`phaser`利大於弊

甚至能讓`phaser`使用更好的資料管理系統

此篇的內容就先不上github

有設定上困難的可以tg訊息給我一起討論

---

<Vssue :title="$title" />