import type { MenuThemeType } from '../store/setting'

/**
 * 侧栏 header 插槽上下文
 * @description Admin模板通过 AppLayout 的 #sidebar-header 插槽提供侧栏顶部区域内容时，
 * 由包内回传的当前菜单状态，用于让自定义内容正确适配折叠态与菜单主题。
 */
export interface SidebarHeaderSlotProps {
  // 菜单是否处于展开状态，折叠时为 false
  menuOpen: boolean
  // 当前菜单主题，含背景色、文字色与系统名称色，随主题模式与暗色模式变化
  theme: MenuThemeType
}
