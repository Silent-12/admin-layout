import { nextTick } from 'vue';
declare const _default: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    searchInput: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            readonly id?: string | undefined;
            readonly size?: import('element-plus').ComponentSize | undefined;
            readonly disabled?: boolean | undefined;
            readonly modelValue?: string | number | null | undefined;
            readonly modelModifiers?: import('element-plus').InputModelModifiers | undefined;
            readonly maxlength?: (string | number) | undefined;
            readonly minlength?: (string | number) | undefined;
            readonly type?: import('element-plus').InputType | undefined;
            readonly resize?: ("none" | "both" | "horizontal" | "vertical") | undefined;
            readonly autosize?: import('element-plus').InputAutoSize | undefined;
            readonly autocomplete?: string | undefined;
            readonly formatter?: ((value: string) => string) | undefined;
            readonly parser?: ((value: string) => string) | undefined;
            readonly placeholder?: string | undefined;
            readonly form?: string | undefined;
            readonly readonly?: boolean | undefined;
            readonly clearable?: boolean | undefined;
            readonly clearIcon?: import('element-plus/es/utils/vue/icon').IconPropType | undefined;
            readonly showPassword?: boolean | undefined;
            readonly showWordLimit?: boolean | undefined;
            readonly wordLimitPosition?: ("inside" | "outside") | undefined;
            readonly suffixIcon?: import('element-plus/es/utils/vue/icon').IconPropType | undefined;
            readonly prefixIcon?: import('element-plus/es/utils/vue/icon').IconPropType | undefined;
            readonly containerRole?: string | undefined;
            readonly tabindex?: (string | number) | undefined;
            readonly validateEvent?: boolean | undefined;
            readonly inputStyle?: import('vue').StyleValue;
            readonly autofocus?: boolean | undefined;
            readonly rows?: number | undefined;
            readonly ariaLabel?: string | undefined;
            readonly inputmode?: import('vue').HTMLAttributes["inputmode"];
            readonly name?: string | undefined;
            readonly countGraphemes?: ((value: string) => number) | undefined;
            readonly onClear?: ((evt: MouseEvent | undefined) => any) | undefined;
            readonly "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            readonly onChange?: ((value: string, evt?: Event | undefined) => any) | undefined;
            readonly onInput?: ((value: string) => any) | undefined;
            readonly onBlur?: ((evt: FocusEvent) => any) | undefined;
            readonly onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
            readonly onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
            readonly onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
            readonly onFocus?: ((evt: FocusEvent) => any) | undefined;
            readonly onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
            readonly onMouseenter?: ((evt: MouseEvent) => any) | undefined;
            readonly onMouseleave?: ((evt: MouseEvent) => any) | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        $attrs: import('vue').Attrs;
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: ((event: "clear", evt: MouseEvent | undefined) => void) & ((event: "input", value: string) => void) & ((event: "change", value: string, evt?: Event | undefined) => void) & ((event: "update:modelValue", value: string) => void) & ((event: "blur", evt: FocusEvent) => void) & ((event: "compositionend", evt: CompositionEvent) => void) & ((event: "compositionstart", evt: CompositionEvent) => void) & ((event: "compositionupdate", evt: CompositionEvent) => void) & ((event: "focus", evt: FocusEvent) => void) & ((event: "keydown", evt: Event | KeyboardEvent) => void) & ((event: "mouseenter", evt: MouseEvent) => void) & ((event: "mouseleave", evt: MouseEvent) => void);
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<import('element-plus').InputProps> & Readonly<{
            onClear?: ((evt: MouseEvent | undefined) => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onChange?: ((value: string, evt?: Event | undefined) => any) | undefined;
            onInput?: ((value: string) => any) | undefined;
            onBlur?: ((evt: FocusEvent) => any) | undefined;
            onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
            onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
            onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
            onFocus?: ((evt: FocusEvent) => any) | undefined;
            onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
            onMouseenter?: ((evt: MouseEvent) => any) | undefined;
            onMouseleave?: ((evt: MouseEvent) => any) | undefined;
        }>, {
            input: import('vue').ShallowRef<HTMLInputElement | undefined, HTMLInputElement | undefined>;
            textarea: import('vue').ShallowRef<HTMLTextAreaElement | undefined, HTMLTextAreaElement | undefined>;
            ref: import('vue').ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
            textareaStyle: import('vue').ComputedRef<import('vue').StyleValue>;
            autosize: import('vue').Ref<import('element-plus').InputAutoSize | undefined, import('element-plus').InputAutoSize | undefined>;
            isComposing: import('vue').Ref<boolean, boolean>;
            passwordVisible: import('vue').Ref<boolean, boolean>;
            focus: () => void | undefined;
            blur: () => void | undefined;
            select: () => void;
            clear: (evt?: MouseEvent) => void;
            resizeTextarea: () => void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            clear: (evt: MouseEvent | undefined) => void;
            "update:modelValue": (value: string) => void;
            change: (value: string, evt?: Event | undefined) => void;
            input: (value: string) => void;
            blur: (evt: FocusEvent) => void;
            compositionend: (evt: CompositionEvent) => void;
            compositionstart: (evt: CompositionEvent) => void;
            compositionupdate: (evt: CompositionEvent) => void;
            focus: (evt: FocusEvent) => void;
            keydown: (evt: Event | KeyboardEvent) => void;
            mouseenter: (evt: MouseEvent) => void;
            mouseleave: (evt: MouseEvent) => void;
        }, string, {
            type: import('element-plus').InputType;
            disabled: boolean;
            modelValue: string | number | null;
            validateEvent: boolean;
            modelModifiers: import('element-plus').InputModelModifiers;
            autocomplete: string;
            clearIcon: import('element-plus/es/utils/vue/icon').IconPropType;
            wordLimitPosition: "inside" | "outside";
            tabindex: string | number;
            inputStyle: string | false | import('vue').CSSProperties | import('vue').StyleValue[] | null;
            rows: number;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{
        type: import('element-plus').InputType;
        disabled: boolean;
        modelValue: string | number | null;
        validateEvent: boolean;
        modelModifiers: import('element-plus').InputModelModifiers;
        autocomplete: string;
        clearIcon: import('element-plus/es/utils/vue/icon').IconPropType;
        wordLimitPosition: "inside" | "outside";
        tabindex: string | number;
        inputStyle: string | false | import('vue').CSSProperties | import('vue').StyleValue[] | null;
        rows: number;
    }> & Omit<Readonly<import('element-plus').InputProps> & Readonly<{
        onClear?: ((evt: MouseEvent | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onChange?: ((value: string, evt?: Event | undefined) => any) | undefined;
        onInput?: ((value: string) => any) | undefined;
        onBlur?: ((evt: FocusEvent) => any) | undefined;
        onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
        onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
        onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
        onFocus?: ((evt: FocusEvent) => any) | undefined;
        onKeydown?: ((evt: Event | KeyboardEvent) => any) | undefined;
        onMouseenter?: ((evt: MouseEvent) => any) | undefined;
        onMouseleave?: ((evt: MouseEvent) => any) | undefined;
    }>, "clear" | "type" | "input" | "select" | "textarea" | "modelValue" | "blur" | "focus" | "ref" | "disabled" | "validateEvent" | "tabindex" | "autocomplete" | "clearIcon" | "inputStyle" | "modelModifiers" | "autosize" | "wordLimitPosition" | "rows" | "textareaStyle" | "isComposing" | "passwordVisible" | "resizeTextarea"> & {
        input: HTMLInputElement | undefined;
        textarea: HTMLTextAreaElement | undefined;
        ref: HTMLInputElement | HTMLTextAreaElement | undefined;
        textareaStyle: import('vue').StyleValue;
        autosize: import('element-plus').InputAutoSize | undefined;
        isComposing: boolean;
        passwordVisible: boolean;
        focus: () => void | undefined;
        blur: () => void | undefined;
        select: () => void;
        clear: (evt?: MouseEvent) => void;
        resizeTextarea: () => void;
    } & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            prepend?: (props: {}) => any;
        } & {
            prefix?: (props: {}) => any;
        } & {
            suffix?: (props: {}) => any;
        } & {
            'password-icon'?: (props: {
                visible: boolean;
            }) => any;
        } & {
            append?: (props: {}) => any;
        };
    }) | null;
    searchResultScrollbar: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            readonly distance?: number | undefined;
            readonly height?: (number | string) | undefined;
            readonly maxHeight?: (number | string) | undefined;
            readonly native?: boolean | undefined;
            readonly wrapStyle?: import('vue').StyleValue;
            readonly wrapClass?: import('element-plus/es/utils/typescript').ClassValue;
            readonly viewClass?: import('element-plus/es/utils/typescript').ClassValue;
            readonly viewStyle?: import('vue').StyleValue;
            readonly noresize?: boolean | undefined;
            readonly tag?: (keyof HTMLElementTagNameMap | (string & {})) | undefined;
            readonly always?: boolean | undefined;
            readonly minSize?: number | undefined;
            readonly tabindex?: (number | string) | undefined;
            readonly id?: string | undefined;
            readonly role?: string | undefined;
            readonly ariaLabel?: string | undefined;
            readonly ariaOrientation?: ("horizontal" | "vertical" | "undefined") | undefined;
            readonly onScroll?: ((args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => any) | undefined;
            readonly "onEnd-reached"?: ((direction: import('element-plus').ScrollbarDirection) => any) | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        $attrs: import('vue').Attrs;
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: ((event: "scroll", args_0: {
            scrollTop: number;
            scrollLeft: number;
        }) => void) & ((event: "end-reached", direction: import('element-plus').ScrollbarDirection) => void);
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<import('element-plus').ScrollbarProps> & Readonly<{
            onScroll?: ((args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => any) | undefined;
            "onEnd-reached"?: ((direction: import('element-plus').ScrollbarDirection) => any) | undefined;
        }>, {
            wrapRef: import('vue').Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
            update: () => void;
            scrollTo: {
                (xCord: number, yCord?: number): void;
                (options: ScrollToOptions): void;
            };
            setScrollTop: (value: number) => void;
            setScrollLeft: (value: number) => void;
            handleScroll: () => void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            scroll: (args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => void;
            "end-reached": (direction: import('element-plus').ScrollbarDirection) => void;
        }, string, {
            height: number | string;
            tag: keyof HTMLElementTagNameMap | (string & {});
            tabindex: number | string;
            maxHeight: number | string;
            distance: number;
            wrapStyle: string | false | import('vue').CSSProperties | import('vue').StyleValue[] | null;
            wrapClass: string | false | Record<string, any> | import('element-plus/es/utils/typescript').ClassValue[] | null;
            viewClass: string | false | Record<string, any> | import('element-plus/es/utils/typescript').ClassValue[] | null;
            viewStyle: string | false | import('vue').CSSProperties | import('vue').StyleValue[] | null;
            minSize: number;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{
        height: number | string;
        tag: keyof HTMLElementTagNameMap | (string & {});
        tabindex: number | string;
        maxHeight: number | string;
        distance: number;
        wrapStyle: string | false | import('vue').CSSProperties | import('vue').StyleValue[] | null;
        wrapClass: string | false | Record<string, any> | import('element-plus/es/utils/typescript').ClassValue[] | null;
        viewClass: string | false | Record<string, any> | import('element-plus/es/utils/typescript').ClassValue[] | null;
        viewStyle: string | false | import('vue').CSSProperties | import('vue').StyleValue[] | null;
        minSize: number;
    }> & Omit<Readonly<import('element-plus').ScrollbarProps> & Readonly<{
        onScroll?: ((args_0: {
            scrollTop: number;
            scrollLeft: number;
        }) => any) | undefined;
        "onEnd-reached"?: ((direction: import('element-plus').ScrollbarDirection) => any) | undefined;
    }>, "tabindex" | "tag" | "distance" | "height" | "maxHeight" | "wrapStyle" | "wrapClass" | "viewClass" | "viewStyle" | "minSize" | "wrapRef" | "update" | "scrollTo" | "setScrollTop" | "setScrollLeft" | "handleScroll"> & {
        wrapRef: HTMLDivElement | undefined;
        update: () => void;
        scrollTo: {
            (xCord: number, yCord?: number): void;
            (options: ScrollToOptions): void;
        };
        setScrollTop: (value: number) => void;
        setScrollLeft: (value: number) => void;
        handleScroll: () => void;
    } & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            default?: (props: {}) => any;
        };
    }) | null;
}, HTMLDivElement>;
export default _default;
