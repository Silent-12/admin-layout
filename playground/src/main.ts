import { createApp, ref } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHashHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { AdminComponents } from '@ao/admin-components'
import { AdminLayout, type AppRouteRecord } from '@ao/admin-layout'
import '@ao/admin-components/styles.css'
// 源码链接开发：底座样式直接引包内样式入口
import '../../src/styles/index.scss'
import 'element-plus/dist/index.css'
// 宿主全局重置样式（重置 margin/padding 与美化滚动条）
import './styles/reset.scss'
import App from './App.vue'
import PageA from './views/PageA.vue'
import PageB from './views/PageB.vue'

const app = createApp(App)

// pinia + 持久化插件（布局包 store 依赖）
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

// i18n（布局包语言包由 install 合并）
const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  messages: { zh: {}, en: {} }
})
app.use(i18n)

// 路由：AppLayout 为一级布局，内容区渲染业务页面
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@ao/admin-layout').then((m) => m.AppLayout),
      children: [
        { path: '', redirect: '/page-a' },
        { path: 'page-a', component: PageA, meta: { title: '页面 A', keepAlive: true } },
        { path: 'page-b', component: PageB, meta: { title: '页面 B' } }
      ]
    }
  ]
})
app.use(router)

// 模拟宿主菜单数据
const menuList: AppRouteRecord[] = [
  {
    path: '/page-a',
    name: 'PageA',
    component: 'page-a',
    meta: { title: '页面 A', icon: 'ri:home-4-line' }
  },
  {
    path: '/page-b',
    name: 'PageB',
    component: 'page-b',
    meta: { title: '页面 B', icon: 'ri:file-list-3-line' }
  }
] as unknown as AppRouteRecord[]

// 语言偏好（模拟宿主持有）
const language = ref<string>('zh')

app.use(ElementPlus, { locale: zhCn })
app.use(AdminComponents, { i18n })
app.use(AdminLayout, {
  i18n,
  router,
  menuSource: () => ({
    menuList,
    applicationList: [],
    currentApplication: undefined,
    homePath: '/page-a'
  }),
  userInfo: () => ({ userName: '演示用户', email: 'demo@example.com' }),
  language,
  onLanguageChange: (lang) => {
    language.value = lang
    i18n.global.locale.value = lang
  },
  onLogout: () => console.info('logout'),
  config: { systemName: '布局包演示系统' }
})

app.mount('#app')
