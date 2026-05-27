import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const h5Path = path.resolve(__dirname, '../../examples/demo/dist')

function h5DemoMiddleware() {
    const mimeTypes: Record<string, string> = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.json': 'application/json',
        '.woff2': 'font/woff2',
        '.woff': 'font/woff',
        '.ttf': 'font/ttf',
    }

    return (req: any, res: any, next: any) => {
        if (!req.url?.startsWith('/taro-ui/h5/')) return next()
        const relPath = decodeURIComponent(req.url.slice('/taro-ui/h5/'.length).split('?')[0])
        const filePath = path.join(h5Path, relPath)
        if (!filePath.startsWith(h5Path + path.sep)) return next()
        fs.readFile(filePath, (err, data) => {
            if (err) return next()
            const ext = path.extname(filePath)
            res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream')
            res.end(data)
        })
    }
}

export default defineConfig({
    srcDir: 'docs',
    lang: 'zh-CN',
    title: 'Taro UI',
    description: '一套基于 Taro 框架开发的多端 UI 组件库',
    base: '/taro-ui/',
    lastUpdated: true,
    head: [
        ['link', { rel: 'icon', href: '/taro-ui/favicon.png' }]
    ],
    themeConfig: {
        logo: '/navbar-logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: '/guide/introduction' },
            { text: '组件', link: '/components/icon' },
            { text: 'GitHub', link: 'https://github.com/NervJS/taro-ui' }
        ],
        sidebar: {
            '/guide/': [
                {
                    text: '综述',
                    items: [
                        { text: '介绍', link: '/guide/introduction' },
                        { text: '快速上手', link: '/guide/quickstart' },
                        { text: '自定义主题', link: '/guide/customize-theme' },
                        { text: '国际化', link: '/guide/i18n' },
                        { text: '常见问题', link: '/guide/questions' },
                        { text: '更新日志', link: '/guide/changelog' },
                        { text: '设计资源', link: '/guide/resource' }
                    ]
                }
            ],
            '/components/': [
                {
                    text: '基础组件',
                    items: [
                        { text: '图标', link: '/components/icon' },
                        { text: '按钮', link: '/components/button' },
                        { text: '浮动按钮', link: '/components/fab' }
                    ]
                },
                {
                    text: '视图组件',
                    items: [
                        { text: '头像', link: '/components/avatar' },
                        { text: '文章样式', link: '/components/article' },
                        { text: '徽标', link: '/components/badge' },
                        { text: '倒计时', link: '/components/countdown' },
                        { text: '幕帘', link: '/components/curtain' },
                        { text: '页面提示', link: '/components/load-more' },
                        { text: '通告栏', link: '/components/noticebar' },
                        { text: '标签', link: '/components/tag' },
                        { text: '时间轴', link: '/components/timeline' },
                        { text: '滑动视图容器', link: '/components/swiper' },
                        { text: '分隔符', link: '/components/divider' },
                        { text: '步骤条', link: '/components/steps' }
                    ]
                },
                {
                    text: '操作反馈',
                    items: [
                        { text: '动作面板', link: '/components/action-sheet' },
                        { text: '活动指示器', link: '/components/activity-indicator' },
                        { text: '模态框', link: '/components/modal' },
                        { text: '进度条', link: '/components/progress' },
                        { text: '轻提示', link: '/components/toast' },
                        { text: '滑动操作', link: '/components/swipe-action' },
                        { text: '消息通知', link: '/components/message' }
                    ]
                },
                {
                    text: '表单组件',
                    items: [
                        { text: '表单', link: '/components/form' },
                        { text: '输入框', link: '/components/input' },
                        { text: '数字输入框', link: '/components/input-number' },
                        { text: '单选按钮', link: '/components/radio' },
                        { text: '多选框', link: '/components/checkbox' },
                        { text: '评分', link: '/components/rate' },
                        { text: '开关', link: '/components/switch' },
                        { text: '多行文本框', link: '/components/textarea' },
                        { text: '选择器', link: '/components/picker' },
                        { text: '搜索栏', link: '/components/search-bar' },
                        { text: '滑动条', link: '/components/slider' },
                        { text: '图片选择器', link: '/components/image-picker' },
                        { text: '范围选择器', link: '/components/range' }
                    ]
                },
                {
                    text: '布局组件',
                    items: [
                        { text: '弹性布局', link: '/components/flex' },
                        { text: '栅格布局', link: '/components/grid' },
                        { text: '列表', link: '/components/list' },
                        { text: '卡片', link: '/components/card' },
                        { text: '浮动弹层', link: '/components/float-layout' },
                        { text: '手风琴', link: '/components/accordion' }
                    ]
                },
                {
                    text: '导航组件',
                    items: [
                        { text: '导航栏', link: '/components/navbar' },
                        { text: '标签栏', link: '/components/tabbar' },
                        { text: '标签页', link: '/components/tabs' },
                        { text: '分段器', link: '/components/segmented-control' },
                        { text: '分页器', link: '/components/pagination' },
                        { text: '抽屉', link: '/components/drawer' },
                        { text: '索引选择器', link: '/components/indexes' }
                    ]
                },
                {
                    text: '高阶组件',
                    items: [
                        { text: '日历', link: '/components/calendar' },
                        { text: '全局配置', link: '/components/config-provider' }
                    ]
                }
            ]
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/NervJS/taro-ui' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 京东·凹凸实验室'
        },
        search: {
            provider: 'local'
        }
    },
    markdown: {
        container: {
            warningLabel: '警告'
        }
    },
    vite: {
        publicDir: path.resolve(__dirname, '../assets'),
        server: {
            port: 3000
        },
        plugins: [
            {
                name: 'h5-demo-dev-server',
                configureServer(server) {
                    server.middlewares.use(h5DemoMiddleware())
                }
            }
        ]
    }
})
