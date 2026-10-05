import { AppRouteRecord } from '../../../types/router';
interface MenuTheme {
    iconColor?: string;
}
interface Props {
    /** 菜单标题 */
    title?: string;
    /** 菜单列表 */
    list?: AppRouteRecord[];
    /** 主题配置 */
    theme?: MenuTheme;
    /** 是否为移动端模式 */
    isMobile?: boolean;
    /** 菜单层级 */
    level?: number;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {
    title: string;
    list: AppRouteRecord[];
    theme: MenuTheme;
    isMobile: boolean;
    level: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
