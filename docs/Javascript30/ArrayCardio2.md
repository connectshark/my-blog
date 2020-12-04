---
title: 07 - Array Cardio Day 2
author: NoseGates
lang: zh-Hant-TW
description: Js陣列方法運用第二次運用
---
# 07 - Array Cardio Day 2
[展示](https://connectshark.github.io/JavaScript30/07%20-%20Array%20Cardio%20Day%202/index-Chambers.html)
::: tip
本篇需按`F12`看console
:::
陣列的應用(some, every, find, findIndex)
## 內容概要
各種陣列操作方法
* some
* every
* find
* findIndex
## 重點整理
### `some()`:透過函式檢測陣列中的所有元素,任一個符合回`true`沒有則回`false`
``` javascript
const isAdult = people.some(man => (new Date()).getFullYear() - man.year >= 19)
console.log(isAdult) //true
```
### `every()`:透過函式檢測陣列中的所有元素,所有皆符合回`true`沒有則回`false`
``` javascript
const idEveryAdult = people.every(man => (new Date()).getFullYear() - man.year >= 19)
console.log(idEveryAdult) //false
```
這兩個陣列算是比較少運用所以加以記錄

另外兩個陣列`find()`和`findIndex()`有特別文章記錄

可再複習
| `find()` | `findIndex()` |
| :--------: | :--------: |
| [文章](/teach/arrayfind) | [文章](/teach/arrayfindIndex) |