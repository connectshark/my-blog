---
title: 05 - Flex Panel Gallery
author: NoseGates
lang: zh-Hant-TW
description: 使用flex排版和css3特效做出畫廊效果
---
# 05 - Flex Panel Gallery
[展示](https://connectshark.github.io/JavaScript30/05%20-%20Flex%20Panel%20Gallery/index-Chambers.html)
## 內容概要
![flex圖](https://i.imgur.com/IGy7LDW.gif)

使用flex排版和css3特效做出畫廊收合效果

動畫皆以添加或刪除class作為切換
## 重點整理
* CSS3 flex
* transitionend時機
* 垂直置中技巧
### CSS3 flex
flex當作屬性時使用是以下三個的縮寫
* flex-grow
* flex-shrink
* flex-basis

若是像範例中只有寫一個值得時候代表`flex-grow`
### transitionend時機
範例中的效果不論開合皆需在左右伸縮效果結束以後才做文字移入移出效果

故如同先前範例一樣註冊transitionend事件

在`flex-grow`以後執行動畫
``` js
const panels = document.querySelectorAll('.panel')
function toggleActive(e) {
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('panel-active')
	}
}
panels.forEach(item => item.addEventListener('transitionend', toggleActive))
```
### 垂直置中技巧
此範例中需讓文字垂直置中
而<p/>已經被使用來排版
故手動修改為以下
``` html
<div class="panel panel2">
  <p><span>Give</span></p>
  <p><span>Take</span></p>
  <p><span>Receive</span></p>
</div>
```
接下來使用偽元素排版
``` css {1-7,14-15}
.panel p::before{
  content: '';
  width: 0;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
.panel p {
  text-transform: uppercase;
  font-family: 'Amatic SC', cursive;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
  font-size: 2em;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
```
使文字垂直居中