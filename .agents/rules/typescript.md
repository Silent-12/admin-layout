# 类型定义

[返回主索引](../../AGENTS.md)。本文中的源码路径均相对仓库根目录。

- 对外公开的 TS 类型定义统一放在 `src/types/` 下按域分文件（如 `router.ts` 布局相关路由类型、`config.ts` 安装选项类型）；新增类型前先复用现有文件与命名方式。

- `install` 注入接口（`AdminLayoutOptions`：i18n、router、menuSource、userInfo、onLogout、config）是对外契约的一部分，类型定义必须从 `src/index.ts` 出口导出，字段变更按破坏性改动对待。

- SFC 内不定义对外类型：Props 契约与插槽/事件相关类型归位 `src/types/`，SFC 内 `import type` 使用；仅包内部消费的类型可留在组件文件内。

- TypeScript 类型定义文件（`.ts` / `.d.ts`）的注释规则：`type`、`interface`、`class` 等类型声明前仅保留一段 JSDoc，第一行写简短说明，使用 `@description` 补充用途；字段注释统一使用字段上方的单行 `//` 注释。类型声明前禁止额外添加与 JSDoc 重复的 `//` 标题注释。

- d.ts 生成约束：公开类型禁止依赖包外路径或宿主专属模块；`vite build` 的 dts 步骤报私有类型名（TS4082）或不可移植推断（TS2742）时，把类型显式化或移入 `src/types/`，而不是关闭检查。

类型注释示例见 [typedoc-style](../skills/typedoc-style/SKILL.md)。
