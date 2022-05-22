module.exports = {
    theme: '',
    title: 'kViewUI',
    description: '基于UNI-APP框架的多端开发UI组件库，让您的开发效率加倍提升',
    lang: 'zh-CN',
    base: '/',
    port: '8080',
    themeConfig: {
        logo: '/logo/kviewui.png',
        // 配置顶部导航栏
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '组件',
                link: '/components/'
            }
        ],
        editLinkText: '在 GitHub 上编辑此页',
        // 配置侧边栏
        sidebar: {
            '/components/': ['/components/', '/components/select.md']
        },
        // 更新时间
        lastUpdated: '上次更新',
        // 多语言配置
        locales: {
            '/': {
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: '发现新内容可用',
                        buttonText: '刷新'
                    }
                },
                // 配置顶部导航栏
                nav: [{
                        text: '首页',
                        link: '/'
                    },
                    {
                        text: '组件',
                        link: '/components/'
                    }
                ],
                // 配置侧边栏
                sidebar: {
                    '/components/': ['/components/', '/components/select.md']
                },
            },
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: 'New content is available.',
                        buttonText: 'Refresh'
                    }
                },
                nav: [{
                        text: 'Home',
                        link: '/'
                    },
                    {
                        text: 'Components',
                        link: '/components/'
                    }
                ],
                sidebar: {
                    '/en/components/': ['/components/', '/components/select.md']
                },
            }
        }
    },
    head: [],
    plugins: {
        'demo-container': {
            locales: [{
                "lang": "zh-CN",
                "demo-block": {
                    "hide-text": "隐藏代码",
                    "show-text": "显示代码",
                    "copy-text": "复制代码",
                    "copy-success": "复制成功"
                }
            }, {
                "lang": "en-US",
                "demo-block": {
                    "hide-text": "Hide",
                    "show-text": "Expand",
                    "copy-text": "Copy",
                    "copy-success": "Successful"
                }
            }]
        }
    }, // 配置插件
    markdown: {},
    // 国际化
    // locales: {
    //     '/zh/': {
    //         lang: '简体中文',
    //         title: 'VuePress',
    //         description: 'Vue 驱动的静态网站生成器'
    //     }
    // }
}