/**
 * @ao/admin-layout 统一出口
 *
 * 下游项目只允许从本入口导入布局组件、store、类型与工具，禁止深引包内路径：
 * 内部结构不是公开 API，入口导出才是版本契约。
 *
 * ## 安装
 *
 * ```typescript
 * import { AdminLayout } from '@ao/admin-layout'
 * import '@ao/admin-layout/styles.css'
 *
 * app.use(AdminLayout, {
 *   i18n,
 *   router,
 *   menuSource: () => ({
 *     menuList: menuStore.menuList,
 *     applicationList: menuStore.applicationList,
 *     currentApplication: menuStore.currentApplication,
 *     homePath: menuStore.getHomePath()
 *   }),
 *   userInfo: () => userStore.info,
 *   language: { get: () => userStore.language, set: (v) => userStore.setLanguage(v) },
 *   onLogout: () => userStore.logOut(),
 *   config: { systemName: '后台管理系统' }
 * })
 * ```
 */
import type { App, Plugin } from 'vue'
import './styles/index.scss'
import zhMessages from './locales/zh.json'
import enMessages from './locales/en.json'
import { version } from './version'
import { setLayoutContext, type AdminLayoutOptions } from './install/context'
import AppLayout from './layouts/AppLayout.vue'

/**
 * 布局包插件
 * @description 安装时在控制台静默输出版本号，合并内置语言包并保存Admin模板注入的上下文。
 */
export const AdminLayout: Plugin = {
  install(app: App, options: AdminLayoutOptions = {}) {
    console.info(`[ao-admin-layout] v${version}`)
    setLayoutContext(options)
    if (options.i18n) {
      options.i18n.global.mergeLocaleMessage('zh', zhMessages)
      options.i18n.global.mergeLocaleMessage('en', enMessages)
    }
  }
}

export { version }
export { AppLayout }
export { useSettingStore } from './store/modules/setting'
export { useAppStore } from './store/modules/app'
export { useWorktabStore } from './store/modules/worktab'
export { useTheme, initializeTheme } from './hooks/core/useTheme'
export { useHeaderBar } from './hooks/core/useHeaderBar'
export { useCommon } from './hooks/core/useCommon'
export { useAutoLayoutHeight, useLayoutHeight } from './hooks/core/useLayoutHeight'
export { formatMenuTitle, setPageTitle } from './utils/router'
export { handleMenuJump, openExternalLink } from './utils/navigation/jump'
export { getFirstMenuPath, findApplicationByPath } from './utils/navigation/route'
export * from './install/context'
export type {
  AdminLayoutOptions,
  MenuSource,
  LayoutUserInfo,
  LanguageChangeHandler
} from './install/context'
export type { SidebarHeaderSlotProps } from './types/layout'
