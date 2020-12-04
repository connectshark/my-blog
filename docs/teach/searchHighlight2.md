---
title: 在Vue中製作搜尋highlight[part2]
lang: zh-Hant-TW
author: NoseGates
description: 在Vue中製作搜尋highlight 實作系列第二篇
---
# 在Vue中製作搜尋highlight[part2]
## 上次說到未完成的問題
* 原本的內容上色後會把大小寫替換掉
* 沒有輸入字的時候會穿插很多空的`<span class="hl"></span>`在文字中間

### 解決大小寫問題
在自己的class`.comment`加入以下css
``` css
text-transform: capitalize;
```
::: tip
css [capitalize](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
:::
能夠讓英文轉成字首大小

> 但還是會有點小問題
>
> 該狀況之前我也沒遇過

![有問題的狀態](https://i.imgur.com/db4iw7e.png)

被`<span>`標記起來的部分會自成一局

該字首一樣會被大寫起來

看起來實在是**不太舒服**

嘗試一些作法以後

**將整個內容都用`v-html`渲染的話就能夠排除**

於是乎一氣之下:rage: (?

把原本的內容做以下修改
``` html {2}
<li class="comment" v-for="item in matchWord" :key="item.id">
  <div class="content" v-html="highlight(item.text,item.id.toString())"></div>
</li>
```
> 多用一個div將輸出內容包住
>
> 把會被標記的部分都用`v-html`呈現

接著將原先的function修改如下
``` js
highlight (word, id) {
  let regWord = new RegExp(this.search, 'gi')
  let titleWord = word.replace(regWord, `<span class="hl">${this.search}</span>`)
  let idWord = id.replace(regWord, `<span class="hl">${this.search}</span>`)
  return `<span class="title">${word}</span><span class="comment-id">${id}</span>`
}
```
> 原本要跑兩次的內容改到同一個裡面

![呈現的效果](https://i.imgur.com/Tt09gEN.png)

看起來很不錯:sunglasses:

### 去掉空白的`<span>`

做到這邊大致上完成了

但如果你現在打開`F12`

你先輸入搜尋字再把搜尋的字刪除

就會看到每個字中間穿插很多空的`<span>`

看在我的眼中就有點**不舒服**

就來修改一下吧

在原本的function裡改一下return的內容吧

``` js {5}
highlight (word, id) {
  let regWord = new RegExp(this.search, 'gi')
  let titleWord = word.replace(regWord, `<span class="hl">${this.search}</span>`)
  let idWord = id.replace(regWord, `<span class="hl">${this.search}</span>`)
  return this.search === '' ? `<span class="title">${word}</span><span class="comment-id">${id}</span>` : `<span class="title">${titleWord}</span><span class="comment-id">${idWord}</span>`
}
```
> 若現在關鍵字是空值則將原先的內容塞回去

## 製作完成
這個小實作可能有很多可以再修改的地方

之後有時間再來一一細修

### 和上周一樣的成品預覽時間

---

<searchWord/>

