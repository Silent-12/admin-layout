# @ao/admin-layout

后台管理系统公共布局包：AppLayout 布局骨架（`#app-sidebar` / `#app-main` / `#app-header` / `#app-content` / `#app-global`）、侧栏菜单、头部栏、内容区路由视图、worktab 多标签、全局搜索、设置面板、通知、快速入口，以及亮/暗主题样式底座。业务数据由Admin模板持有，本包只渲染注入的数据与内容区。

依赖公共组件包 `@ao/admin-components`。

## 安装

```bash
pnpm add @ao/admin-layout@git+https://github.com/Silent-12/admin-layout.git#v1
```

## 使用

```typescript
import { AdminLayout } from '@ao/admin-layout'
import '@ao/admin-layout/styles.css'

app.use(AdminLayout, {
  i18n,                     // Admin模板 vue-i18n 实例，包内置语言包会合并进去
  router,                   // Admin模板 vue-router 实例
  menuSource: () => ({      // 菜单数据（Admin模板路由装配完成后提供）
    menuList: menuStore.menuList,
    applicationList: menuStore.applicationList,
    currentApplication: menuStore.currentApplication,
    homePath: menuStore.getHomePath()
  }),
  userInfo: () => userStore.info,             // 用户信息（只读展示）
  language: toRef(userStore, 'language'),     // 语言响应式引用
  onLanguageChange: (lang) => { ... },        // 语言切换回调（同步 i18n / 持久化）
  onLogout: () => userStore.logOut(),         // 登出回调
  config: { systemName: '后台管理系统' }
})
```

安装成功后控制台会输出 `[ao-admin-layout] v1`，用于确认升级是否生效。

## 契约约定

- 下游只允许从包入口导入；`install` 注入接口（`AdminLayoutOptions`）与布局锚点 ID、`--ao-*` CSS 变量是公开契约，修改属于破坏性变更。
- `AppLayout` 提供 `#sidebar-header` 作用域插槽（参数 `menuOpen`、`theme`，类型 `SidebarHeaderSlotProps`），侧栏顶部区域内容由Admin模板提供；未传插槽时该区域留空。
- 侧栏顶部区域（`#sidebar-header`）的包内默认行为：展开态高度 60px、内容垂直居中、左右内边距与菜单项同级（`--el-menu-base-level-padding`，默认 20px）；超长内容在内容盒边界被裁切，不会贴到容器左右边缘；折叠态取消左右内边距并整体居中（64px 下再留内边距会压窄并裁切品牌内容）；移动端（≤800px）高度 50px，关闭态不渲染该区域。
- 需Admin模板自行处理的事项：① 内容高度不超过当前状态高度（展开 60px、移动端 50px），超出会被裁切；② 折叠态（插槽参数 `menuOpen === false`）只保留图标类内容，64px 宽度放不下文字；③ 不要自设左右内边距（会与包内默认值叠加）；④ 需要省略号而非硬裁时，插槽根元素设 `min-width: 0`，文本元素使用 `overflow: hidden` + `text-overflow: ellipsis` + `white-space: nowrap`。
- `config.systemName` 仅用于浏览器页面标题（`setPageTitle`），不参与侧栏渲染。
- 侧栏宽度由 `--ao-sidebar-width`（展开）与 `--ao-sidebar-collapse-width`（折叠）统一控制，侧栏菜单与顶部区域共同引用；Admin模板可覆盖这两个变量调整侧栏尺寸。
- 包内 UI 状态 store 仅 `setting` / `app` / `worktab`；`worktab` 由Admin模板路由守卫写入（包导出 `useWorktabStore`）。
- 菜单数据、用户信息、业务页面、登录页、路由守卫均属于Admin模板。

## 升级

```bash
# 包仓库发版（版本自动 +1：v1 → v2）
pnpm run release

# 下游升级：package.json 中 tag 号改为 #v2 后
pnpm install
```

## 开发

```bash
pnpm install
pnpm build          # 库模式构建，产物提交进仓库
pnpm typecheck      # vue-tsc 类型检查
pnpm lint           # ESLint 静态检查（与 admin-template-vue 同套规则）
pnpm lint:prettier  # Prettier 格式化源码
cd playground && pnpm dev   # 布局预览（模拟Admin模板注入）
```
