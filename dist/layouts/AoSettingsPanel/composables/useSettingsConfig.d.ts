/**
 * 设置项配置选项管理
 */
export declare function useSettingsConfig(): {
    configOptions: {
        mainColors: readonly string[];
        themeList: import('../../../types/config').ThemeSetting[];
    };
    basicSettingsConfig: import('vue').ComputedRef<({
        key: string;
        label: string;
        type: "switch";
        handler: string;
    } | {
        key: string;
        label: string;
        type: "switch";
        handler: string;
    } | {
        key: string;
        label: string;
        type: "switch";
        handler: string;
    } | {
        key: string;
        label: string;
        type: "switch";
        handler: string;
    } | {
        key: string;
        label: string;
        type: "switch";
        handler: string;
    })[]>;
};
