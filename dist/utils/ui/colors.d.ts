/**
 * 颜色转换结果接口
 */
interface RgbaResult {
    red: number;
    green: number;
    blue: number;
    rgba: string;
}
/**
 * 获取CSS变量值（别名函数）
 * @param name CSS变量名
 * @returns CSS变量值
 */
export declare function getCssVar(name: string): string;
/**
 * 将hex颜色转换为RGBA
 * @param hex hex颜色值 (支持 #FFF 或 #FFFFFF 格式)
 * @param opacity 透明度 (0-1)
 * @returns 包含RGB值和RGBA字符串的对象
 */
export declare function hexToRgba(hex: string, opacity: number): RgbaResult;
/**
 * 将hex颜色转换为RGB数组
 * @param hexColor hex颜色值
 * @returns RGB数组 [r, g, b]
 */
export declare function hexToRgb(hexColor: string): number[];
/**
 * 将RGB颜色转换为hex
 * @param r 红色值 (0-255)
 * @param g 绿色值 (0-255)
 * @param b 蓝色值 (0-255)
 * @returns hex颜色值
 */
export declare function rgbToHex(r: number, g: number, b: number): string;
/**
 * 颜色混合
 * @param color1 第一个颜色
 * @param color2 第二个颜色
 * @param ratio 混合比例 (0-1)
 * @returns 混合后的颜色
 */
export declare function colorBlend(color1: string, color2: string, ratio: number): string;
/**
 * 获取变浅的颜色
 * @param color 原始颜色
 * @param level 变浅程度 (0-1)
 * @param isDark 是否为暗色主题
 * @returns 变浅后的颜色
 */
export declare function getLightColor(color: string, level: number, isDark?: boolean): string;
/**
 * 获取变深的颜色
 * @param color 原始颜色
 * @param level 变深程度 (0-1)
 * @returns 变深后的颜色
 */
export declare function getDarkColor(color: string, level: number): string;
/**
 * 处理 Element Plus 主题颜色
 * @param theme 主题颜色
 * @param isDark 是否为暗色主题
 */
export declare function handleElementThemeColor(theme: string, isDark?: boolean): void;
/**
 * 设置 Element Plus 主题颜色
 * @param color 主题颜色
 */
export declare function setElementThemeColor(color: string): void;
export {};
