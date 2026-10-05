import { HeaderBarFeatureConfig } from '../../types/config';
/**
 * 顶部栏功能管理
 * @returns 顶部栏功能相关的状态和方法
 */
export declare function useHeaderBar(): {
    headerBarConfig: import('vue').ComputedRef<HeaderBarFeatureConfig>;
    shouldShowMenuButton: import('vue').ComputedRef<boolean>;
    shouldShowFastEnter: import('vue').ComputedRef<boolean>;
    shouldShowGlobalSearch: import('vue').ComputedRef<boolean>;
    shouldShowFullscreen: import('vue').ComputedRef<boolean>;
    shouldShowNotification: import('vue').ComputedRef<boolean>;
    shouldShowLanguage: import('vue').ComputedRef<boolean>;
    shouldShowSettings: import('vue').ComputedRef<boolean>;
    shouldShowThemeToggle: import('vue').ComputedRef<boolean>;
    fastEnterMinWidth: import('vue').ComputedRef<any>;
    isFeatureEnabled: (feature: keyof HeaderBarFeatureConfig) => boolean;
    isFeatureActive: (feature: keyof HeaderBarFeatureConfig) => boolean;
    getFeatureConfig: (feature: keyof HeaderBarFeatureConfig) => import('../../types/config').FeatureConfigItem;
    getFeatureInfo: (feature: keyof HeaderBarFeatureConfig) => import('../../types/config').FeatureConfigItem;
    getEnabledFeatures: () => (keyof HeaderBarFeatureConfig)[];
    getDisabledFeatures: () => (keyof HeaderBarFeatureConfig)[];
    getActiveFeatures: () => (keyof HeaderBarFeatureConfig)[];
    getInactiveFeatures: () => (keyof HeaderBarFeatureConfig)[];
};
