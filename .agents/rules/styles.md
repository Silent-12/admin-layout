# SCSS 与深色模式

[返回主索引](../../AGENTS.md)。本文中的源码路径均相对仓库根目录。

- 包自带布局样式底座（迁移后位于 `src/styles/`）：`theme.scss`（亮色 CSS 变量）、`dark.scss`（暗色覆盖，含 Element Plus 官方暗色导入）、`app.scss`（`--ao-header-height` 等 `--ao-*` 布局变量）、`router-transition.scss`（页面切换动画）、`theme-transition.scss`（View Transition 圆形扩散）、`mixin.scss`（包内混入，替代宿主 `@styles/mixin.scss`）。

- 样式入口由包统一导出，宿主在业务样式**之前**引入；包内组件样式写在 SFC `<style scoped lang="scss">` 或同名 `style.scss` / `theme.scss`。

- 包内布局骨架类（`.ao-page-view`、`.ao-full-height` 等）的盒模型与高度由包自身声明保证，不依赖宿主 reset：宿主未引入全局 `* { box-sizing: border-box }` 时骨架仍须表现正确。这类规则属于骨架自洽，不适用「reset 与 Element Plus 基础样式由宿主承担」（见 `src/styles/index.scss`）。playground 引入的宿主 reset 镜像会覆盖同名效果，验证此类规则需在未引入 reset 的环境中进行。

- 样式中的颜色必须引用 CSS 变量（`:root` 亮色与 `.dark` 暗色成对定义），变量清单见 [CSS 变量速查](../references/css-variables.md)；新增变量定义在本包 `theme.scss` 的 `:root` 与 `.dark` 中成对新增，并同时评估对宿主业务页面的影响（该变量会随包下发到所有下游系统）。

- Vue 组件 `<style scoped>` 的 class 命名：一个顶层模块 class 作为作用域入口 + 内部简短语义命名（`left`/`right`/`header`/`body`/`item`/`title` 等）；仅跨组件复用、Element Plus 深度覆盖等场景使用完整 BEM。

- 同一 BEM 前缀的选择器优先 SCSS 嵌套（`&__*`、`&--*`），但只有编译后选择器与原选择器完全一致时才能嵌套；全局选择器、Element Plus 覆盖、动画、主题样式必须保留原有作用域，必要时用 `& &__header` 显式保持语义。不重命名现有 class、不改变声明数值、动画、层级与响应式断点。

- 涉及文本截断、溢出隐藏时优先使用包内 `mixin.scss` 的 `@include ellipsis` / `@include ellipsis($rowCount)`，禁止手写重复的 overflow 声明。

## 深色模式适配强制检查规则

宿主通过切换 `<html>` 的 `class="dark"` 切换主题。**新增或修改任何 `.vue` / `.scss` 文件时必须检查：**

1. 扫描 `<style>` 块中的裸色值（`#fff`、`#000`、`rgba(0,0,0,...)` 等）。
2. `transparent`、`rgba(0,0,0,0)` 等无视觉影响的颜色可豁免；确需固定不随主题变化的颜色必须注释原因。
3. 检测到硬编码颜色时，直接列出文件、行号与建议替换的 CSS 变量名，无需等待确认。
4. 修改样式后必须在 playground 分别验证亮色与暗色表现（见 [开发流程与验证](workflow.md)）。
