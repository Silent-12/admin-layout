/**
 * 全局应用状态管理
 * 管理设置面板、全局搜索等临时 UI 状态
 */
export declare const useAppStore: import('pinia').StoreDefinition<"appStore", Pick<{
    showSettingsPanel: import('vue').Ref<boolean, boolean>;
    showGlobalSearch: import('vue').Ref<boolean, boolean>;
    openSettingsPanel: () => void;
    closeSettingsPanel: () => void;
    openGlobalSearch: () => void;
    closeGlobalSearch: () => void;
}, "showSettingsPanel" | "showGlobalSearch">, Pick<{
    showSettingsPanel: import('vue').Ref<boolean, boolean>;
    showGlobalSearch: import('vue').Ref<boolean, boolean>;
    openSettingsPanel: () => void;
    closeSettingsPanel: () => void;
    openGlobalSearch: () => void;
    closeGlobalSearch: () => void;
}, never>, Pick<{
    showSettingsPanel: import('vue').Ref<boolean, boolean>;
    showGlobalSearch: import('vue').Ref<boolean, boolean>;
    openSettingsPanel: () => void;
    closeSettingsPanel: () => void;
    openGlobalSearch: () => void;
    closeGlobalSearch: () => void;
}, "openSettingsPanel" | "closeSettingsPanel" | "openGlobalSearch" | "closeGlobalSearch">>;
