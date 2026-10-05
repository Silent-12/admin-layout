import { AppRouteRecord } from '../../types/router';
/**
 * 全局搜索历史状态管理
 */
export declare const useSearchStore: import('pinia').StoreDefinition<"aoSearchStore", Pick<{
    searchHistory: import('vue').Ref<{
        id?: number | undefined;
        meta: {
            [x: string]: unknown;
            [x: number]: unknown;
            [x: symbol]: unknown;
            title: string;
            icon?: string | undefined;
            showBadge?: boolean | undefined;
            showTextBadge?: string | undefined;
            isHide?: boolean | undefined;
            isHideTab?: boolean | undefined;
            link?: string | undefined;
            isIframe?: boolean | undefined;
            keepAlive?: boolean | undefined;
            authList?: {
                title: string;
                authMark: string;
            }[] | undefined;
            roles?: string[] | undefined;
            fixedTab?: boolean | undefined;
            activePath?: string | undefined;
            isFullPage?: boolean | undefined;
            isAuthButton?: boolean | undefined;
            authMark?: string | undefined;
            parentPath?: string | undefined;
        };
        children?: any[] | undefined;
        component?: (string | (() => Promise<any>)) | undefined;
        end?: boolean | undefined;
        sensitive?: boolean | undefined;
        strict?: boolean | undefined;
        components?: Record<string, import('vue-router').RouteComponent | (() => Promise<import('vue-router').RouteComponent>)> | null | undefined;
        redirect?: string | ((to: import('vue-router').RouteLocation, from: import('vue-router').RouteLocationNormalizedLoaded) => import('vue-router').RouteLocationRaw) | {
            name?: import('vue-router').RouteRecordNameGeneric;
            params?: import('vue-router').RouteParamsRawGeneric | undefined;
            path?: undefined;
            query?: import('vue-router').LocationQueryRaw | undefined;
            hash?: string | undefined;
            replace?: boolean | undefined;
            force?: boolean | undefined;
            state?: import('vue-router').HistoryState | undefined;
        } | {
            path: string;
            query?: import('vue-router').LocationQueryRaw | undefined;
            hash?: string | undefined;
            replace?: boolean | undefined;
            force?: boolean | undefined;
            state?: import('vue-router').HistoryState | undefined;
        } | undefined;
        props?: import('vue-router')._RouteRecordProps<string | symbol> | Record<string, import('vue-router')._RouteRecordProps<string | symbol>> | undefined;
        path: string;
        alias?: (string | string[]) | undefined;
        name?: import('vue-router').RouteRecordNameGeneric;
        beforeEnter?: (import('vue-router').NavigationGuardWithThis<undefined> | import('vue-router').NavigationGuardWithThis<undefined>[]) | undefined;
    }[], AppRouteRecord[] | {
        id?: number | undefined;
        meta: {
            [x: string]: unknown;
            [x: number]: unknown;
            [x: symbol]: unknown;
            title: string;
            icon?: string | undefined;
            showBadge?: boolean | undefined;
            showTextBadge?: string | undefined;
            isHide?: boolean | undefined;
            isHideTab?: boolean | undefined;
            link?: string | undefined;
            isIframe?: boolean | undefined;
            keepAlive?: boolean | undefined;
            authList?: {
                title: string;
                authMark: string;
            }[] | undefined;
            roles?: string[] | undefined;
            fixedTab?: boolean | undefined;
            activePath?: string | undefined;
            isFullPage?: boolean | undefined;
            isAuthButton?: boolean | undefined;
            authMark?: string | undefined;
            parentPath?: string | undefined;
        };
        children?: any[] | undefined;
        component?: (string | (() => Promise<any>)) | undefined;
        end?: boolean | undefined;
        sensitive?: boolean | undefined;
        strict?: boolean | undefined;
        components?: Record<string, import('vue-router').RouteComponent | (() => Promise<import('vue-router').RouteComponent>)> | null | undefined;
        redirect?: string | ((to: import('vue-router').RouteLocation, from: import('vue-router').RouteLocationNormalizedLoaded) => import('vue-router').RouteLocationRaw) | {
            name?: import('vue-router').RouteRecordNameGeneric;
            params?: import('vue-router').RouteParamsRawGeneric | undefined;
            path?: undefined;
            query?: import('vue-router').LocationQueryRaw | undefined;
            hash?: string | undefined;
            replace?: boolean | undefined;
            force?: boolean | undefined;
            state?: import('vue-router').HistoryState | undefined;
        } | {
            path: string;
            query?: import('vue-router').LocationQueryRaw | undefined;
            hash?: string | undefined;
            replace?: boolean | undefined;
            force?: boolean | undefined;
            state?: import('vue-router').HistoryState | undefined;
        } | undefined;
        props?: import('vue-router')._RouteRecordProps<string | symbol> | Record<string, import('vue-router')._RouteRecordProps<string | symbol>> | undefined;
        path: string;
        alias?: (string | string[]) | undefined;
        name?: import('vue-router').RouteRecordNameGeneric;
        beforeEnter?: (import('vue-router').NavigationGuardWithThis<undefined> | import('vue-router').NavigationGuardWithThis<undefined>[]) | undefined;
    }[]>;
    setSearchHistory: (list: AppRouteRecord[]) => void;
}, "searchHistory">, Pick<{
    searchHistory: import('vue').Ref<{
        id?: number | undefined;
        meta: {
            [x: string]: unknown;
            [x: number]: unknown;
            [x: symbol]: unknown;
            title: string;
            icon?: string | undefined;
            showBadge?: boolean | undefined;
            showTextBadge?: string | undefined;
            isHide?: boolean | undefined;
            isHideTab?: boolean | undefined;
            link?: string | undefined;
            isIframe?: boolean | undefined;
            keepAlive?: boolean | undefined;
            authList?: {
                title: string;
                authMark: string;
            }[] | undefined;
            roles?: string[] | undefined;
            fixedTab?: boolean | undefined;
            activePath?: string | undefined;
            isFullPage?: boolean | undefined;
            isAuthButton?: boolean | undefined;
            authMark?: string | undefined;
            parentPath?: string | undefined;
        };
        children?: any[] | undefined;
        component?: (string | (() => Promise<any>)) | undefined;
        end?: boolean | undefined;
        sensitive?: boolean | undefined;
        strict?: boolean | undefined;
        components?: Record<string, import('vue-router').RouteComponent | (() => Promise<import('vue-router').RouteComponent>)> | null | undefined;
        redirect?: string | ((to: import('vue-router').RouteLocation, from: import('vue-router').RouteLocationNormalizedLoaded) => import('vue-router').RouteLocationRaw) | {
            name?: import('vue-router').RouteRecordNameGeneric;
            params?: import('vue-router').RouteParamsRawGeneric | undefined;
            path?: undefined;
            query?: import('vue-router').LocationQueryRaw | undefined;
            hash?: string | undefined;
            replace?: boolean | undefined;
            force?: boolean | undefined;
            state?: import('vue-router').HistoryState | undefined;
        } | {
            path: string;
            query?: import('vue-router').LocationQueryRaw | undefined;
            hash?: string | undefined;
            replace?: boolean | undefined;
            force?: boolean | undefined;
            state?: import('vue-router').HistoryState | undefined;
        } | undefined;
        props?: import('vue-router')._RouteRecordProps<string | symbol> | Record<string, import('vue-router')._RouteRecordProps<string | symbol>> | undefined;
        path: string;
        alias?: (string | string[]) | undefined;
        name?: import('vue-router').RouteRecordNameGeneric;
        beforeEnter?: (import('vue-router').NavigationGuardWithThis<undefined> | import('vue-router').NavigationGuardWithThis<undefined>[]) | undefined;
    }[], AppRouteRecord[] | {
        id?: number | undefined;
        meta: {
            [x: string]: unknown;
            [x: number]: unknown;
            [x: symbol]: unknown;
            title: string;
            icon?: string | undefined;
            showBadge?: boolean | undefined;
            showTextBadge?: string | undefined;
            isHide?: boolean | undefined;
            isHideTab?: boolean | undefined;
            link?: string | undefined;
            isIframe?: boolean | undefined;
            keepAlive?: boolean | undefined;
            authList?: {
                title: string;
                authMark: string;
            }[] | undefined;
            roles?: string[] | undefined;
            fixedTab?: boolean | undefined;
            activePath?: string | undefined;
            isFullPage?: boolean | undefined;
            isAuthButton?: boolean | undefined;
            authMark?: string | undefined;
            parentPath?: string | undefined;
        };
        children?: any[] | undefined;
        component?: (string | (() => Promise<any>)) | undefined;
        end?: boolean | undefined;
        sensitive?: boolean | undefined;
        strict?: boolean | undefined;
        components?: Record<string, import('vue-router').RouteComponent | (() => Promise<import('vue-router').RouteComponent>)> | null | undefined;
        redirect?: string | ((to: import('vue-router').RouteLocation, from: import('vue-router').RouteLocationNormalizedLoaded) => import('vue-router').RouteLocationRaw) | {
            name?: import('vue-router').RouteRecordNameGeneric;
            params?: import('vue-router').RouteParamsRawGeneric | undefined;
            path?: undefined;
            query?: import('vue-router').LocationQueryRaw | undefined;
            hash?: string | undefined;
            replace?: boolean | undefined;
            force?: boolean | undefined;
            state?: import('vue-router').HistoryState | undefined;
        } | {
            path: string;
            query?: import('vue-router').LocationQueryRaw | undefined;
            hash?: string | undefined;
            replace?: boolean | undefined;
            force?: boolean | undefined;
            state?: import('vue-router').HistoryState | undefined;
        } | undefined;
        props?: import('vue-router')._RouteRecordProps<string | symbol> | Record<string, import('vue-router')._RouteRecordProps<string | symbol>> | undefined;
        path: string;
        alias?: (string | string[]) | undefined;
        name?: import('vue-router').RouteRecordNameGeneric;
        beforeEnter?: (import('vue-router').NavigationGuardWithThis<undefined> | import('vue-router').NavigationGuardWithThis<undefined>[]) | undefined;
    }[]>;
    setSearchHistory: (list: AppRouteRecord[]) => void;
}, never>, Pick<{
    searchHistory: import('vue').Ref<{
        id?: number | undefined;
        meta: {
            [x: string]: unknown;
            [x: number]: unknown;
            [x: symbol]: unknown;
            title: string;
            icon?: string | undefined;
            showBadge?: boolean | undefined;
            showTextBadge?: string | undefined;
            isHide?: boolean | undefined;
            isHideTab?: boolean | undefined;
            link?: string | undefined;
            isIframe?: boolean | undefined;
            keepAlive?: boolean | undefined;
            authList?: {
                title: string;
                authMark: string;
            }[] | undefined;
            roles?: string[] | undefined;
            fixedTab?: boolean | undefined;
            activePath?: string | undefined;
            isFullPage?: boolean | undefined;
            isAuthButton?: boolean | undefined;
            authMark?: string | undefined;
            parentPath?: string | undefined;
        };
        children?: any[] | undefined;
        component?: (string | (() => Promise<any>)) | undefined;
        end?: boolean | undefined;
        sensitive?: boolean | undefined;
        strict?: boolean | undefined;
        components?: Record<string, import('vue-router').RouteComponent | (() => Promise<import('vue-router').RouteComponent>)> | null | undefined;
        redirect?: string | ((to: import('vue-router').RouteLocation, from: import('vue-router').RouteLocationNormalizedLoaded) => import('vue-router').RouteLocationRaw) | {
            name?: import('vue-router').RouteRecordNameGeneric;
            params?: import('vue-router').RouteParamsRawGeneric | undefined;
            path?: undefined;
            query?: import('vue-router').LocationQueryRaw | undefined;
            hash?: string | undefined;
            replace?: boolean | undefined;
            force?: boolean | undefined;
            state?: import('vue-router').HistoryState | undefined;
        } | {
            path: string;
            query?: import('vue-router').LocationQueryRaw | undefined;
            hash?: string | undefined;
            replace?: boolean | undefined;
            force?: boolean | undefined;
            state?: import('vue-router').HistoryState | undefined;
        } | undefined;
        props?: import('vue-router')._RouteRecordProps<string | symbol> | Record<string, import('vue-router')._RouteRecordProps<string | symbol>> | undefined;
        path: string;
        alias?: (string | string[]) | undefined;
        name?: import('vue-router').RouteRecordNameGeneric;
        beforeEnter?: (import('vue-router').NavigationGuardWithThis<undefined> | import('vue-router').NavigationGuardWithThis<undefined>[]) | undefined;
    }[], AppRouteRecord[] | {
        id?: number | undefined;
        meta: {
            [x: string]: unknown;
            [x: number]: unknown;
            [x: symbol]: unknown;
            title: string;
            icon?: string | undefined;
            showBadge?: boolean | undefined;
            showTextBadge?: string | undefined;
            isHide?: boolean | undefined;
            isHideTab?: boolean | undefined;
            link?: string | undefined;
            isIframe?: boolean | undefined;
            keepAlive?: boolean | undefined;
            authList?: {
                title: string;
                authMark: string;
            }[] | undefined;
            roles?: string[] | undefined;
            fixedTab?: boolean | undefined;
            activePath?: string | undefined;
            isFullPage?: boolean | undefined;
            isAuthButton?: boolean | undefined;
            authMark?: string | undefined;
            parentPath?: string | undefined;
        };
        children?: any[] | undefined;
        component?: (string | (() => Promise<any>)) | undefined;
        end?: boolean | undefined;
        sensitive?: boolean | undefined;
        strict?: boolean | undefined;
        components?: Record<string, import('vue-router').RouteComponent | (() => Promise<import('vue-router').RouteComponent>)> | null | undefined;
        redirect?: string | ((to: import('vue-router').RouteLocation, from: import('vue-router').RouteLocationNormalizedLoaded) => import('vue-router').RouteLocationRaw) | {
            name?: import('vue-router').RouteRecordNameGeneric;
            params?: import('vue-router').RouteParamsRawGeneric | undefined;
            path?: undefined;
            query?: import('vue-router').LocationQueryRaw | undefined;
            hash?: string | undefined;
            replace?: boolean | undefined;
            force?: boolean | undefined;
            state?: import('vue-router').HistoryState | undefined;
        } | {
            path: string;
            query?: import('vue-router').LocationQueryRaw | undefined;
            hash?: string | undefined;
            replace?: boolean | undefined;
            force?: boolean | undefined;
            state?: import('vue-router').HistoryState | undefined;
        } | undefined;
        props?: import('vue-router')._RouteRecordProps<string | symbol> | Record<string, import('vue-router')._RouteRecordProps<string | symbol>> | undefined;
        path: string;
        alias?: (string | string[]) | undefined;
        name?: import('vue-router').RouteRecordNameGeneric;
        beforeEnter?: (import('vue-router').NavigationGuardWithThis<undefined> | import('vue-router').NavigationGuardWithThis<undefined>[]) | undefined;
    }[]>;
    setSearchHistory: (list: AppRouteRecord[]) => void;
}, "setSearchHistory">>;
