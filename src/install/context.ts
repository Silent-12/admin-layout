/**
 * 布局包运行时上下文
 *
 * Admin模板通过 `app.use(AdminLayout, options)` 注入的Admin模板能力统一保存在模块级上下文中，
 * 供 store 与工具函数在 setup 之外访问（如路由守卫调用 worktab store）。
 * 组件内优先使用本上下文而非 provide/inject，保证两种场景行为一致。
 */
import { ref, type Ref } from 'vue'
import type { Router } from 'vue-router'
import type { Composer, I18n } from 'vue-i18n'
import type { AppRouteRecord } from '../types/router'

/** 默认语言引用（Admin模板未注入时兜底，仅内存生效） */
const defaultLanguageRef = ref<string>('zh')

/** Admin模板用户信息的最小展示结构 */
export interface LayoutUserInfo {
  /** 用户名 / 昵称 */
  username?: string
  /** 头像地址 */
  avatar?: string
  /** 其他展示字段 */
  [key: string]: unknown
}

/** 语言切换回调：Admin模板负责同步 i18n locale 与持久化 */
export type LanguageChangeHandler = (lang: string) => void

/** 菜单数据来源：Admin模板路由装配完成后注入响应式数据 */
export interface MenuSource {
  /** 侧栏菜单树 */
  menuList: AppRouteRecord[]
  /** 一级业务系统列表 */
  applicationList: AppRouteRecord[]
  /** 当前激活的业务系统 */
  currentApplication?: AppRouteRecord
  /** 首页路径 */
  homePath: string
}

/** 布局包安装选项 */
export interface AdminLayoutOptions {
  /** Admin模板 vue-i18n 实例；传入后包内置语言包会合并进去 */
  i18n?: I18n | { global: Composer }
  /** Admin模板 vue-router 实例，用于菜单跳转 / worktab 导航 / 页面标题 */
  router?: Router
  /** 菜单数据（响应式引用或 getter），替代Admin模板 menu store */
  menuSource?: () => MenuSource
  /** 用户信息（只读展示），替代Admin模板 user store */
  userInfo?: () => LayoutUserInfo | undefined
  /** 语言响应式引用（Admin模板传入 store 中的 ref），替代Admin模板 user store 的 language */
  language?: Ref<string>
  /** 语言切换回调（替代Admin模板 user store 的 setLanguage） */
  onLanguageChange?: LanguageChangeHandler
  /** 登出回调（替代Admin模板 user store 的 logOut 及其路由守卫耦合） */
  onLogout?: () => void | Promise<void>
  /** 参数化配置 */
  config?: {
    /** 系统名称，用于浏览器页面标题 */
    systemName?: string
  }
}

interface LayoutContext {
  router?: Router
  i18n?: { global: Composer }
  menuSource?: () => MenuSource
  userInfo?: () => LayoutUserInfo | undefined
  language?: Ref<string>
  onLanguageChange?: LanguageChangeHandler
  onLogout?: () => void | Promise<void>
  config?: AdminLayoutOptions['config']
}

let context: LayoutContext = {}

/**
 * @description 安装时保存Admin模板注入的上下文。
 * @param options 安装选项。
 */
export const setLayoutContext = (options: AdminLayoutOptions): void => {
  context = {
    router: options.router,
    i18n: options.i18n as LayoutContext['i18n'],
    menuSource: options.menuSource,
    userInfo: options.userInfo,
    language: options.language,
    onLanguageChange: options.onLanguageChange,
    onLogout: options.onLogout,
    config: options.config
  }
}

/**
 * @description 获取Admin模板注入的 router（菜单跳转、worktab 导航），未注入时返回 undefined。
 * @return vue-router 实例。
 */
export const getContextRouter = (): Router | undefined => context.router

/**
 * @description 获取Admin模板注入的 i18n（菜单标题翻译）。
 * @return vue-i18n 实例的 global composer。
 */
export const getContextI18n = (): { global: Composer } | undefined => context.i18n

/**
 * @description 获取菜单数据，未注入时返回空数据结构。
 * @return 菜单数据。
 */
export const getMenuSource = (): MenuSource => {
  return (
    context.menuSource?.() ?? {
      menuList: [],
      applicationList: [],
      currentApplication: undefined,
      homePath: ''
    }
  )
}

/**
 * @description 获取用户信息，未注入时返回 undefined。
 * @return 用户信息。
 */
export const getUserInfo = (): LayoutUserInfo | undefined => context.userInfo?.()

/**
 * @description 获取语言响应式引用，未注入时提供仅内存的默认引用。
 * @return 语言 ref。
 */
export const getLanguageRef = (): Ref<string> => {
  return context.language ?? defaultLanguageRef
}

/**
 * @description 获取语言切换回调，未注入时返回 undefined（仅更新包内语言 ref）。
 * @return 语言切换回调。
 */
export const getLanguageChangeHandler = (): LanguageChangeHandler | undefined =>
  context.onLanguageChange

/**
 * @description 执行Admin模板登出回调，未注入时仅告警。
 */
export const logout = (): void => {
  if (context.onLogout) {
    void context.onLogout()
  } else {
    console.warn('[ao-admin-layout] 未注入 onLogout，登出操作被忽略')
  }
}

/**
 * @description 获取系统名称（install 配置优先，回退环境变量）。
 * @return 系统名称。
 */
export const getSystemName = (): string => {
  return context.config?.systemName ?? import.meta.env.VITE_APP_NAME ?? 'Ao Admin'
}
