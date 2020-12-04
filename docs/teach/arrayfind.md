---
title: 陣列運用筆記 find()
lang: zh-Hant-TW
author: NoseGates
description: 透過紀錄的方式讓自己更加深刻記得並且熟悉陣列的運用
---
# 陣列運用筆記 `find()`

近期的運用es6的`find()`覺得非常好用

寫一篇文章作為學習紀錄

## 方法介紹
> find() 方法會回傳第一個符合條件的元素,否則回傳undefined [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

## 方法運用
簡單運用範例
``` javascript
const names = ['Bob', 'Ivy', 'Mike', 'John']
const answer = names.find(item => item === `Ivy`)
console.log(answer) // Ivy
```

而我覺得更實用的地方是`find()`也可以在全是物件的陣列中找出符合條件的元素

例如
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
const man = people.find(human => human.age === 12)
console.log(man)//{age: 12, name: "Ivy"}
```
`find()`能找出符合條件的元素而且不影響原陣列
::: danger
若陣列中有兩個符合條件元素則回傳第一個
:::

## 結語
`find()`是JS原生的陣列方法

若熟悉上手以後

在資料量大的陣列中可以被妥善運用