---
title: 在Vue中製作搜尋highlight[part1]
lang: zh-Hant-TW
author: NoseGates
description: 在Vue中製作搜尋highlight 實作系列第一篇
---
# 在Vue中製作搜尋highlight[part1]

> 製作過程講得好像太細所以分幾part來說明

[[toc]]

先來看一下完成的效果

---

![製作效果](https://i.imgur.com/ZBb3HQS.gif)

---

## 想要的效果
1. 在搜尋的時候需要根據關鍵字篩選出具有關鍵字的項目
2. 符合的關鍵字要上色且不改變原本大小寫

## 刻一個基礎的雛形
``` html
<template>
  <div id="search-word">
    <input type="text"
      v-model="search"
      class="search"
      maxlength="20"
      placeholder="要搜尋的評論">
    <ul class="comments">
      <li class="comment" v-for="item in comments" :key="item.id">
        <span class="title">{{item.text}}</span>
        <span class="comment-id">{{item.id}}</span>
      </li>
    </ul>
  </div>
</template>
```
一開始的資料設定如下
``` js
data () {
  return {
    search: '',
    comments : [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ]
  }
}
```
> css的部分不是這次的重點先跳過

初始化的狀態長這樣

![目前大概長這樣](https://i.imgur.com/YVLUQqM.png)
## 用filter()將資料篩選出來!!!
這裡要用一個computed來將比對資料和輸入的字是否相符

將相符合的項目濾出

在這裡使用正規表達式作為判斷
``` js
computed: {
  matchWord () {
    let regWord = new RegExp(this.search, 'gi')
    return this.comments.filter(item => item.text.match(regWord) || item.id.toString().match(regWord))
  }
}
```
::: warning
原始資料的id是**數字型別**:point_left:
:::

接下來將修改原先一下template的內容
``` html {1}
<li class="comment" v-for="item in matchWord" :key="item.id">
  <span class="title">{{item.text}}</span>
  <span class="comment-id">{{item.id}}</span>
</li>
```
## 將搜尋字標記出來
透過function將搜尋關鍵字加上一個上色的class名稱
``` js
methods: {
  highlight (text) {
    let regWord = new RegExp(this.search, 'gi')
    return text.replace(regWord, `<span class="hl">${this.search}</span>`)
  }
}
```
接著修改template的內容
``` html {2-3}
<li class="comment" v-for="(item, index) in matchWord" :key="item.id">
  <span class="title" v-html="highlight(item.text)"></span>
  <span class="comment-id" v-html="highlight(item.id.toString())"></span>
</li>
```
到這裡就可以看到畫面上可以根據自己的關鍵字上色

所以我們算是完工拉~!!!! (????

**修但幾勒**

到現在還會有一些小問題
## 尚餘的問題
* 原本的內容上色後會把大小寫替換掉
* 沒有輸入字的時候會穿插很多空的`<span class="hl"></span>`在文字中間

> 中文的話比較沒問題
>
> 但英文的處理比較複雜
>
> 留到下一part再繼續說明

## 成品嘗鮮
> 先把完成品放這

<searchWord/>