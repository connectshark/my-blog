---
title: 在Vue Cli 3 中設定環境變數
lang: zh-Hant-TW
author: NoseGates
description: 設定vue cli上可以更方便
---

# 在Vue Cli 3 中設定環境變數


自己在這部分摸很久所以寫一篇記錄一下經驗

> 適用在Vue Cli 3 以上版本設定使用
>
> 參考[官網](https://cli.vuejs.org/zh/guide/mode-and-env.html)

## 創建檔名為 **.env**的環境設定檔

參考官網的設置，在根目錄中配置 **.env** 檔

```sh
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

![設定檔](https://i.imgur.com/vt3CoBL.png)

::: tip
注意檔名就只有 **.env** 我自己這個地方卡最久
:::

## 變數名稱要使用 `VUE_APP_` 最為開頭

```sh
VUE_APP_TITLE=My App
```
::: warning
變數的開頭一定只能用`VUE_APP_`作為開頭，Vue Cli才會抓到變數
:::

接下來在`app.vue`中用簡單的配置引用環境變數

使用 `process.env.VUE_APP_TITLE` 的方式引用環境變數

```html
<template>
  <div id="app">
	{{title}}
  </div>
</template>
```
```javascript
data() {
	return {
		title:process.env.VUE_APP_TITLE
	}
},
```
## 實際的結果
```sh
npm run serve
```


或是使用 **Vue ui** 的這個按鈕
![vue cli畫面](https://i.imgur.com/lCaswb6.png)


::: tip
原先已經開`serve`的必須要重啟才有效
:::

網頁上正確顯示

![網頁上呈現的內容](https://i.imgur.com/r5pMtfz.png)

## 結尾

我自己本上在檔名上卡很久

後來才知道檔名直接 `.env` 即可

環境變數的設定已經節省很多也很方便

有遺漏的地方日後會繼續補充
