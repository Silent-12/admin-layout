import { Ref } from 'vue';
import { Router } from 'vue-router';
import { Composer, I18n } from 'vue-i18n';
import { AppRouteRecord } from '../types/router';
/** 语言切换回调：Admin模板负责同步 i18n locale 与持久化 */
export type LanguageChangeHandler = (lang: string) => void;
/** 菜单数据来源：Admin模板路由装配完成后注入响应式数据 */
export interface MenuSource {
    /** 侧栏菜单树 */
    menuList: AppRouteRecord[];
    /** 一级业务系统列表 */
    applicationList: AppRouteRecord[];
    /** 当前激活的业务系统 */
    currentApplication?: AppRouteRecord;
    /** 首页路径 */
    homePath: string;
}
/** 布局包安装选项 */
export interface AdminLayoutOptions {
    /** Admin模板 vue-i18n 实例；传入后包内置语言包会合并进去 */
    i18n?: I18n | {
        global: Composer;
    };
    /** Admin模板 vue-router 实例，用于菜单跳转 / worktab 导航 / 页面标题 */
    router?: Router;
    /** 菜单数据（响应式引用或 getter），替代Admin模板 menu store */
    menuSource?: () => MenuSource;
    /** 语言响应式引用（Admin模板传入 store 中的 ref），替代Admin模板 user store 的 language */
    language?: Ref<string>;
    /** 语言切换回调（替代Admin模板 user store 的 setLanguage） */
    onLanguageChange?: LanguageChangeHandler;
    /** 参数化配置 */
    config?: {
        /** 系统名称，用于浏览器页面标题 */
        systemName?: string;
    };
}
/**
 * @description 安装时保存Admin模板注入的上下文。
 * @param options 安装选项。
 */
export declare const setLayoutContext: (options: AdminLayoutOptions) => void;
/**
 * @description 获取Admin模板注入的 router（菜单跳转、worktab 导航），未注入时返回 undefined。
 * @return vue-router 实例。
 */
export declare const getContextRouter: () => Router | undefined;
/**
 * @description 获取Admin模板注入的 i18n（菜单标题翻译）。
 * @return vue-i18n 实例的 global composer。
 */
export declare const getContextI18n: () => {
    global: Composer;
} | undefined;
/**
 * @description 获取菜单数据，未注入时返回空数据结构。
 * @return 菜单数据。
 */
export declare const getMenuSource: () => MenuSource;
/**
 * @description 获取语言响应式引用，未注入时提供仅内存的默认引用。
 * @return 语言 ref。
 */
export declare const getLanguageRef: () => Ref<string>;
/**
 * @description 获取语言切换回调，未注入时返回 undefined（仅更新包内语言 ref）。
 * @return 语言切换回调。
 */
export declare const getLanguageChangeHandler: () => LanguageChangeHandler | undefined;
/**
 * @description 获取系统名称（install 配置优先，回退环境变量）。
 * @return 系统名称。
 */
export declare const getSystemName: () => string;
