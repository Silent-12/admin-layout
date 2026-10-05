/**
 * useCommon - 通用功能集合
 *
 * 提供常用的页面操作功能，包括页面刷新、滚动控制、路径获取等。
 * 这些功能在多个页面和组件中都会用到，统一封装便于复用。
 *
 * ## 主要功能
 *
 * 1. 首页路径 - 获取系统配置的首页路径
 * 2. 页面刷新 - 刷新当前页面内容
 * 3. 滚动控制 - 提供多种滚动到顶部和指定位置的方法
 * 4. 平滑滚动 - 支持平滑滚动动画效果
 */
export declare function useCommon(): {
    homePath: import('vue').ComputedRef<string>;
    refresh: () => void;
    scrollTo: (top: number, smooth?: boolean) => void;
    scrollToTop: () => void;
    smoothScrollToTop: () => void;
};
