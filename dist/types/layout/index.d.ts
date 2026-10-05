import { MenuThemeType } from '../store/setting';
/**
 * 侧栏 header 插槽上下文
 * @description Admin模板通过 AppLayout 的 #sidebar-header 插槽提供侧栏顶部区域内容时，
 * 由包内回传的当前菜单状态，用于让自定义内容正确适配折叠态与菜单主题。
 */
export interface SidebarHeaderSlotProps {
    menuOpen: boolean;
    theme: MenuThemeType;
}
