---
title: 在v-for點擊加入class的技巧
lang: zh-Hant-TW
author: NoseGates
description: vfor點擊加入active的情境非常多情況會遇到,本文章教學小撇步給各位
---
# 在v-for點擊加入class的技巧
在很多專案中總是會遇到一種狀況
>按鈕是用vfor跑出來的
>
>想要將使用者點擊的按鈕加入`active`的class名稱
>
>讓該按鈕有不同的樣式以顯示目前位置

## 基本配置
先快速簡單配置一下範例

``` vue {35}
<template>
  <ul class="vforSample">
    <li v-for="(item, index) in nav" :key="index"
    class="item">{{item}}</li>
  </ul>
</template>
<script>
export default {
  name: 'vforSample',
  data () {
    return {
      nav: ['新聞', '股市', '拍賣', '購物中心']
    }
  }
}
</script>
<style lang="scss" scoped>
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
.vforSample{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
}
.item{
  background-color: #ccc;
  border-radius: 3px;
  padding: 5px;
  cursor: pointer;
}
.active{
  background-color: #fa8;
  color: #fff;
}
</style>
```
在以上的簡單配置裡面按鈕會橫向排列

`active`控制按鈕被選擇時的樣式

簡單的模擬很多網站裡都有的nav bar的排列方式

如下圖:

![配置圖](https://i.imgur.com/BktYpAs.png)


## 思考方向

**使用一個data紀錄目前被選中按鈕的index**

``` vue {7}
<script>
export default {
  name: 'vforSample',
  data () {
    return {
      nav: ['新聞', '股市', '拍賣', '購物中心'],
      activeIndex: 0
    }
  }
}
</script>
```
**使相對應的按鈕加入active**
``` vue {5}
<template>
  <ul class="vforSample">
    <li v-for="(item, index) in nav" :key="index"
    class="item"
    :class="{active : index === activeIndex}">{{item}}</li>
  </ul>
</template>
```
目前的按鈕長這樣
![加入active後的按鈕](https://i.imgur.com/Aq5h0uW.png)

最後一步要在點擊的時候把active的index值換掉
``` vue {6}
<template>
  <ul class="vforSample">
    <li v-for="(item, index) in nav" :key="index"
    class="item"
    :class="{active : index === activeIndex}"
    @click="activeIndex = index">{{item}}</li>
  </ul>
</template>
```
## 可操作的完成品

::: tip
試用看看
:::

<vforSample />

## 結語

對於一些小專案來說效果很好

也不會多用很多function

謝謝大家