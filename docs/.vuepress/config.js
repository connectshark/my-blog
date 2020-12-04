const dotenv = require('dotenv').config().parsed
console.log(dotenv)
module.exports = {
	title: 'NoseGates',
	description: 'a site for frontend enginner',
	host:'localhost',
	// base: '/',
	head: [
		['meta',{ name:'google-site-verification', content:'LWk7bQX885aWXhlRzpmpZBRwGA3IystRMVAxe-RADME'}],
		['link', { rel: 'icon', href: '/images/logo.jpg' }],
		['link',{ rel:'alternate', type:'application/html+css+vuepress' ,title:'NoseGates 卡關|分享|部落格'}],
		['link',{rel:'me', href:'https://connectshark.github.io/'}],
		['meta',{content:'NoseGates', property:'og:title'}],
		['meta',{content:'https://connectshark.github.io/',property:'og:url'}],
		['meta',{content:'web,前端,分享,卡關,vue,vuepress',property:'og:description'}],
		['meta',{content:'/images/logo.jpg', property:'og:image'}],
		['meta',{content:'NoseGates部落格', property:'og:site_name'}],
		['meta',{content:'web,前端,分享,卡關,vue,vuepress', name:'keyword'}],
		['meta',{content:'web,前端,分享,卡關,vue,vuepress,紀錄個人卡關和小作品的部落格', name:'description'}],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['link', { rel: 'apple-touch-icon', href: '/images/sample-logo192x.png' }],
		['link', { rel: 'mask-icon', href: '/images/sample-logo192x.png', color: '#3eaf7c' }],
		['meta', { name: 'msapplication-TileImage', content: '/images/sample-logo192x.png' }],
		['meta', { name: 'msapplication-TileColor', content: '#000000' }],
		['script', { 'data-ad-client': 'ca-pub-1922728573988253', 'async src': 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' }]
	],
	themeConfig: {
		logo: '/images/logo.jpg',
		sidebar: [
			['./update', '更新日誌'],
			{
				title: '作品頁',   // 必要的
				collapsable: true, // 可选的, 默认值是 true,
				sidebarDepth: 0,    // 可选的, 默认值是 1
				children: [
					['/collection/todolist', 'ToDoList'],
					['/collection/gitpage', '個人GitPage'],
					['/collection/playerList', '鼠年全馬鐵人挑戰選手清單']
				]
			},
			{
				title: 'Javascript30挑戰',
				collapsable: true,
				sidebarDepth: 0,
				path: '/Javascript30/',
				children: [
					['Javascript30/DrumKit', '01 - JavaScript Drum Kit'],
					['Javascript30/JsClock', '02 - JS and CSS Clock'],
					['Javascript30/CSSVariables', '03 - CSS Variables'],
					['Javascript30/ArrayCardio1', '04 - Array Cardio Day 1'],
					['Javascript30/flexPanelGallery', '05 - Flex Panel Gallery'],
					['Javascript30/typeAhead', '06 - Type Ahead'],
					['Javascript30/ArrayCardio2', '07 - Array Cardio Day 2'],
					['Javascript30/funCanvas', '08 - Fun with HTML5 Canvas']
				]
			},
			{
				title: 'Phaser3中文教學',
				collapsable: true,
				sidebarDepth: 0,
				path: '/Phaser3/',
				children: [
					['Phaser3/introduce', '01 - 初始化你的遊戲吧!'],
					['Phaser3/loadfile', '02 - 讀取遊戲所需的素材吧~!'],
					['Phaser3/setGameArcade', '03 - 設定重力環境 & 靜態物理組'],
					['Phaser3/setPlayer', '04 - 新增玩家角色'],
					['Phaser3/collectStar', '05 - 鍵盤控制玩家 & 收集星星'],
					['Phaser3/score', '06 - 統計得分和增加難度吧~!'],
					['Phaser3/addScene', '07 - 增加新的場景吧!'],
					['Phaser3/phaserInWebpack', '08 - 用webpack打包phaser吧'],
					['Phaser3/progressBar', '09 - 打造一個讀取畫面吧'],
					['Phaser3/phaserInVue', '10 - 用Vue專案打包phaser吧']
				]
			},
			{
				title:'卡關文章',
				collapsable:true,
				sidebarDepth:0,
				children:[
					['/teach/env','Vue Cli中設定環境變數'],
					['/teach/vscodesnippet','VSCODE 設定個人Snippets'],
					['/teach/vfor','v-for點擊加入class的技巧'],
					['/teach/howImportVant','如何局部引入vant組件'],
					['/teach/arrayfind', '陣列運用筆記 find()'],
					['/teach/arrayfindIndex', '陣列運用筆記 findIndex()'],
					['/teach/searchHighlight', '在Vue中製作搜尋highlight[part1]'],
					['/teach/searchHighlight2', '在Vue中製作搜尋highlight[part2]'],
					['/teach/arrayReduce', '陣列運用筆記 reduce()'],
					['/teach/polacode', '截圖你的code - polacode'],
					// ['/teach/uploadImg', '讀圖預覽小元件']
				]
			},
			['./aboutme', '關於我']
		],
		nav: [
			{ text: 'GitHub', link: 'https://github.com/connectshark', target: '_blank' },
			{ text: 'Linkedin', link: 'https://www.linkedin.com/in/%E6%81%A9%E9%A8%B0-%E8%91%89-935867189/', target: '_blank' },
			{ text: 'telegram', link: 'https://t.me/NoseGates', target: '_blank' }
		],
		searchMaxSuggestions: 10,
		lastUpdated: '最後更新時間', // string | boolean,
		smoothScroll: true,
	},
	extend: '@vuepress/theme-default',
	plugins: [
		[
			'@vuepress/blog',{
				frontmatters: [
					{
						id: "tag",
						keys: ['tag', 'tags'],
					},
				]
			}
		],
		[
			'@vuepress/register-components',
			{
				componentsDir: 'components'
			}
		],
		[
			'vuepress-plugin-google-tag-manager',
			{
				gtm: dotenv.GTM
			}
		],
		[
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
		],
		[
			'@vssue/vuepress-plugin-vssue', {
				// 设置 `platform` 而不是 `api`
				platform: 'github',
	
				// 其他的 Vssue 配置
				owner: 'connectshark',
				repo: 'gitpages',
				clientId: dotenv.CLIENT,
				clientSecret: dotenv.CLIENTSECRET,
			},
		],
		[
      '@vuepress/google-analytics',
      {
        'ga': dotenv.GA
      }
		],
		['flowchart'],
		['@vuepress/blog'],
		['@vuepress/medium-zoom']
	],
	theme: "book"
}