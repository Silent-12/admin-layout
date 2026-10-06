# 目录与组件结构

[返回主索引](../../AGENTS.md)。本文中的源码路径均相对仓库根目录。

> 布局源码已按以下结构迁移完成，本文件为现行规则。

## 包目录（目标）

```
src/
├─ layouts/     # 布局骨架：AppLayout.vue（原Admin模板 views/index/index.vue）、AoSidebarMenu/、AoHeaderBar/、
│               # AoPageContent.vue、AoGlobalComponent.vue、AoGlobalSearch.vue、AoNotification.vue、
│               # AoSettingsPanel/、AoWorkTab.vue、AoFastEnter.vue
├─ store/       # UI 状态 store：setting.ts、app.ts、worktab.ts（随包走）
├─ hooks/       # useHeaderBar、useLayoutHeight、useTheme、useCommon 布局侧
├─ config/      # headerBar.ts、component.ts、SETTING_DEFAULT_CONFIG、themeList（参数化项走 install options）
├─ locales/     # 包内置 zh/en 语言包（菜单框架、worktab、设置面板、通知文案）
├─ styles/      # theme.scss、dark.scss、app.scss 布局骨架段（--ao-* 变量）、router-transition、theme-transition、mixin.scss
├─ directives/  # ripple（AoNotification 使用）
└─ index.ts     # install(app, options) 注入接口 + 版本号输出
playground/    # 预览应用（模拟Admin模板注入）
scripts/       # release.mjs 发版脚本
dist/          # 构建产物（提交进仓库）
```

## 组件约定

- 组件文件大驼峰命名；含子组件的组件保留目录 + `index.vue` 入口，私有样式同名 `style.scss` / `theme.scss`。

- 包内显式 import 子组件（不依赖 unplugin 自动导入）；依赖 `@ao/admin-components`（git tag 依赖）使用其 base 组件（AoSvgIcon、AoIconButton、AoLogo）与 install 注入能力。

- **DOM/CSS 契约内聚**：`#app-sidebar` / `#app-main` / `#app-header` / `#app-content` / `#app-global` 锚点、`--ao-header-height` 等 CSS 变量的生产与消费都必须在本包内完成；修改锚点 ID 或变量名属于破坏性变更，需同步 README 契约并升版本。

- 贴边表格页面通过根容器 `page-flush-table` 与直接子级主体 `AoTable` 的 `page-main-table` 类名接入；重复外框统一在 `src/styles/app.scss` 处理，按顶栏、内容头部、侧栏是否实际相接及移动端断点限定作用范围，排除全屏路由。有间距页面、独立卡片、嵌套与弹窗表格不得套用此约定，示例见 README。

- 布局与业务解耦约定：菜单树、用户信息、业务页面组件属于Admin模板；本包只渲染注入的数据与 `<RouterView>` 内容区。`RoutePath.LayoutComponent` 字符串约定与Admin模板路由装配保持一致，修改需升版本。

## playground 约定

- playground 模拟Admin模板注入全量选项，验证矩阵覆盖：登录后布局、菜单折叠、语言/主题切换、worktab 增删固定、全局搜索、设置面板、通知面板、快速入口、iframe 页与全屏页。
