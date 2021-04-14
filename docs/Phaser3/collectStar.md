---
title: phaser3中文化教學 - 05 - 鍵盤控制玩家 & 收集星星
lang: zh-Hant-TW
author: NoseGates
description: 將phaser3官網上英文的教程經過我的腦袋翻譯過後再寫出的教學文章-鍵盤控制玩家 & 收集星星
sidebar: false
---
# 05 - 鍵盤控制玩家去收集星星吧

上回將玩家要使用的角色加進遊戲後

接下來就是要讓角色動起來

## 新增一個鍵盤控制器

`create`添加以下內容

``` javascript
this.cursors = this.input.keyboard.createCursorKeys()
```

接下來在`update`裡面添加下列內容

``` javascript
if (this.cursors.left.isDown) {
  this.player.setVelocityX(-160)

  this.player.anims.play('left', true)
} else if (this.cursors.right.isDown) {
  this.player.setVelocityX(160)

  this.player.anims.play('right', true)
} else {
  this.player.setVelocityX(0)

  this.player.anims.play('turn')
}
if (this.cursors.up.isDown && this.player.body.touching.down) {
  this.player.setVelocityY(-330)
}
```

### 鍵盤控制器`this.input.keyboard.createCursorKeys()`

鍵盤上的上下左右對應控制器中的`up` `down` `left` `right`

用`isDown`知道是否正被按下

::: warning 注意

寫在`update`裡的內容

會依據畫面更新次數run相同次

如果現在畫面fps有60

那這個`update`一秒會跑60次

> 若不是需要一直監控的內容
> 可不寫在此以節省效能
:::

### 給予速度`setVelocity()`

根據按下的按鍵給予玩家對應方向的速度

::: warning 注意
記得要設定*未按下*按鍵時給予速度0

不然玩家影格會維持在最後狀態

速度則是因為沒有清空

玩家會有持續滑動的現象
:::

## 加入星星

進度到這裡

玩家已經可以正常移動拉

接下來放進星星

在`create`添加以下內容

``` javascript
this.stars = this.physics.add.group({
  key: 'star',
  repeat: 11,
  setXY: { x: 12, y: 0, stepX: 70 }
})

this.stars.children.iterate(function (child) {
  child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
})

this.physics.add.collider(this.stars, this.platforms)
```

### 星星群組`this.physics.add.grupd`

加入一個動態物理組的群組,並且使用裡面的函數可以快速新增相同性質的對象

- `key`: 要新增對象的`key`名稱,這裡使用星星圖
- `repeat`: 要重複次數,預設會新增一個,重複11次則總共是12個
- `setXY`: 每個新增的對象初始在畫面中的位置,這裡第一個會在*x:12, y:0*,隨後的每一個會在*x+70*的位置

### 使用群組裡的涵式將每個對象設定y方向的反彈

- `setBounceY`: 設定反彈值,0為不反彈,1為完全反彈
- `Phaser.Math.FloatBetween`: phaser的涵式,可取中兩數中間的隨機值

- `this.physics.add.collider`: 加入碰撞器,檢測與地面的碰撞

## 讓玩家開始撿星星

到這裡已經把星星放進遊戲中

如下圖

![玩家撿星星](https://i.imgur.com/nqSa0th.png)

接下來就是撿星星的部分



在`create`添加以下內容

``` javascript
this.physics.add.overlap(this.player, this.stars, collectStar, null, this)
```
- `this.physics.add.overlap`: 檢測兩物理組是否重疊,並且設定執行的`function`


並且新增一個負責處理兩個重疊的`collectStar`

``` javascript
function collectStar (player, star) {
  star.disableBody(true, true)
}
```

| disableBody | 是否取消與此物理組的碰撞 | 是否隱藏 |
| :--------: | :--------: | :--------: |
| star     | true     | true     |

這裡的動作有點像是把星星關掉

效果上就會有玩家收集星星的感覺