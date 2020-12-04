---
title: 06 - Type Ahead
author: NoseGates
lang: zh-Hant-TW
description: 從遠方獲取資料及輸入框內及時顯示關聯字提示效果 fetch api和正規表達示應用
---
# 06 - Type Ahead
[展示](https://connectshark.github.io/JavaScript30/06%20-%20Type%20Ahead/index-Chambers.html)

![fetchData](https://i.imgur.com/3dVcN6B.gif)

從遠方獲取資料及輸入框內及時顯示關聯字提示效果
## 內容概要
* fetch()
* 正規表達示
* toLocaleString()
## 重點整理
### fetch
[fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)提供一個全局的非同步工具

`fetch()`會回傳一個**promise物件**

使用`.then()`作為後續處理的接續方式

> 範例中使用`fetch()`作為請求資料的方式
``` javascript
let cities = []
fetch(endpoint)
  .then(res => res.json())
  .then(data => cities.push(...data))
```

::: tip 比較
`fetch()`相比以前的`XMLHttpRequest()`

可讀性較高

直接呼叫即可

像是日常會用到的**發送**和**接收**資料都可以使用
:::
### 正規表達示
這部分個人比較少使用

大多是遇到時才[查表](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Regular_Expressions)完成

``` javascript
let regWord = new RegExp(typeWord, 'gi')
```
> g -> 全域搜尋
>
> i -> 無視大小寫

### [toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
範例中有個部分是將數字換成每三位加逗點的形式
``` javascript
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
```

原本是要使用正規表達示完成

但在這裡改寫一下

``` javascript
function numberWithCommas(x) {
  // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parseInt(x).toLocaleString()
}
```
::: danger 特別注意
toLocaleString()需要數字型別
:::