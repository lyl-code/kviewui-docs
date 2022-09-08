---
layout: home

title: KviewUI
titleTemplate: 多端开发组件库

hero:
  name: KviewUI
  text: 多端业务开发利器
  tagline: 基于UNI-APP框架的多端开发UI组件库，让您的开发效率加倍提升
  image:
    # src: /logo-with-shadow.png
    alt: KviewUI
  actions:
    - theme: brand
      text: 开始
      link: /components/button
    - theme: alt
      text: 为什么选 KviewUI？
      link: /guide/why
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/lyl-code/kviewui-docs

features:
  - icon: 💡
    title: 完全TypeScript
    details: 所有组件开发均为原生ts开发，完善的类型支持
  - icon: ⚡️
    title: 暗黑模式
    details: 支持应用暗黑模式切换和组件暗黑模式切换
  - icon: 🛠️
    title: 丰富的组件库
    details: 提供50+个高质量通用组件
  - icon: 🛠️
    title: 主题定制
    details: 内置70+个性化主题可供选择，支持自定义主题定制
#   - icon: 📦
#     title: 优化的构建
#     details: 可选 “多页应用” 或 “库” 模式的预配置 Rollup 构建
  - icon: 🔩
    title: 全局配置
    details: 提供全局配置组件统一页面内所有组件的共有属性内容
  - icon: 🔑
    title: 多端兼容
    details: 基于UNI-APP框架，组件支持H5/APP/小程序多个运行环境
---

<script setup>
import { onMounted } from 'vue'
// import { fetchReleaseTag } from './.vitepress/utils/fetchReleaseTag.js'

onMounted(() => {
//   fetchReleaseTag()
})
</script>