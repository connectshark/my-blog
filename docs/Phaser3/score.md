---
title: phaser3中文化教學 - 06 - 統計得分和增加難度吧~!
lang: zh-Hant-TW
author: NoseGates
description: 將phaser3官網上英文的教程經過我的腦袋翻譯過後再寫出的教學文章-統計得分和增加難度吧~!
sidebar: false
---

# 06 - 統計得分和增加難度吧~!

在上一篇文章中

我們加入**星星**還有設定星星與玩家的碰撞

這回要新增一個記分板

還有新增一點障礙

讓遊戲更豐富

## 記分板

在create添加以下內容

``` javascript
this.score = 0
this.scoreText = this.add.text(16, 16, 'Score: 0', {
  color: '#fff',
  resolution: 2,
  fontFamily: 'Tahoma'
})
```
- 使用`this.score`紀錄目前分數,初始為0分

| text | x位置 | y位置 | 文字內容 | 文字的config |
| :----: | :---: | :---: | :---: | :---: |
| this.scoreText | 16 | 16 | 'Score: 0' | 可使用的style |

接下來在`collectStar`添加以下內容
``` javascript
this.score += 10
this.scoreText.setText(`Score: ${this.score}`)
```
> 文字可以使用setText更改文字物件的內容

到這裡已經有吃星星家分數的效果

![吃星星家分數的效果](https://i.imgur.com/8osVBAQ.png)

接下來增加遊戲難易度和遊玩體驗

## 炸彈

在`create`添加以下內容

``` javascript
this.bombs = this.physics.add.group()

this.physics.add.collider(this.bombs, this.platforms)

this.physics.add.collider(this.player, this.bombs, hitBomb, null, this)
```

- 增加一個`this.bombs`的群組
- 設定炸彈與平台的碰撞
- 設定炸彈與玩家的碰撞


添加一個全域變數`gameOver`
``` javascript
let gameOver = false
```
用來通知其他地方遊戲已經結束


添加一個處理玩家與炸彈碰撞的處理涵式`hitBomb`
``` javascript
function hitBomb (player, bomb){
  this.physics.pause()

  player.setTint(0xff0000)

  player.anims.play('turn')

  gameOver = true
}
```
- 將重力系統暫停
- 玩家顏色變得怪怪的
- 遊戲結束

在`update`裡開頭增加以下內容

``` javascript
update () {
  if (gameOver) return
  
  
  if (this.cursors.left.isDown) {
  //...
}
```

最後在`collectStar`添加以下內容
``` javascript
if (this.stars.countActive(true) === 0){
  this.stars.children.iterate(function (child) {

    child.enableBody(true, child.x, 0, true, true);

  })

  const x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

  const bomb = this.bombs.create(x, 16, 'bomb');
  bomb.setBounce(1);
  bomb.setCollideWorldBounds(true);
  bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);

}
```
- 在星星收集完以後將星星重新加回

| enableBody | 是否重置 | x位置   |  y位置 | 是否加入物理系統 | 是否顯示 |
| :------: | :-------: | :-----: | :---: | :-----: | :----: |
| child      | true     | child.x |   child.y     |  true  | true |

- 加入炸彈
  - 設定碰撞1(完全反彈)
  - 設定與世界邊框碰撞
  - 設定速度

## 完成第一款自己的遊戲拉!!
![第一款自己的遊戲](https://i.imgur.com/R11T4Le.png)

儲存以後自己玩玩看自己的遊戲吧

從一開始只有綠綠的平台

到後來吃星星增加分數有了目標

有了炸彈的干擾增加不少難度

小品遊戲就這麼完成拉

恭喜!!
