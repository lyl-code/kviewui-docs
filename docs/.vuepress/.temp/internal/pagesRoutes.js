import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-1020f180","/components/",{"title":"安装"},["/components/index.html","/components/README.md"]],
  ["v-3bb939a7","/components/button.html",{"title":""},["/components/button","/components/button.md"]],
  ["v-281d2519","/components/kui-button.html",{"title":"Button 按钮组件"},["/components/kui-button","/components/kui-button.md"]],
  ["v-9d218bc6","/components/select.html",{"title":"Select 选择器"},["/components/select","/components/select.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
