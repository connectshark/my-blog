---
title: phaser3中文化教學 - 04 - 新增玩家角色
lang: zh-Hant-TW
author: NoseGates
description: 將phaser3官網上英文的教程經過我的腦袋翻譯過後再寫出的教學文章-新增玩家角色
tags: 
  - phaser3
sidebar: false
---
# 04 - 新增玩家角色

平台設定好以後

為遊戲加入玩家的角色吧

## 加入角色
``` javascript
this.player = this.physics.add.sprite(100, 450, 'dude')
  .setBounce(0.2)
  .setCollideWorldBounds(true)
```
將原本`preload`裡的dude加進遊戲中*x:100, y:450*的位置

| sprite | x位置 | y位置 | key名稱 |
| :--------: | :--------: | :--------: | :---: |
| this.player     | 100 | 450    | 'dude' |

| setBounce | 反彈值(0 ~ 1) |
| :--------: | :--------: |
| this.player  | 0.2   |

| setCollideWorldBounds | 是否與遊戲世界邊框的碰撞 |
| :--------: | :--------: |
| this.player   | true  |


## 加入角色使用的動畫
``` javascript
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
```
| 動畫    | key | frames | frameRate | repeat    |
| :---: | :--------: | :--------: | :--------: | :---: |
| 說明 | 此動畫的id  | 此動畫的所有影格,格式是一個陣列 |播放影格的速度 | 此動畫需重複幾次, 設定 *-1*則不斷重複 |
| 範例中使用 | 'turn'     | [ { key: 'dude', frame: 4 } ] | 20 | 0(預設) |

::: tip frames
原本的*dude*是一張多影格的一張圖

![精靈圖](https://i.imgur.com/ouaPEYt.png)

前面在`preload`時有設定

`{ frameWidth: 32, frameHeight: 48 }`

就有告知說每個影格的寬和高

使用`this.anims.generateFrameNumbers`函數

可以設定只提取出該圖中的某段影格

`left`裡面就是提取出第0~第3個影格出來

如果打開console就會看到

``` javascript
[
  {key: 'dude', frame: 0},
  {key: 'dude', frame: 1},
  {key: 'dude', frame: 2},
  {key: 'dude', frame: 3}
]
```
:::

設定完基礎設定以後玩家的角色就會出現在遊戲中

如下圖


![角色掉進遊戲中](https://i.imgur.com/IiHrgT9.gif)


**咦~?**

是不是跟預想的不一樣

怎麼沒有掉到前面設定的平台上

這裡是因為還沒有設定玩家與平台的碰撞

所以沒掉到平台上

而前面有設定與遊戲世界邊框碰撞

所以會站在遊戲的底部

## 加入碰撞器

在`create`添加以下內容

``` javascript
this.physics.add.collider(this.player, this.platforms)
```

新增一個碰撞器

他可以偵測兩物理組是否發生碰撞

並且分離兩者和交換兩者的速度

## 下回預告

下回讓玩家動起來吧

<Vssue :title="$title" />