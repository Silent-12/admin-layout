<!-- 顶部栏 -->
<template>
  <div class="header-bar">
    <div class="header-bar__inner">
      <div class="header-bar__left">
        <!--  隐藏的备用 Logo -->
        <AoLogo class="header-bar__logo-hidden" @click="toHome" />

        <!-- 菜单按钮 -->
        <AoIconButton
          v-if="shouldShowMenuButton"
          icon="ri:menu-2-fill"
          class="header-bar__menu-btn"
          @click="visibleMenu"
        />

        <!-- 快速入口 -->
        <AoFastEnter v-if="shouldShowFastEnter && width >= headerBarFastEnterMinWidth">
          <AoIconButton icon="ri:function-line" class="header-bar__fast-enter-btn" />
        </AoFastEnter>

        <!-- 标签页 -->
        <AoWorkTab />
      </div>

      <div class="header-bar__right">
        <!-- 搜索 -->
        <div v-if="shouldShowGlobalSearch" class="search-box" @click="openSearchDialog">
          <div class="search-box__left">
            <AoSvgIcon icon="ri:search-line" class="search-box__icon" />
            <span class="search-box__text">{{ $t('topBar.search.title') }}</span>
          </div>
          <div class="search-box__shortcut">
            <AoSvgIcon v-if="isWindows" icon="vaadin:ctrl-a" class="search-box__shortcut-icon" />
            <AoSvgIcon v-else icon="ri:command-fill" class="search-box__shortcut-icon-mac" />
            <span class="search-box__shortcut-key">k</span>
          </div>
        </div>

        <!-- 全屏按钮 -->
        <AoIconButton
          v-if="shouldShowFullscreen"
          :icon="isFullscreen ? 'ri:fullscreen-exit-line' : 'ri:fullscreen-fill'"
          :class="[
            !isFullscreen ? 'full-screen-btn' : 'exit-full-screen-btn',
            'header-bar__fullscreen-btn'
          ]"
          @click="toggleFullScreen"
        />

        <!-- 国际化按钮 -->
        <ElDropdown
          @command="changeLanguage"
          popper-class="langDropDownStyle"
          v-if="shouldShowLanguage"
        >
          <AoIconButton icon="ri:translate-2" class="language-btn header-bar__language-btn" />
          <template #dropdown>
            <ElDropdownMenu>
              <div v-for="item in languageOptions" :key="item.value" class="lang-btn-item">
                <ElDropdownItem
                  :command="item.value"
                  :class="{ 'is-selected': locale === item.value }"
                >
                  <span class="menu-txt">{{ item.label }}</span>
                  <AoSvgIcon icon="ri:check-fill" v-if="locale === item.value" />
                </ElDropdownItem>
              </div>
            </ElDropdownMenu>
          </template>
        </ElDropdown>

        <!-- 通知按钮 -->
        <AoIconButton
          v-if="shouldShowNotification"
          icon="ri:notification-2-line"
          class="notice-button header-bar__notice-btn"
          @click="visibleNotice"
        >
          <div class="notice-dot"></div>
        </AoIconButton>

        <!-- 设置按钮 -->
        <AoIconButton
          v-if="shouldShowSettings"
          icon="ri:settings-line"
          class="setting-btn"
          @click="openSetting"
        />

        <!-- 主题切换按钮 -->
        <AoIconButton
          v-if="shouldShowThemeToggle"
          @click="themeAnimation"
          :icon="isDark ? 'ri:sun-fill' : 'ri:moon-line'"
        />

        <!-- 用户头像区：内容与交互由Admin模板 / 业务组件经 #user-avatar 插槽提供；未传插槽时不渲染该容器，避免残留尾部间距 -->
        <div v-if="$slots['user-avatar']" class="header-bar__user-avatar">
          <slot name="user-avatar" />
        </div>
      </div>
    </div>

    <!-- 通知 -->
    <AoNotification v-model:value="showNotice" ref="notice" />
  </div>
</template>

<script setup lang="ts">
  import { AoIconButton, AoLogo, AoSvgIcon } from '@ao/admin-components'
  import AoFastEnter from '../AoFastEnter.vue'
  import AoNotification from '../AoNotification.vue'
  import AoWorkTab from '../AoWorkTab.vue'
  import { onMounted, onUnmounted, ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import { ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus'
  import { useI18n } from 'vue-i18n'
  import { useRouter } from 'vue-router'
  import { useFullscreen, useWindowSize } from '@vueuse/core'
  import { LanguageEnum } from '../../enums'
  import { getLanguageRef, getLanguageChangeHandler } from '../../install/context'
  import { useSettingStore } from '../../store/modules/setting'
  import { useAppStore } from '../../store/modules/app'

  // 语言响应式引用与切换回调（Admin模板通过 install 注入）
  const language = getLanguageRef()
  const onLanguageChange = getLanguageChangeHandler()
  import { languageOptions } from '../../config/language'
  import { themeAnimation } from '../../utils/ui/animation'
  import { useCommon } from '../../hooks/core/useCommon'
  import { useHeaderBar } from '../../hooks/core/useHeaderBar'

  defineOptions({ name: 'AoHeaderBar' })

  /**
   * 顶部栏用户头像插槽
   * @description 向Admin模板 / 业务组件开放顶部栏右侧用户头像区的渲染权，头像内容与交互逻辑均由业务侧负责；
   * 未传入插槽内容时该区域留空，包内仅保留间距规范。
   */
  defineSlots<{
    'user-avatar'?: () => any
  }>()

  // 检测操作系统类型
  const isWindows = navigator.userAgent.includes('Windows')
  // 路由实例
  const router = useRouter()
  // 国际化实例
  const { locale } = useI18n()
  // 窗口尺寸
  const { width } = useWindowSize()
  // 状态管理
  const settingStore = useSettingStore()
  // 应用状态管理
  const appStore = useAppStore()
  // 顶部栏功能配置
  const {
    shouldShowMenuButton,
    shouldShowFastEnter,
    shouldShowGlobalSearch,
    shouldShowFullscreen,
    shouldShowNotification,
    shouldShowLanguage,
    shouldShowSettings,
    shouldShowThemeToggle,
    fastEnterMinWidth: headerBarFastEnterMinWidth
  } = useHeaderBar()

  // 状态管理响应式引用
  const { menuOpen, isDark } = storeToRefs(settingStore)
  // 通知面板显示状态
  const showNotice = ref(false)
  // 主题切换动画
  const { isFullscreen, toggle: toggleFullscreen } = useFullscreen()

  onMounted(() => {
    initLanguage()
    document.addEventListener('click', bodyCloseNotice)
  })

  onUnmounted(() => {
    document.removeEventListener('click', bodyCloseNotice)
  })

  /**
   * 切换全屏状态
   */
  const toggleFullScreen = (): void => {
    toggleFullscreen()
  }

  /**
   * 切换菜单显示/隐藏状态
   */
  const visibleMenu = (): void => {
    settingStore.setMenuOpen(!menuOpen.value)
  }

  const { homePath, refresh } = useCommon()

  /**
   * 跳转到首页
   */
  const toHome = (): void => {
    router.push(homePath.value)
  }

  /**
   * 初始化语言设置
   */
  const initLanguage = (): void => {
    locale.value = language.value
  }

  /**
   * 切换系统语言
   * @description 更新当前语言并重载当前页面内容。
   * @param {LanguageEnum} lang - 目标语言类型
   * @return {void} 无返回值
   */
  const changeLanguage = (lang: LanguageEnum): void => {
    if (locale.value === lang) return
    locale.value = lang
    language.value = lang
    onLanguageChange?.(lang)
    setTimeout(refresh, 50)
  }

  /**
   * 打开全局搜索对话框
   */
  const openSearchDialog = (): void => {
    appStore.openGlobalSearch()
  }

  /**
   * 打开设置面板
   */
  const openSetting = (): void => {
    appStore.openSettingsPanel()
  }

  /**
   * 点击页面其他区域关闭通知面板
   * @param {Event} e - 点击事件对象
   */
  const bodyCloseNotice = (e: any): void => {
    if (!showNotice.value) return

    const target = e.target as HTMLElement

    // 检查是否点击了通知按钮或通知面板内部
    const isNoticeButton = target.closest('.notice-button')
    const isNoticePanel = target.closest('.ao-notification-panel')

    if (!isNoticeButton && !isNoticePanel) {
      showNotice.value = false
    }
  }

  /**
   * 切换通知面板显示状态
   */
  const visibleNotice = (): void => {
    showNotice.value = !showNotice.value
  }
</script>

<style lang="scss" scoped>
  @keyframes rotate180 {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(180deg);
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(-5deg);
    }
    50% {
      transform: rotate(5deg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0);
    }
  }

  @keyframes expand {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes shrink {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes moveUp {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-3px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .language-btn:hover :deep(.ao-svg-icon) {
    animation: moveUp 0.4s;
  }

  .full-screen-btn:hover :deep(.ao-svg-icon) {
    animation: expand 0.6s forwards;
  }

  .exit-full-screen-btn:hover :deep(.ao-svg-icon) {
    animation: shrink 0.6s forwards;
  }

  .notice-button:hover :deep(.ao-svg-icon) {
    animation: shake 0.5s ease-in-out;
  }

  .setting-btn:hover :deep(.ao-svg-icon) {
    animation: rotate180 0.5s;
  }

  @media screen and (width <= 768px) {
    .logo2 {
      display: block !important;
    }
  }

  @media screen and (width <= 640px) {
    .btn-box {
      width: 40px;
    }
  }

  // 顶部栏容器（背景与底部边框均引用主题变量，暗色自动适配）
  .header-bar {
    width: 100%;
    background: var(--default-box-color);
    border-bottom: 1px solid var(--ao-card-border);
    &__inner {
      position: relative;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 3.75rem;
      line-height: 3.75rem;
      user-select: none;
    }
    &__left {
      display: flex;
      flex: 1 1 0%;
      align-items: center;
      min-width: 0;
      line-height: 3.75rem;
    }
    // 隐藏的备用 Logo
    &__logo-hidden {
      display: none !important;
      padding-left: 0.875rem;
      overflow: hidden;
      vertical-align: -0.15em;
      fill: currentcolor;
    }
    // 菜单按钮
    &__menu-btn {
      margin-left: 0.625rem;
      @media (width <= 39.99rem) {
        margin-left: 7px;
      }
    }
    // 快速入口按钮
    &__fast-enter-btn {
      margin-left: 0.75rem;
    }
    // 右侧操作区
    &__right {
      display: flex;
      gap: 0.625rem;
      align-items: center;
    }
    // 全屏按钮
    &__fullscreen-btn {
      margin-left: 0.75rem;
      @media (width <= 47.99rem) {
        display: none !important;
      }
    }
    // 国际化按钮
    &__language-btn {
      font-size: 19px;
    }
    // 通知按钮
    &__notice-btn {
      position: relative;
    }
    // 用户头像区：仅保留间距规范，头像内容与交互由业务侧经 #user-avatar 插槽提供
    &__user-avatar {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      margin-right: 0.625rem;
      @media (width <= 39.99rem) {
        margin-right: 16px;
      }
    }
  }

  // 通知红点
  .notice-dot {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 0.375rem;
    height: 0.375rem;
    background: var(--ao-danger) !important;
    border-radius: 9999px;
  }

  // 搜索框
  .search-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 10rem;
    height: 2.25rem;
    padding-right: 0.625rem;
    padding-left: 0.625rem;
    cursor: pointer;
    border: 1px solid var(--ao-gray-400);
    border-radius: calc(var(--custom-radius) / 2 + 2px);
    @media (width <= 47.99rem) {
      display: none !important;
    }
    // 左侧图标与文字：显式 flex 居中，避免继承 header 的 60px 行高导致二者基线错位
    &__left {
      display: flex;
      align-items: center;
    }
    // 搜索图标
    &__icon {
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: var(--ao-gray-500);
    }
    // 搜索文字
    &__text {
      margin-left: 0.25rem;
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1rem;
      color: var(--ao-gray-500);
    }
    // 快捷键容器
    &__shortcut {
      display: flex;
      align-items: center;
      height: 1.25rem;
      padding-right: 0.375rem;
      padding-left: 0.375rem;
      color: color-mix(in srgb, var(--ao-gray-500) 80%, transparent);
      border: 1px solid var(--ao-gray-400);
      border-radius: 0.25rem;
    }
    // Windows 快捷键图标
    &__shortcut-icon {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    // Mac 快捷键图标
    &__shortcut-icon-mac {
      font-size: 0.75rem;
      line-height: 1rem;
    }
    // 快捷键文字
    &__shortcut-key {
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }
</style>
