---
title: 陣列運用筆記 findIndex()
lang: zh-Hant-TW
author: NoseGates
description: 透過紀錄的方式讓自己更加深刻記得並且熟悉陣列的運用
---
# 陣列運用筆記 `findIndex()`

> 繼上一篇 [陣列運用筆記 `find()`](/teach/arrayfind)同一系列

說到`find()`一定不可或缺的就是同家族的`findIndex()`

## 方法介紹

> findIndex() 方法將依據提供的測試函式，尋找陣列中符合的元素，並返回其 index（索引）。如果沒有符合的對象，將返回 -1 。[mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

沿用上一個範例
``` javascript
const names = ['Bob', 'Ivy', 'Mike', 'John']
const answer = names.findIndex(item => item === `Ivy`)
console.log(answer) // 1
```
和`find()`一樣可以在全是物件的陣列中找到符合條件的第一個
## 方法運用
### 比較多會使用的狀況是在陣列中移除指定項目
::: tip 情境
在陣列中移除`age: 65`的項目
:::
作法會先檢查該項的索引值再進行移除
``` javascript
const people = [
  {
    age: 20,
    name: 'Bob'
  },
  {
    age: 12,
    name: 'Ivy'
  },
  {
    age: 65,
    name: 'Mike'
  },
  {
    age: 12,
    name: 'John'
  }
]
const targetIndex = people.findIndex(item => item.age === 65)
console.log(targetIndex) //2
const newArray = [
	...people.slice(0, targetIndex),
	...people.slice(targetIndex+1)
]
console.log(newArray)
//0: {age: 20, name: "Bob"} 1: {age: 12, name: "Ivy"} 2: {age: 12, name: "John"}
```
### 和`indexOf()`比較
概念和大家常用的`indexOf()`有些類似

都是用來比對陣列的元素並回傳索引值

若沒找到則回傳-1

不同之處是`indexOf()`找的是指定元素

而`findIndexOf()`則是可以找指定物件或是使用`function`來進行比對

這裡延續上面的例子作為範例
::: warning 範例
兩種方法在物件陣列中尋找元素的差異 `age: 65`
:::
`indexOf()`
``` javascript
const correctIndex1 = people.map(man => man.age).indexOf(65)
```
`findIndex()`
``` javascript
const correctIndex2 = people.findIndex(man => man.age === 65)
```
最後整理一個簡單的表格
| 方法名稱 | `indexOf()` | `findIndex()` |
| :--------: | :--------: | :--------: |
| 找到指定元素 | 回傳索引值 | 回傳索引值 |
| 未找到指定元素 | 回傳-1  | 回傳-1  |
| 物件陣列 | 搭配`map()`使用  |撰寫`function` |

## 結語
在個人使用上`indexOf()`比較會用來確認陣列是否有值的情況

而`findIndex()`則是用在對陣列操作