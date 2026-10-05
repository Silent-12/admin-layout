# 开发流程与验证

[返回主索引](../../AGENTS.md)。本文中的源码路径均相对仓库根目录。

> 布局源码已迁移完成（阶段 3）；宿主模板尚未切换到本包（阶段 4 待做）。

## 代码检索与复用

- 布局源码迁移自宿主模板 `admin-template-vue`（`src/views/index/index.vue`、`src/components/layouts/` 等），迁移前先对照模板原实现，保持视觉与交互一致；本包只做解耦改造，不顺带改交互。

## 包边界纪律（核心）

- 布局组件内禁止 import 任何宿主业务资源：`user`/`menu` 业务 store、`@/api`、`@/views`（业务页面）、`@/locales`、`@/utils/navigation` 的全局 router 单例。宿主数据与能力一律通过 `install` 注入。

- **注入契约（install options）**：`i18n`（宿主 vue-i18n 实例，包 merge 内置语言包）、`router`（替代全局 router 单例）、`menuSource`（响应式 menuList / applicationList / homePath）、`userInfo`（只读用户信息）、`onLogout`（登出回调，替代 store 内部耦合路由守卫）、`config`（systemName 等参数化配置）。扩展注入项必须更新本文件与 README。

- 包内 UI 状态 store 仅限 `setting`、`app`、`worktab` 三个（随包走）；`worktab` 的写入点在宿主路由守卫，包必须导出 `useWorktabStore` 供宿主 import。

- 包内禁止使用 `import.meta.glob` 指向包外路径；本地资源（SVG、logo）走注入。

## 开发与预览

- playground 模拟宿主注入（菜单数据、用户信息、登出回调、i18n），修改布局后在 playground 验证侧栏、头部、内容区路由视图、worktab、全局搜索（Ctrl+K）、设置面板、通知。

- 包内文案新增/修改时同步 `src/locales/zh.json` 与 `en.json`；宿主业务文案（菜单标题等）不属于本包。

## 完成检查

- 涉及源码改动后必须依次执行 `pnpm run typecheck` 与 `pnpm run build`；构建产物 `dist/` 提交进仓库，并确认 d.ts 声明文件完整生成。

- 修改样式后必须在 playground 分别验证亮色与暗色表现；涉及内容区布局的改动需同时验证 403/404 全屏页（`route.meta.isFullPage`）与 iframe 外链页。

## 发版

- 与 admin-components 一致：整数版本自增（v1、v2…），统一 `pnpm run release`（自动 tag +1、同步 version 与 CHANGELOG、构建提交 dist、打 tag 推送）；包安装后在控制台输出 `[ao-admin-layout] v<版本号>`。
