// module.exports = {
//     title: 'Hello VuePress',
//     description: 'Just playing around',
//     sidebar:{
//         '/guild/': [{
//             text: '序言',
//             path: '/guide/',
        
//             },]

//     }
//   }
  module.exports = {
    title: '测试使用VuePress',
	themeConfig: {
		nav: [
            { text: '指南', link: '/guide/' },
            {
                text: 'VuePress配置',
                link: '/vuepress-config/'
            },
        ],
		sidebar: [
            {
                title: '前端',
                collapsable: false,
                sidebarDepth: 1,
                children:[
                    {
                        title:'内容12223232',
                        path:'/guild/'
                    }

                ]
            }

        ]
	}
}
