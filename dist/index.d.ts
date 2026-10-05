import { Plugin } from 'vue';
import { version } from './version';
import { default as AppLayout } from './layouts/AppLayout.vue';
/**
 * 布局包插件
 * @description 安装时在控制台静默输出版本号，合并内置语言包并保存Admin模板注入的上下文。
 */
export declare const AdminLayout: Plugin;
export { version };
export { AppLayout };
export { useSettingStore } from './store/modules/setting';
export { useAppStore } from './store/modules/app';
export { useWorktabStore } from './store/modules/worktab';
export { useTheme, initializeTheme } from './hooks/core/useTheme';
export { useHeaderBar } from './hooks/core/useHeaderBar';
export { useCommon } from './hooks/core/useCommon';
export { useAutoLayoutHeight, useLayoutHeight } from './hooks/core/useLayoutHeight';
export { formatMenuTitle, setPageTitle } from './utils/router';
export { handleMenuJump, openExternalLink } from './utils/navigation/jump';
export { getFirstMenuPath, findApplicationByPath } from './utils/navigation/route';
export * from './install/context';
export type { AdminLayoutOptions, MenuSource, LayoutUserInfo, LanguageChangeHandler } from './install/context';
export type { SidebarHeaderSlotProps } from './types/layout';
