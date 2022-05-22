module.exports = {
    theme: '',
    title: 'Vuepress + Kviewui',
    description: 'VuePress搭建Kviewui的组件库文档示例代码',
    base: '/',
    port: '8080',
    themeConfig: {
        // 配置顶部导航栏
        nav: [
            {
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
        }
    },
    head: [],
    plugins: ['demo-container'], // 配置插件
    markdown: {}
}