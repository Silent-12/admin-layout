# 开发流程与验证

[返回主索引](../../AGENTS.md)。本文中的源码路径均相对仓库根目录。

> 布局源码与Admin模板接入均已完成，后续变更需验证包内预览和Admin模板集成。

## 代码检索与复用

- 布局源码迁移自Admin模板 `admin-template-vue`（`src/views/index/index.vue`、`src/components/layouts/` 等），迁移前先对照模板原实现，保持视觉与交互一致；本包只做解耦改造，不顺带改交互。

## 包边界纪律（核心）

- 布局组件内禁止 import 任何Admin模板业务资源：`user`/`menu` 业务 store、`@/api`、`@/views`（业务页面）、`@/locales`、`@/utils/navigation` 的全局 router 单例。Admin模板数据与能力一律通过 `install` 注入。

- **注入契约（install options）**：`i18n`（Admin模板 vue-i18n 实例，包 merge 内置语言包）、`router`（替代全局 router 单例）、`menuSource`（响应式 menuList / applicationList / homePath）、`language` / `onLanguageChange`（语言引用与切换回调）、`config`（systemName 等参数化配置）。**用户域不注入**：用户信息与登出由Admin模板自行持有，经顶部栏 `#user-avatar` 插槽内容消费。扩展注入项必须更新本文件与 README。

- **插槽契约（AppLayout）**：
  - `#sidebar-header` 作用域插槽（参数 `menuOpen`、`theme`，类型 `SidebarHeaderSlotProps`）用于Admin模板提供侧栏顶部区域内容；未传插槽时该区域留空，包内不再渲染默认 Logo 与系统名称。
  - `#user-avatar` 插槽（无插槽参数）用于Admin模板 / 业务组件提供顶部栏右侧用户头像区的头像内容与交互（下拉菜单、用户中心、登出等）；未传插槽时不渲染容器 `.header-bar__user-avatar`（不残留尾部空白），包内不再内置用户菜单与头像。容器仅保留间距规范（`margin-right: 0.625rem`，≤39.99rem 为 `16px`，`flex-shrink: 0` 且垂直居中）。头像尺寸 / 圆角 / 指针样式与用户数据、登出逻辑均归业务侧（包内无用户域注入，也不再导出 `getUserInfo` / `logout`）。
  - 插槽名与参数属于公开契约，修改需升版本并同步本文件与 README。

- **顶部区域内边距与裁切**：展开态 `.header` 左右内边距取菜单项同级值（`--el-menu-base-level-padding`，默认 20px），并由内层 `.header__inner` 承担溢出裁切，使超长内容在内容盒边界被裁切、不贴左右边缘（若只裁 `.header`，溢出会画进内边距区域而贴边）；折叠态取消左右内边距并居中。省略号需由Admin模板侧实现（插槽根元素 `min-width: 0` + 文本元素 `overflow: hidden` / `text-overflow: ellipsis` / `white-space: nowrap`）。

- **系统名称归属**：`config.systemName` 仅用于浏览器页面标题（`setPageTitle`），侧栏顶部文案由Admin模板经 `#sidebar-header` 插槽自行渲染。

- 包内 UI 状态 store 仅限 `setting`、`app`、`worktab` 三个（随包走）；`worktab` 的写入点在Admin模板路由守卫，包必须导出 `useWorktabStore` 供Admin模板 import。

- 包内禁止使用 `import.meta.glob` 指向包外路径；本地资源（SVG、logo）走注入。

## 开发与预览

- playground 模拟Admin模板注入（菜单数据、用户信息、登出回调、i18n），修改布局后在 playground 验证侧栏、头部、内容区路由视图、worktab、全局搜索（Ctrl+K）、设置面板、通知。

- 包内文案新增/修改时同步 `src/locales/zh.json` 与 `en.json`；Admin模板业务文案（菜单标题等）不属于本包。包内语言包合并进Admin模板 i18n 实例的顶层命名空间为 `setting` / `worktab` / `notice` / `search` / `topBar`，删除或重命名 key 属对外可见的收缩，需同步本文件与 README。

## 完成检查

- 涉及源码改动后必须依次执行 `pnpm run lint`、`pnpm run typecheck` 与 `pnpm run build`；lint 走 `eslint.config.mjs` 的扁平配置（与 admin-template-vue 同套规则，根目录配置同时覆盖 `src/` 与 `playground/`），build 会执行 `scripts/check-dist.mjs` 核对主题底座、布局变量和右键菜单。构建产物 `dist/` 提交进仓库，并确认 d.ts 声明文件完整生成。

- 提交前用 `pnpm run lint:prettier` 统一格式，`pnpm run lint:prettier-check` 校验是否已格式化；`.prettierrc` 与 admin-template-vue 同套规范（2 空格、单引号、无分号、行宽 100、`vueIndentScriptAndStyle`），新增或修改文件不要手工使用与之冲突的缩进与引号风格。

- 修改样式后必须在 playground 分别验证亮色与暗色表现；涉及内容区布局的改动需同时验证 403/404 全屏页（`route.meta.isFullPage`）与 iframe 外链页。

## 发版

- 与 admin-components 一致：整数版本自增（v1、v2…），统一 `pnpm run release`（自动 tag +1、同步 version 与 CHANGELOG、构建提交 dist、打 tag 推送）；包安装后在控制台输出 `[ao-admin-layout] v<版本号>`。
