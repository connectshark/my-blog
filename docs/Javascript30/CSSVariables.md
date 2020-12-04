---
title: 03 - CSS Variables
author: NoseGates
lang: zh-Hant-TW
description: css變數設定與使用js控制練習
---
# 03 - CSS Variables

[展示](https://connectshark.github.io/JavaScript30/03%20-%20CSS%20Variables/index-Chambers.html)

## 內容概要
![內容展示](https://i.imgur.com/XrJjHTO.gif)

使用Javascript控制css裡的變數
## 重點整理
* css變數寫法
* css變數使用
* dataset用法
* setProperty用法
### css變數寫法
個人從來沒用過css變數

查了資料才知道目前主流瀏覽器皆有支援css變數寫法

這邊做紀錄

1. 變數需寫在html下或是:root下
::: details
![html===:root](https://i.imgur.com/QOzjWSc.png)
:::
2. 變數key值前需兩條dash

呈現如下
``` css
:root{
  --base:#ffa;
  --spacing: 10px;
  --blur: 10px;
}
```
### css變數使用

在需要使用的地方用var(key值)

使用如下
``` css
.hl{
  color: var(--base);
}
```
### dataset用法
[dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset)說明文件

實際使用方式在html tag中加入`data-*`的自定義資料

在function內可以用`this.dataset.*`訪問資料
### setProperty用法

是一種設定css的方式

個人覺得比較偏向function式

與 `stye.propertyname = value` 一樣