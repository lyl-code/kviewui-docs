export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "/images/hero.png",
    "heroText": "kViewUI",
    "features": [
      {
        "title": "一致性",
        "details": "与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念"
      },
      {
        "title": "反馈",
        "details": "通过界面样式和交互动效让用户可以清晰的感知自己的操作"
      },
      {
        "title": "效率",
        "details": "界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。"
      }
    ],
    "footer": "by Kviewui"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "设计原则",
      "slug": "设计原则",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1653371175000
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
