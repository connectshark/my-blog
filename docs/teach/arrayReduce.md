---
title: 陣列運用筆記 reduce()
lang: zh-Hant-TW
author: NoseGates
description: 透過紀錄的方式讓自己更加深刻記得並且熟悉陣列的運用
---
# 陣列運用筆記 `reduce()`

對我來說`reduce()`是一個挺陌生的陣列方法

但其實運用過幾次後覺得非常好用

於是為了更加熟悉以此紀錄

## 方法介紹

> `reduce()`是一個累加器,會將陣列每個元素照順序傳入function內執行一次
>
> 使用上需注意傳入的第一個參數是**累加器**
>
> 第二個參數才是**當前元素**


## 方法運用

### 使用情境

#### 將color陣列所有數字加總
``` js
const color = [20, 50, 60, 70, 10, 60, 80, 20]

const sum = color.reduce((sum, item) => {
  return sum + item
}, 0) // 設定累加器初始值

concole.log(sum)   // 370
```

::: tip 提示
若沒設定初始值則會把第一個元素當作初始值

但若處理非單純數字加總的情境會容易出錯
:::

### 應用情境

#### 計算相同元素數量並以物件鍵值顯示

``` js
const toy = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ]

const counterToy = toy.reduce((sum, item) => {
  if (!sum[item]) sum[item] = 0 // 沒有這個鍵值則設定一個
  sum[item]++  // 計次+1
  return sum
}, {}) // 設定初始值為空object

console.log(counterToy) // { "car": 5, "truck": 3, "bike": 2, "walk": 2, "van": 2 }
```

## 結語
熟悉這些方法以後

或許之後就能自己寫出一些Ramda裡面的好用涵式

`reduce()`在[MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)有更多詳細應用