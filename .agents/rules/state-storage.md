# 状态管理与持久化

[返回主索引](../../AGENTS.md)。本文中的源码路径均相对仓库根目录。

- 包内 Pinia store 仅限 UI 状态三件套（迁移后位于 `src/store/`）：`setting.ts`（主题/菜单/UI 开关，localStorage 持久化）、`app.ts`（弹层临时状态，不持久化）、`worktab.ts`（多标签页 + keepAlive 排除，sessionStorage 持久化）。

- 禁止在包内定义或读取宿主业务 store（user、menu）；菜单数据、用户信息通过 `install` 注入（见 [workflow](workflow.md) 注入契约）。

- `worktab` 的写入点在宿主路由守卫：包导出 `useWorktabStore`，宿主守卫 import 后调用 `setWorktab` / `validateWorktabs`；包内组件只读消费。

- 持久化依赖宿主安装的 `pinia-plugin-persistedstate`（peerDependencies），包内不注册插件；`persist` 类型扩充通过 store 文件内 `import type {} from 'pinia-plugin-persistedstate'` 引入。`key` 使用稳定唯一的语义名称，禁止拼接版本号；部分字段持久化用 `pick`/`omit`。

- 包内禁止直接调用 `localStorage.getItem/setItem/removeItem`；会话级状态用 `sessionStorage`，跨刷新的用户偏好用 `localStorage`。
