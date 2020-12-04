---
title: VSCODE 設定個人Snippets
lang: zh-Hant-TW
author: NoseGates
description: VSCODE IDE 上設定客製的snippets 讓操作更得心應手
---

# VSCODE 設定個人Snippets
目前vscode上已經有許多好用的code snippets的套件

但是不是有曾經覺得snippets總是會多一個`;`

或總是會多一個換行符號~~還是只有我這麼覺得~~

想自己設定但又不知到怎麼辦

**這時候就是設定個人的snippets時間**

讓我們手把手來設定看看吧

## 手把手設定文件
::: tip
這裡使用`.javascript`檔作示範
:::

### **打開你的vscode**
![打開vscode吧](https://i.imgur.com/EfQfGuI.png)
### 點擊使用者片段設定`User snippets`
![點擊使用者片段設定](https://i.imgur.com/YqTbo1W.png)

### 選擇你要設定片段的語言
![選擇你要設定片段的副檔名](https://i.imgur.com/u6QEMLA.png)

在這裡選擇`javascript`

會自動開啟一個json檔
![選擇javascript](https://i.imgur.com/6si1Sgr.png)


### 觀看 ~~刪除~~ 範例文字
``` json
{
	// Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
}
```
**為各位翻譯**
``` json {2,3,4,7}
{
  "Print to console": {
    "prefix": "log",
    "body": [
      "console.log('$1')"
    ],
    "description": "Log output to console"
  }
}
```
`Print to console`:此片段的標題可以自訂

`prefix`:此片段的快捷鍵

`body`:選取此片段會出現的內容,主要的片段都設定在這裡

`description`:此片段的描述,可多加說明,會出現在片段的後方

### 存檔 測試
成功顯示
![測試](https://i.imgur.com/vUCKFin.png)

## 太好用的新增第二個吧
設定以後成功以後自然會想客製更多自己的片段

但這裡要多注意

若要新增其他片段請在**原檔案**裡繼續編輯
``` json {9-18}
{
  "Print to console": {
    "prefix": "log",
    "body": [
      "console.log('$1')"
    ],
    "description": "Log output to console"
  }
},
{
  "Print to console": {
    "prefix": "log",
    "body": [
      "console.log('$1')"
    ],
    "description": "Log output to console"
  }
}
```
用逗點的方式接續在下面即可

## 後續

其實很多好用的snippet都是其他人自己客製以後打包給所有人使用

多增加幾個以後搞不好能發佈給其他人用

謝謝各位的觀看