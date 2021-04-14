---
title: phaser3中文化教學 - 03 - 設定重力環境
lang: zh-Hant-TW
author: NoseGates
description: 將phaser3官網上英文的教程經過我的腦袋翻譯過後再寫出的教學文章-config設定和讀取遊戲素材
sidebar: false
---
#  03 - 設定重力環境 & 靜態物理組

上回我們把背景藍藍的天空放在讓遊戲載入

使用`this.add.image(400, 300, 'sky')`把藍天放進遊戲裡面

接下來要把各別的遊戲素材都放到遊戲內
## 設定重力環境
### 啟用物理系統
這個遊戲需要的重力環境還沒有設定

先回到`config`裡面修改成以下內容

``` javascript
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
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}
```
- physics
  - default: 添加一個物理系統`arcade`
  - arcade
    - gravity: 設定重力y方向300, 正為向下, 負為向上
    - debug: debug模式設定為false, 設為true可以看到遊戲碰撞時的邊框

設定完以後就可以在之後的程式碼裡面使用物理系統相關的內容

### 添加遊戲地面平台

在create新增以下內容
``` javascript
this.platforms = this.physics.add.staticGroup()
```
| this.physics.add.staticGroup() | 
| :--------: |
| 調用物理系統裡面的**靜態物理組**的功能, 這個群組裡的成員不會受前面設定的**重力**影響, 有發生碰撞時是不會移動的, 如同牆壁和地面一樣|

::: tip
這裡的`this`是指**這個遊戲場景**

我把變數設定在場景底下

**優點**是在這個場景的不同涵式中都可以調用到遊戲物件

依照個人習慣設定變數即可
:::

``` javascript
this.platforms.create(400, 568, 'ground').setScale(2).refreshBody()
```
直接使用**靜態物理組**的輔助功能`create`創建一個群組裡的成員

設定方式與先前載入圖片的一樣

|            `setScale()`            |   `refreshBody()`  |
|:----------------------------------:| :---: |
| 設定縮放大小這裡設為2倍大, 預設`1` | 告訴物理系統這個成員的大小有更動請更新    |

::: warning
如果沒有設定的話你的畫面一樣會是2倍大

但是靜態碰撞區還是維持原來的大小

如下圖
![refreshBody()](https://i.imgur.com/ShxmzaU.png)
:::

``` javascript
this.platforms.create(600, 400, 'ground')
this.platforms.create(50, 250, 'ground')
this.platforms.create(750, 220, 'ground')
```
添加其他平台

因為沒有設定大小縮放所以不用`refreshBody()`

經過上面內容後`create`會被修改成如下
``` javascript
function create () {
  this.add.image(400, 300, 'sky')

  this.platforms = this.physics.add.staticGroup()

  this.platforms.create(400, 568, 'ground').setScale(2).refreshBody()

  this.platforms.create(600, 400, 'ground')
  this.platforms.create(50, 250, 'ground')
  this.platforms.create(750, 220, 'ground')
}
```
目前遊戲畫面會長這樣

![目前遊戲畫面會長這樣](https://i.imgur.com/dC1MaKh.png)

**看起來有模有樣了呢**

## 下回預告

這回加入**物理系統**

下回把遊戲要用的角色加進來吧!!
