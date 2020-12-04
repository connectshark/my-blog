---
title: 04 - Array Cardio Day 1
author: NoseGates
lang: zh-Hant-TW
description: Js陣列方法運用
---
# 04 - Array Cardio Day 1
[展示](https://connectshark.github.io/JavaScript30/04%20-%20Array%20Cardio%20Day%201/index-Chambers.html)
::: tip
本篇需按`F12`看console
:::
陣列的應用(filter, map, sort, reduce)
## 內容概要
各種陣列操作方法
* filter
* map
* sort
* reduce
## 重點整理

### `filter()`:用來過濾陣列中的條件,回傳一個新陣列
``` javascript
const youngs = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)
```
### `map()`:依據條件重組陣列,回傳一個新陣列
``` javascript
const peopleName = inventors.map(obj => `${obj.first} ${obj.last}`)
```
### `sort()`:重新排序並回傳此陣列
``` javascript
const birthdateArray = inventors.sort((a, b) => a.year < b.year ? 1 : -1)
```
>回傳1(大於0)則a在b前面
>回傳-1(小於0)則a在b後面

### `reduce()`:累加器和回呼函式回傳簡化後的結果值
``` javascript
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const dataList = data.reduce((sum, item) => {
  if (!sum[item]) sum[item] = 0
  sum[item]++
  return sum
}, {})
```
> 需設有初始值