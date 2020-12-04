---
title: 用Vuepress製作一個自己的git page吧
author: NoseGates
lang: zh-Hant-TW
description: 文章一步一步帶領使用者從零開始製作一個屬於自己的git page靜態頁面
---

# 用Vuepress製作一個自己的git page吧


此文章的基礎建立在已正在使用**Vue**且已稍微熟悉**node.js**的人
用幾行文字簡單紀錄一下從零開始建立部落格的過程

## 安裝[Vuepress](https://vuepress.vuejs.org/zh/)吧

先看一下官方的操作

``` sh
# 将 VuePress 作为一个本地依赖安装
yarn add -D vuepress # 或者：npm install -D vuepress

# 新建一个 docs 文件夹
mkdir docs

# 新建一个 markdown 文件
echo '# Hello VuePress!' > docs/README.md

# 开始写作
npx vuepress dev docs
```
依照官方的操作你就可以簡易的做出一個 `README.md` 的文件
`build`出來的靜態檔案也可以直接放在各網站上使用

## 概念

vuepress是採用**約定式**的配置方式

所有的佈局和配置都是視個人需要添加

優點就是可以用最簡易的配置就能開始寫作

[簡易的佈局](https://vuepress.vuejs.org/zh/guide/directory-structure.html#%E9%BB%98%E8%AE%A4%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1)如下
``` 
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

最基本的配置都會設定在`docs/.vuepress/config.js`

謝謝大家