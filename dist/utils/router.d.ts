import { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
/** 扩展的路由配置类型 */
export type AppRouteRecordRaw = RouteRecordRaw & {
    hidden?: boolean;
};
/** 顶部进度条配置 */
export declare const configureNProgress: () => void;
/**
 * 设置页面标题，根据路由元信息和系统信息拼接标题
 * @param to 当前路由对象
 */
export declare const setPageTitle: (to: RouteLocationNormalized) => void;
/**
 * 格式化菜单标题
 * @param title 菜单标题，可以是 i18n 的 key，也可以是字符串
 * @returns 格式化后的菜单标题
 */
export declare const formatMenuTitle: (title: string) => string;
