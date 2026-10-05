/**
 * 配置图片资源
 *
 * 统一管理设置中心使用的预览图片资源。
 * 包含主题样式、菜单风格的预览图。
 *
 * - themeStyles: 系统主题预览图（亮色/暗色/自动）
 * - menuStyles: 菜单风格预览图（设计/暗色/亮色）
 */
/**
 * 配置中心图片资源对象
 */
export declare const configImages: {
    /** 系统主题预览图 */
    themeStyles: {
        /** 亮色主题 */
        light: string;
        /** 暗色主题 */
        dark: string;
        /** 自动主题（跟随系统） */
        system: string;
    };
    /** 菜单风格预览图 */
    menuStyles: {
        /** 设计风格 */
        design: string;
        /** 暗色风格 */
        dark: string;
        /** 亮色风格 */
        light: string;
    };
};
