import { Ref } from 'vue';
/**
 * @description 管理页面头部高度测量，测量结果写入 CSS 变量供 CSS 组合全高使用。
 * 适用于调用方自行持有头部元素引用的场景，需由调用方为返回的 headerRef 赋值。
 * @return 头部元素引用、内容头部元素引用及两者高度（响应式）
 */
export declare function useLayoutHeight(): {
    /** 头部元素引用 */
    headerRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    /** 内容头部元素引用 */
    contentHeaderRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    /** 头部高度（响应式） */
    headerHeight: import('vue').ShallowRef<number, number>;
    /** 内容头部高度（响应式） */
    contentHeaderHeight: import('vue').ShallowRef<number, number>;
};
/**
 * @description 通过 ID 自动查找头部元素，测量其高度并写入 CSS 变量。
 * 适用于无法直接获取元素引用的场景；页面全高由 app.scss 依据写入的变量组合。
 * @param headerIds 头部元素的 ID 数组，依次为头部与内容头部
 * @return 头部元素引用、内容头部元素引用及两者高度（响应式）
 */
export declare function useAutoLayoutHeight(headerIds?: string[]): {
    /** 头部元素引用 */
    headerRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    /** 内容头部元素引用 */
    contentHeaderRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    /** 头部高度（响应式） */
    headerHeight: import('vue').ShallowRef<number, number>;
    /** 内容头部高度（响应式） */
    contentHeaderHeight: import('vue').ShallowRef<number, number>;
};
