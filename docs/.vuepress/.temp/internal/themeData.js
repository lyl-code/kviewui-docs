export const themeData = {
  "home": "/",
  "logo": "/logo/kviewui.png",
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "组件",
      "link": "/components/"
    }
  ],
  "editLink": true,
  "editLinkText": "在 GitHub 上编辑此页",
  "sidebar": {
    "/components/": [
      "/components/",
      "/components/kui-button.md"
    ]
  },
  "lastUpdatedText": "上次更新",
  "contributors": false,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "lastUpdated": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
