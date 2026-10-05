import { SystemThemeEnum } from '../../enums';
import { MenuThemeType, SystemThemeTypes } from '../../types/store/setting';
export interface ThemeSetting {
    /** 主题名称 */
    name: string;
    /** 系统主题类型 */
    theme: SystemThemeEnum;
    /** 主题颜色数组 */
    color: string[];
    /** 左侧线条颜色 */
    leftLineColor: string;
    /** 右侧线条颜色 */
    rightLineColor: string;
    /** 主题图片 */
    img: string;
}
/**
 * 系统基础配置接口
 * @description 定义系统名称、版本及其他基础信息。
 */
export interface SystemBasicConfig {
    name: string;
    version: string;
    description?: string;
    logo?: string;
    favicon?: string;
    copyright?: string;
}
export interface SystemConfig {
    systemInfo: SystemBasicConfig;
    systemThemeStyles: SystemThemeTypes;
    settingThemeList: ThemeSetting[];
    themeList: MenuThemeType[];
    darkMenuStyles: MenuThemeType[];
    systemMainColor: readonly string[];
    headerBar?: HeaderBarFeatureConfig;
}
/**
 * 环境配置接口
 * @description 定义 Vite 构建和运行时读取的环境变量。
 */
export interface EnvConfig {
    NODE_ENV: string;
    VITE_APP_NAME: string;
    VITE_APP_VERSION: string;
    VITE_PORT: string;
    VITE_BASE_URL: string;
    VITE_API_URL: string;
    VITE_ROUTE_SOURCE: 'static' | 'dynamic';
    VITE_USE_MOCK?: string;
    VITE_USE_GZIP?: string;
    VITE_USE_CDN?: string;
}
export interface AppConfig extends SystemConfig {
    env: EnvConfig;
    isDev: boolean;
    isProd: boolean;
    isTest: boolean;
}
export interface FeatureConfigItem {
    enabled: boolean;
    description: string;
}
export interface HeaderBarFeatureConfig {
    /** 菜单按钮 */
    menuButton: FeatureConfigItem;
    /** 快速入口 */
    fastEnter: FeatureConfigItem;
    /** 全局搜索 */
    globalSearch: FeatureConfigItem;
    /** 全屏功能 */
    fullscreen: FeatureConfigItem;
    /** 通知功能 */
    notification: FeatureConfigItem;
    /** 多语言切换 */
    language: FeatureConfigItem;
    /** 设置面板 */
    settings: FeatureConfigItem;
    /** 主题切换 */
    themeToggle: FeatureConfigItem;
}
