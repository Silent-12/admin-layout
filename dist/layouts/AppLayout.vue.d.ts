import { SidebarHeaderSlotProps } from '../types/layout';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        'sidebar-header'?: (props: SidebarHeaderSlotProps) => any;
        /**
         * 顶部栏用户头像插槽
         * @description 向Admin模板 / 业务组件开放顶部栏右侧用户头像区的渲染权，无插槽参数；
         * 头像内容与交互逻辑由业务侧负责，未传入时该区域留空，包内仅保留间距规范。
         */
        'user-avatar'?: () => any;
    }> & {
        'sidebar-header'?: (props: SidebarHeaderSlotProps) => any;
        /**
         * 顶部栏用户头像插槽
         * @description 向Admin模板 / 业务组件开放顶部栏右侧用户头像区的渲染权，无插槽参数；
         * 头像内容与交互逻辑由业务侧负责，未传入时该区域留空，包内仅保留间距规范。
         */
        'user-avatar'?: () => any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
