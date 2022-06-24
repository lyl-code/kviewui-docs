export const siteData = {
  "base": "/",
  "lang": "zh-CN",
  "title": "kViewUI",
  "description": "基于UNI-APP框架的多端开发UI组件库，让您的开发效率加倍提升",
  "head": [],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
