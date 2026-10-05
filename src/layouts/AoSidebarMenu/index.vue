<!-- 左侧菜单 -->
<template>
  <div class="layout-sidebar" v-if="menuList.length > 0">
    <div
      class="menu-left"
      :class="`menu-left-${getMenuTheme.theme} menu-left-${!menuOpen ? 'close' : 'open'}`"
      :style="{
        background: getMenuTheme.background
      }"
    >
      <!-- 侧栏顶部区域：内容由Admin模板经 #sidebar-header 插槽提供，未传插槽时该区域留空 -->
      <div
        class="header"
        @click="navigateToHome"
        :style="{
          background: getMenuTheme.background
        }"
      >
        <!-- 内层容器承担溢出裁切：裁切边界为 .header 的内容盒，保证超长内容与左右边缘保持内边距 -->
        <div class="header__inner">
          <slot name="sidebar-header" :menu-open="menuOpen" :theme="getMenuTheme" />
        </div>
      </div>

      <!-- 菜单内容 -->
      <ElScrollbar :style="scrollbarStyle">
        <ElMenu
          :class="'el-menu-' + getMenuTheme.theme"
          :collapse="!menuOpen"
          :default-active="routerPath"
          :text-color="getMenuTheme.textColor"
          :unique-opened="uniqueOpened"
          :background-color="getMenuTheme.background"
          :default-openeds="defaultOpenedMenus"
          :popper-class="`menu-left-popper menu-left-${getMenuTheme.theme}-popper`"
          :show-timeout="50"
          :hide-timeout="50"
        >
          <SidebarSubmenu
            :list="menuList"
            :isMobile="isMobileMode"
            :theme="getMenuTheme"
            @close="handleMenuClose"
          />
        </ElMenu>
      </ElScrollbar>

      <div
        class="menu-model"
        @click="toggleMenuVisibility"
        :style="{
          opacity: !menuOpen ? 0 : 1,
          transform: showMobileModal ? 'scale(1)' : 'scale(0)'
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from 'vue'
  import { ElMenu, ElScrollbar } from 'element-plus'
  import { useSettingStore } from '../../store/modules/setting'
  import { storeToRefs } from 'pinia'
  import SidebarSubmenu from './widget/SidebarSubmenu.vue'
  import { getMenuSource } from '../../install/context'
  import { useCommon } from '../../hooks/core/useCommon'
  import { useRoute, useRouter } from 'vue-router'
  import { useWindowSize, useTimeoutFn } from '@vueuse/core'
  import type { SidebarHeaderSlotProps } from '../../types/layout'

  defineOptions({ name: 'AoSidebarMenu' })

  /**
   * 侧栏 header 插槽
   * @description Admin模板经 AppLayout 透传后提供侧栏顶部区域内容，回传菜单折叠态与当前菜单主题；
   * 未提供插槽内容时该区域留空，仅保留高度与点击跳转首页的行为。
   */
  defineSlots<{
    'sidebar-header'?: (props: SidebarHeaderSlotProps) => any
  }>()

  const MOBILE_BREAKPOINT = 800
  const ANIMATION_DELAY = 350

  const route = useRoute()
  const router = useRouter()
  const settingStore = useSettingStore()

  const { uniqueOpened, menuOpen, getMenuTheme } = storeToRefs(settingStore)

  // 组件内部状态
  const defaultOpenedMenus = ref<string[]>([])
  const isMobileMode = ref(false)
  const showMobileModal = ref(false)

  // 使用 VueUse 的窗口尺寸监听
  const { width } = useWindowSize()

  // 移动端屏幕判断（使用 computed 避免重复计算）
  const isMobileScreen = computed(() => width.value < MOBILE_BREAKPOINT)

  // 路由相关
  const routerPath = computed(() => String(route.meta.activePath || route.path))

  // 菜单数据 - 直接返回完整菜单列表
  const menuList = computed(() => {
    return getMenuSource().menuList
  })

  // 滚动条样式
  const scrollbarStyle = computed(() => {
    return {
      transform: 'translateY(0)',
      height: 'calc(100% - 60px)',
      transition: 'transform 0.3s ease'
    }
  })

  /**
   * 延迟隐藏移动端模态框（使用 VueUse 的 useTimeoutFn）
   */
  const { start: delayHideMobileModal } = useTimeoutFn(
    () => {
      showMobileModal.value = false
    },
    ANIMATION_DELAY,
    { immediate: false }
  )

  const { homePath } = useCommon()

  /**
   * 导航到首页
   */
  const navigateToHome = (): void => {
    router.push(homePath.value)
  }

  /**
   * 切换菜单显示/隐藏
   */
  const toggleMenuVisibility = (): void => {
    settingStore.setMenuOpen(!menuOpen.value)

    // 移动端模态框控制逻辑
    if (isMobileScreen.value) {
      if (!menuOpen.value) {
        // 菜单即将打开，立即显示模态框
        showMobileModal.value = true
      } else {
        // 菜单即将关闭，延迟隐藏模态框确保动画完成
        delayHideMobileModal()
      }
    }
  }

  /**
   * 处理菜单关闭（来自子组件）
   */
  const handleMenuClose = (): void => {
    if (isMobileScreen.value) {
      settingStore.setMenuOpen(false)
      delayHideMobileModal()
    }
  }

  /**
   * 监听窗口尺寸变化，自动处理移动端菜单
   */
  watch(width, (newWidth) => {
    if (newWidth < MOBILE_BREAKPOINT) {
      settingStore.setMenuOpen(false)
      if (!menuOpen.value) {
        showMobileModal.value = false
      }
    } else {
      showMobileModal.value = false
    }
  })

  /**
   * 监听菜单开关状态变化
   */
  watch(menuOpen, (isMenuOpen: boolean) => {
    if (!isMobileScreen.value) {
      // 大屏幕设备上，模态框始终隐藏
      showMobileModal.value = false
    } else {
      // 小屏幕设备上，根据菜单状态控制模态框
      if (isMenuOpen) {
        // 菜单打开时立即显示模态框
        showMobileModal.value = true
      } else {
        // 菜单关闭时延迟隐藏模态框，确保动画完成
        delayHideMobileModal()
      }
    }
  })
</script>

<style lang="scss" scoped>
  @use './style';
</style>

<style lang="scss">
  @use './theme';

  .layout-sidebar {
    // 展开的宽度
    .el-menu:not(.el-menu--collapse) {
      width: var(--ao-sidebar-width);
    }
    // 折叠后宽度
    .el-menu--collapse {
      width: var(--ao-sidebar-collapse-width);
    }
  }
</style>
