import { AppRouteRecord } from '../../types/router';
/**
 * @description 判断菜单项是否可作为默认导航落点。
 * @param menuItem 菜单路由项。
 * @return 是否可以跳转到该菜单项。
 */
export declare function isNavigableMenuItem(menuItem: AppRouteRecord): boolean;
/**
 * @description 递归获取菜单树中第一个可访问页面路径。
 * @param menuList 菜单路由列表。
 * @return 第一个可访问页面的完整路径，无结果时返回空字符串。
 */
export declare function getFirstMenuPath(menuList: AppRouteRecord[]): string;
/**
 * @description 根据当前地址查找所属业务系统。
 * @param applicationList 一级业务系统路由列表。
 * @param path 当前访问路径。
 * @return 匹配的业务系统，无匹配时返回 undefined。
 */
export declare function findApplicationByPath(applicationList: AppRouteRecord[], path: string): AppRouteRecord | undefined;
