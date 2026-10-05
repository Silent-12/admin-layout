# 项目定位

- 本仓库是后台管理系统公共布局包 `@ao/admin-layout`，从宿主模板 `admin-template-vue` 抽离布局骨架：AppLayout（`#app-sidebar` / `#app-main` / `#app-header` / `#app-content` / `#app-global`）、侧栏菜单、头部栏、内容区路由视图、worktab、全局搜索、设置面板、通知等。业务数据（菜单、用户、路由注册、业务页面）由下游系统持有，本包只渲染注入的数据与内容区。
- 技术栈：Vue 3、Vite（库模式）、TypeScript、Pinia、Element Plus、vue-i18n、SCSS；依赖公共组件包 `@ao/admin-components`（git tag 依赖）。
- 使用 `pnpm`，Node.js 要求 `>=20.19.0`；开发与调试命令兼容 Windows PowerShell。

# 当前状态

- **阶段 3 已完成**：布局源码已从宿主模板迁移至本包（layouts/store/hooks/config/locales/styles），`install` 注入接口与 playground 均已就绪，`pnpm build` 与 `pnpm typecheck` 通过。剩余工作为阶段 4：宿主模板切换到本包并回归。

# 规则加载与优先级

- 项目内规则优先级：本文件 > 专项 rules > skills 与参考资料；系统、开发者指令和用户明确要求按各自优先级执行。
- 开始任务先读 [开发流程与验证](.agents/rules/workflow.md)；分析、编写、修改或审查相关内容前，按下表显式读取**所有匹配项**。跨主题任务累加加载，影响范围扩大时补读；当前会话已读且未变更的文件可复用。
- 详细约束集中在 `rules/`，任务流程放在 `skills/`，速查资料放在 `references/`。
- 若规则与实际目录或实现不符，以仓库现状为准，先同步更新对应规则及索引再继续。

# 核心约定

- **包边界（最高优先级）**：布局组件内禁止依赖宿主业务资源（user/menu 业务 store、api、views 业务页面、locales、全局 router 单例）；宿主数据与能力通过 `install` 注入（`i18n`、`router`、`menuSource`、`userInfo`、`onLogout`、`config`）。下游只允许从包入口 `@ao/admin-layout` 导入，禁止深引 `src` 内部路径。
- **UI 状态 store 三件套随包走**：`setting`、`app`、`worktab`；`worktab` 由宿主路由守卫写入，包导出 `useWorktabStore`。禁止在包内定义宿主业务 store。
- **DOM/CSS 契约内聚**：布局锚点 ID（`#app-main` 等）与 `--ao-*` CSS 变量的生产消费都在本包内；锚点与变量名是 admin-components 滚动能力及宿主页面的隐式契约，修改属于破坏性变更。
- 依赖纪律：`vue`、`element-plus`、`pinia`、`vue-i18n`、`@vueuse/core`、`pinia-plugin-persistedstate` 为 peerDependencies；`@ao/admin-components` 为 git tag 依赖。
- 包内置 zh/en 语言包（布局框架文案），由 `install` 合并进宿主 vue-i18n 实例；宿主业务文案（菜单标题等）不属于本包。
- 样式自带布局底座（theme/dark/app/router-transition/theme-transition/mixin），宿主在业务样式前引入；颜色一律引用 CSS 变量，兼容暗色模式。
- 版本与发版：整数版本自增（v1、v2…），统一 `pnpm run release`；`dist/` 提交进仓库；包安装后控制台输出 `[ao-admin-layout] v<版本号>`。

# 按需加载索引

| 级别 / 任务触发条件 | 必须读取 |
| --- | --- |
| 通用：所有任务 | [开发流程与验证](.agents/rules/workflow.md) |
| 专项：编写、修改、重构或审查代码 | [编码与注释](.agents/rules/coding.md)、[Ponytail](.agents/rules/ponytail.md)、[Karpathy Guidelines](.agents/skills/karpathy-guidelines/SKILL.md) |
| 专项：新增或修改类型声明、类型注释 | [类型定义](.agents/rules/typescript.md)、[TypeDoc 技能](.agents/skills/typedoc-style/SKILL.md) |
| 专项：目录、组件、注入接口或依赖调整 | [目录与组件结构](.agents/rules/module-structure.md) |
| 专项：Store、持久化或本地存储 | [状态管理与持久化](.agents/rules/state-storage.md) |
| 专项：新增或修改任何 Vue / SCSS 文件，或整理样式 | [SCSS 与深色模式](.agents/rules/styles.md) |
| 技能：移除功能及关联资源 | [Feature Removal](.agents/skills/feature-removal/SKILL.md) |
| 技能：审查当前未提交改动 | [Code Review](.agents/skills/code-review/SKILL.md)，并加载改动涉及的专项规则 |
| 技能：提交或生成提交信息 | [Git 提交规范](.agents/rules/git-commit-message.md)、[Commit Msg](.agents/skills/commit-msg/SKILL.md) |
| 技能：根据指定提交生成改动或测试说明 | [Git Commit Changelog](.agents/skills/git-commit-changelog/SKILL.md) |
| 参考：查询颜色、阴影、暗色变量及工具类 | [CSS 变量速查](.agents/references/css-variables.md) |
