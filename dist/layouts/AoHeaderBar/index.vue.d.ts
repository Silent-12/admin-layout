declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        'user-avatar'?: () => any;
    }> & {
        'user-avatar'?: () => any;
    };
    refs: {
        notice: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            value: boolean;
        }> & Readonly<{
            "onUpdate:value"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:value": (value: boolean) => any;
        }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            value: boolean;
        }> & Readonly<{
            "onUpdate:value"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, {}> | null;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    notice: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
        value: boolean;
    }> & Readonly<{
        "onUpdate:value"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:value": (value: boolean) => any;
    }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        value: boolean;
    }> & Readonly<{
        "onUpdate:value"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {}> | null;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
