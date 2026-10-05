import { SystemThemeEnum, MenuThemeEnum } from '../enums';
/**
 * 系统设置默认值配置
 */
export declare const SETTING_DEFAULT_CONFIG: {
    /** 菜单是否展开 */
    menuOpen: boolean;
    /** 系统主题类型 */
    systemThemeType: SystemThemeEnum;
    /** 系统主题模式 */
    systemThemeMode: SystemThemeEnum;
    /** 菜单风格 */
    menuThemeType: MenuThemeEnum;
    /** 系统主题颜色 */
    systemThemeColor: string;
    /** 是否显示菜单按钮 */
    showMenuButton: boolean;
    /** 是否显示快速入口 */
    showFastEnter: boolean;
    /** 是否显示工作台标签 */
    showWorkTab: boolean;
    /** 是否显示语言切换 */
    showLanguage: boolean;
    /** 是否显示通知入口 */
    showNotification: boolean;
    /** 是否显示设置引导 */
    showSettingGuide: boolean;
    /** 是否唯一展开 */
    uniqueOpened: boolean;
    /** 是否刷新 */
    refresh: boolean;
};
/**
 * 获取设置默认值
 * @returns 设置默认值对象
 */
export declare function getSettingDefaults(): {
    /** 菜单是否展开 */
    menuOpen: boolean;
    /** 系统主题类型 */
    systemThemeType: SystemThemeEnum;
    /** 系统主题模式 */
    systemThemeMode: SystemThemeEnum;
    /** 菜单风格 */
    menuThemeType: MenuThemeEnum;
    /** 系统主题颜色 */
    systemThemeColor: string;
    /** 是否显示菜单按钮 */
    showMenuButton: boolean;
    /** 是否显示快速入口 */
    showFastEnter: boolean;
    /** 是否显示工作台标签 */
    showWorkTab: boolean;
    /** 是否显示语言切换 */
    showLanguage: boolean;
    /** 是否显示通知入口 */
    showNotification: boolean;
    /** 是否显示设置引导 */
    showSettingGuide: boolean;
    /** 是否唯一展开 */
    uniqueOpened: boolean;
    /** 是否刷新 */
    refresh: boolean;
};
/**
 * 重置为默认设置
 * @param currentSettings 当前设置对象
 */
export declare function resetToDefaults(currentSettings: Record<string, any>): void;
