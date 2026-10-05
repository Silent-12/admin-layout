/**
 * 设置面板核心逻辑管理
 */
export declare function useSettingsPanel(): {
    showDrawer: import('vue').Ref<boolean, boolean>;
    useThemeHandlers: () => {
        initSystemColor: () => void;
        initSystemTheme: () => void;
        listenerSystemTheme: () => () => void;
    };
    useResponsiveLayout: () => {
        stopWatch: import('vue').WatchHandle;
    };
    useDrawerControl: () => {
        handleOpen: () => void;
        handleClose: () => void;
        closeDrawer: () => void;
    };
    usePropsWatcher: (props: {
        open?: boolean;
    }) => void;
    useSettingsInitializer: () => {
        initializeSettings: () => void;
        cleanupSettings: () => void;
    };
};
