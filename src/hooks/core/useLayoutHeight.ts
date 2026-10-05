/**
 * useLayoutHeight - 页面布局高度管理
 *
 * 测量头部元素高度并写入 CSS 变量，页面全高由 CSS 组合计算，
 * 脚本不感知具体留白数值，避免间距在脚本与样式两处维护。
 *
 * ## 主要功能
 *
 * 1. 头部高度测量 - 监听头部元素的尺寸变化
 * 2. CSS 变量同步 - 将测量结果写入 --ao-header-height / --ao-content-header-height
 * 3. 留白职责分离 - 内容区留白由各容器自身内边距提供，脚本只负责头部高度
 * 4. 自动查找模式 - 提供通过 ID 自动查找元素的便捷方式
 */

import { ref, watchEffect, onMounted } from 'vue'
import type { Ref } from 'vue'
import { useElementSize } from '@vueuse/core'

/** 头部高度写入的 CSS 变量名，与 app.scss 中 :root 的定义保持同源 */
const HEADER_HEIGHT_CSS_VAR = '--ao-header-height'

/** 内容头部高度写入的 CSS 变量名，与 app.scss 中 :root 的定义保持同源 */
const CONTENT_HEADER_HEIGHT_CSS_VAR = '--ao-content-header-height'

/**
 * @description 测量头部元素高度并同步写入 CSS 变量。
 * 页面全高由 app.scss 依据这些变量组合，脚本不感知留白数值。
 * @param headerRef 头部元素引用
 * @param contentHeaderRef 内容头部元素引用
 * @return 头部与内容头部的高度（响应式）
 */
function useHeaderHeightVars(
  headerRef: Ref<HTMLElement | undefined>,
  contentHeaderRef: Ref<HTMLElement | undefined>
) {
  // 使用 VueUse 自动监听元素尺寸变化
  // box: 'border-box' 使测量结果包含 padding / border，头部内边距与边框会被正确计入
  const { height: headerHeight } = useElementSize(
    headerRef,
    { width: 0, height: 0 },
    { box: 'border-box' }
  )
  const { height: contentHeaderHeight } = useElementSize(
    contentHeaderRef,
    { width: 0, height: 0 },
    { box: 'border-box' }
  )

  watchEffect(() => {
    // 先同步读取，建立响应式依赖后再延迟写入，避免 ResizeObserver loop 警告
    const header = headerHeight.value
    const contentHeader = contentHeaderHeight.value
    if (typeof document === 'undefined') return
    requestAnimationFrame(() => {
      const rootStyle = document.documentElement.style
      rootStyle.setProperty(HEADER_HEIGHT_CSS_VAR, `${header}px`)
      rootStyle.setProperty(CONTENT_HEADER_HEIGHT_CSS_VAR, `${contentHeader}px`)
    })
  })

  return { headerHeight, contentHeaderHeight }
}

/**
 * @description 管理页面头部高度测量，测量结果写入 CSS 变量供 CSS 组合全高使用。
 * 适用于调用方自行持有头部元素引用的场景，需由调用方为返回的 headerRef 赋值。
 * @return 头部元素引用、内容头部元素引用及两者高度（响应式）
 */
export function useLayoutHeight() {
  // 元素引用
  const headerRef = ref<HTMLElement>()
  const contentHeaderRef = ref<HTMLElement>()

  const { headerHeight, contentHeaderHeight } = useHeaderHeightVars(headerRef, contentHeaderRef)

  return {
    /** 头部元素引用 */
    headerRef,
    /** 内容头部元素引用 */
    contentHeaderRef,
    /** 头部高度（响应式） */
    headerHeight,
    /** 内容头部高度（响应式） */
    contentHeaderHeight
  }
}

/**
 * @description 通过 ID 自动查找头部元素，测量其高度并写入 CSS 变量。
 * 适用于无法直接获取元素引用的场景；页面全高由 app.scss 依据写入的变量组合。
 * @param headerIds 头部元素的 ID 数组，依次为头部与内容头部
 * @return 头部元素引用、内容头部元素引用及两者高度（响应式）
 */
export function useAutoLayoutHeight(headerIds: string[] = ['app-header', 'app-content-header']) {
  // 创建元素引用
  const headerRef = ref<HTMLElement>()
  const contentHeaderRef = ref<HTMLElement>()

  const { headerHeight, contentHeaderHeight } = useHeaderHeightVars(headerRef, contentHeaderRef)

  // 在 DOM 挂载后查找元素
  onMounted(() => {
    if (typeof document === 'undefined') return
    // 使用 requestAnimationFrame 确保 DOM 完全渲染
    requestAnimationFrame(() => {
      const header = document.getElementById(headerIds[0])
      const contentHeader = document.getElementById(headerIds[1])

      if (header) {
        headerRef.value = header
      }
      if (contentHeader) {
        contentHeaderRef.value = contentHeader
      }
    })
  })

  return {
    /** 头部元素引用 */
    headerRef,
    /** 内容头部元素引用 */
    contentHeaderRef,
    /** 头部高度（响应式） */
    headerHeight,
    /** 内容头部高度（响应式） */
    contentHeaderHeight
  }
}
