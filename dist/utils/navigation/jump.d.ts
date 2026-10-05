import { AppRouteRecord } from '../../types/router';
export declare const openExternalLink: (link: string) => void;
/**
 * 菜单跳转
 * @param item 菜单项
 * @param jumpToFirst 是否跳转到第一个子菜单
 * @returns
 */
export declare const handleMenuJump: (item: AppRouteRecord, jumpToFirst?: boolean) => void | Promise<void | import('vue-router').NavigationFailure | undefined>;
