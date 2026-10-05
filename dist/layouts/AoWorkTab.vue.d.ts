import { MenuItemType } from '../types/menuRight';
declare const _default: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    scrollRef: HTMLDivElement;
    tabsRef: HTMLUListElement;
    menuRef: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('../types/menuRight').MenuRightProps> & Readonly<{
        onSelect?: ((item: MenuItemType) => any) | undefined;
        onShow?: (() => any) | undefined;
        onHide?: (() => any) | undefined;
    }>, {
        show: (e: MouseEvent) => void;
        hide: () => void;
        visible: import('vue').ComputedRef<boolean>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        select: (item: MenuItemType) => any;
        show: () => any;
        hide: () => any;
    }, import('vue').PublicProps, {
        menuWidth: number;
        submenuWidth: number;
        itemHeight: number;
        boundaryDistance: number;
        menuPadding: number;
        itemPaddingX: number;
        borderRadius: number;
        animationDuration: number;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('../types/menuRight').MenuRightProps> & Readonly<{
        onSelect?: ((item: MenuItemType) => any) | undefined;
        onShow?: (() => any) | undefined;
        onHide?: (() => any) | undefined;
    }>, {
        show: (e: MouseEvent) => void;
        hide: () => void;
        visible: import('vue').ComputedRef<boolean>;
    }, {}, {}, {}, {
        menuWidth: number;
        submenuWidth: number;
        itemHeight: number;
        boundaryDistance: number;
        menuPadding: number;
        itemPaddingX: number;
        borderRadius: number;
        animationDuration: number;
    }> | null;
}, any>;
export default _default;
