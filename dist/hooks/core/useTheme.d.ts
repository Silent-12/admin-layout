import { SystemThemeEnum } from '../../enums';
export declare function useTheme(): {
    setSystemTheme: (theme: SystemThemeEnum, themeMode?: SystemThemeEnum) => void;
    setSystemAutoTheme: () => void;
    switchThemeStyles: (theme: SystemThemeEnum) => void;
    prefersDark: import('vue').ComputedRef<boolean>;
};
/**
 * 初始化主题系统
 */
export declare function initializeTheme(): void;
