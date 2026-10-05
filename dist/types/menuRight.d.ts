/**
 * 右键菜单项。
 * @description 工作标签右键菜单使用的菜单项及子菜单配置。
 */
export interface MenuItemType {
    key: string;
    label: string;
    icon?: string;
    disabled?: boolean;
    showLine?: boolean;
    children?: MenuItemType[];
    [key: string]: any;
}
/**
 * 右键菜单属性。
 * @description 显式导出组件属性，保证工作标签模板引用的声明文件可生成。
 */
export interface MenuRightProps {
    menuItems: MenuItemType[];
    menuWidth?: number;
    submenuWidth?: number;
    itemHeight?: number;
    boundaryDistance?: number;
    menuPadding?: number;
    itemPaddingX?: number;
    borderRadius?: number;
    animationDuration?: number;
}
