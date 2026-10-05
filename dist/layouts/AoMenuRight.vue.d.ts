export interface MenuItemType {
    /** 菜单项唯一标识 */
    key: string;
    /** 菜单项标签 */
    label: string;
    /** 菜单项图标 */
    icon?: string;
    /** 菜单项是否禁用 */
    disabled?: boolean;
    /** 菜单项是否显示分割线 */
    showLine?: boolean;
    /** 子菜单 */
    children?: MenuItemType[];
    [key: string]: any;
}
interface Props {
    menuItems: MenuItemType[];
    /** 菜单宽度 */
    menuWidth?: number;
    /** 子菜单宽度 */
    submenuWidth?: number;
    /** 菜单项高度 */
    itemHeight?: number;
    /** 边界距离 */
    boundaryDistance?: number;
    /** 菜单内边距 */
    menuPadding?: number;
    /** 菜单项水平内边距 */
    itemPaddingX?: number;
    /** 菜单圆角 */
    borderRadius?: number;
    /** 动画持续时间 */
    animationDuration?: number;
}
declare const _default: import('vue').DefineComponent<Props, {
    show: (e: MouseEvent) => void;
    hide: () => void;
    visible: import('vue').ComputedRef<boolean>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    select: (item: MenuItemType) => any;
    show: () => any;
    hide: () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onSelect?: ((item: MenuItemType) => any) | undefined;
    onShow?: (() => any) | undefined;
    onHide?: (() => any) | undefined;
}>, {
    menuWidth: number;
    submenuWidth: number;
    itemHeight: number;
    boundaryDistance: number;
    menuPadding: number;
    itemPaddingX: number;
    borderRadius: number;
    animationDuration: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
