import { MenuItemType, MenuRightProps } from '../types/menuRight';
declare const _default: import('vue').DefineComponent<MenuRightProps, {
    show: (e: MouseEvent) => void;
    hide: () => void;
    visible: import('vue').ComputedRef<boolean>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    select: (item: MenuItemType) => any;
    show: () => any;
    hide: () => any;
}, string, import('vue').PublicProps, Readonly<MenuRightProps> & Readonly<{
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
