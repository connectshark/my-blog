---
title: 如何局部引入vant組件
lang: zh-Hant-TW
author: NoseGates
description: 教學如何局部引用套件包避免打包進不需要的內容
---
# 如何局部引入vant組件

最近專案在開發mobile版網頁時

發現vue有個很好用專門mobile的套件[Vant](https://youzan.github.io/vant/#/zh-CN/)~~之後再找時間介紹一下~~

而在專案中只需使用套件內的一些反饋元件無需整體引入

想要像其他套件包一樣**局部引入**但是總是出錯

找解法找了一段時間

這裡就特別寫一篇說明我卡關的地方

> 就當作官網的補充說明

避免大家也踩雷
## import你的元件

> 跳過[安裝](https://youzan.github.io/vant/#/zh-CN/quickstart)直接進入import的部分

選好你要使用的元件 這裡使用[Checkbox](https://youzan.github.io/vant/#/zh-CN/checkbox)

先在`script`裡面import進來
``` javascript
import { Checkbox } from 'vant'
```
## 註冊你的元件

接下來在`components`裡註冊此元件

`[元件名稱.name]:元件名稱`
``` javascript
components: {
  [Checkbox.name]: Checkbox
},
```

註冊完成會長下面這樣

``` vue
<script>
import { Checkbox } from 'vant'
export default {
  name: 'welcome',
  components: {
    [Checkbox.name]: Checkbox
  },
  data () {
    return {}
  }
}
</script>
```
::: warning
個人踩點地方

寫法注意非直接`Ｃheckbox`而是`[Checkbox.name]: Checkbox`
:::

## 使用元件

``` html
<van-checkbox v-model="checked">
  <span class="text">成功使用</span>
</van-checkbox>
```

即可看到checkbox正常顯示

![checkbox](https://i.imgur.com/3OM20Iw.png)

## 結語

**避免全局引入主要是避免打包不必要的元件**

在vant官網上也有教學

但卻獨缺這塊`components`這塊有點不解

**謝謝大家的觀看**