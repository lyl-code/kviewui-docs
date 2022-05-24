const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
    theme: '',
    title: 'kViewUI',
    description: '基于UNI-APP框架的多端开发UI组件库，让您的开发效率加倍提升',
    lang: 'zh-CN',
    base: '/',
    port: '8080',
    theme: defaultTheme({
        home: '/',
        logo: '/logo/kviewui.png',
        navbar: [{
                text: '首页',
                link: '/'
            },
            {
                text: '组件',
                link: '/components/'
            }
        ],
        editLink: true,
        editLinkText: '在 GitHub 上编辑此页',
        sidebar: {
            '/components/': ['/components/', '/components/kui-button.md']
        },
        lastUpdatedText: '上次更新',
        // docsDir: 'https://github.com/lyl-code/kviewui-docs',
        contributors: false,
        // docsRepo: 'https://github.com/lyl-code/kviewui-docs',
        // docsBranch: 'master',
        // docsDir: 'docs',
        // editLinkPattern: ':repo/-/edit/:branch/:path'
    }),
    // themeConfig: {
    //     logo: '/logo/kviewui.png',
    //     nav: [{
    //             text: '首页',
    //             link: '/'
    //         },
    //         {
    //             text: '组件',
    //             link: '/components/'
    //         }
    //     ],
    //     editLink: true,
    //     editLinkText: '在 GitHub 上编辑此页',
    //     sidebar: {
    //         '/components/': ['/components/', '/components/kui-button.md']
    //     },
    //     lastUpdated: '上次更新'
    // },
    plugins: ['demo-container']
}