import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'

const css = readFileSync(new URL('../dist/index.css', import.meta.url), 'utf8')
const js = readFileSync(new URL('../dist/index.js', import.meta.url), 'utf8')

assert.match(css, /--ao-gray-100\s*:/, '发布样式必须包含公共主题变量')
assert.match(css, /--ao-full-height\s*:/, '发布样式必须包含布局高度变量')
assert.match(css, /html\.dark/, '发布样式必须包含 Element Plus 暗色底座')
assert.match(css, /\.context-menu/, '发布样式必须包含标签页右键菜单')
assert.doesNotMatch(css, /\$bg-animation-color/, '主题动画颜色不能包含未编译的 Sass 变量')
assert.doesNotMatch(js, /\w+\(["']AoMenuRight["']\)/, '右键菜单必须显式导入，不得依赖宿主全局注册')
assert.ok(existsSync(new URL('../dist/layouts/AoWorkTab.vue.d.ts', import.meta.url)))
console.info('布局包发布产物检查通过')
