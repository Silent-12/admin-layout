<!-- 标签页 -->
<template>
  <div v-if="showWorkTab" class="work-tab">
    <div class="work-tab__scroll" ref="scrollRef">
      <ul
        class="work-tab__list"
        ref="tabsRef"
        :style="{
          transform: `translateX(${scrollState.translateX}px)`,
          transition: `${scrollState.transition}`
        }"
      >
        <li
          class="work-tab__item ao-card-xs"
          :class="[
            item.path === activeTab
              ? 'work-tab__item--active activ-tab'
              : 'work-tab__item--inactive'
          ]"
          :style="{ padding: item.fixedTab ? '0 10px' : '0 8px 0 12px' }"
          v-for="(item, index) in list"
          :key="item.path"
          :ref="item.path"
          :id="`scroll-li-${index}`"
          @click="clickTab(item)"
          @contextmenu.prevent="(e: MouseEvent) => showMenu(e, item.path)"
        >
          <!-- work-tab不展示icon -->
          <!-- <AoSvgIcon v-show="item.icon" :icon="item.icon" class="work-tab__item-icon" /> -->
          {{ item.customTitle || formatMenuTitle(item.title) }}
          <span
            v-if="list.length > 1 && !item.fixedTab"
            class="work-tab__close"
            @click.stop="closeWorktab('current', item.path)"
          >
            <AoSvgIcon icon="ri:close-large-fill" class="work-tab__close-icon" />
          </span>
        </li>
      </ul>
    </div>

    <AoMenuRight
      ref="menuRef"
      :menu-items="menuItems"
      :menu-width="140"
      :border-radius="10"
      @select="handleSelect"
    />
  </div>
</template>

<script setup lang="ts">
  import { AoSvgIcon } from '@ao/admin-components'
  import { computed, onMounted, ref, watch, nextTick, onUnmounted } from 'vue'
  import { LocationQueryRaw, useRoute, useRouter } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  import { storeToRefs } from 'pinia'

  import { useWorktabStore } from '../store/modules/worktab'
  import { getLanguageRef } from '../install/context'
  import { formatMenuTitle } from '../utils/router'
  import { useSettingStore } from '../store/modules/setting'
  import type { MenuItemType } from '../types/menuRight'
  import AoMenuRight from './AoMenuRight.vue'
  import { useCommon } from '../hooks/core/useCommon'
  import type { WorkTab } from '../types/store/worktab'

  defineOptions({ name: 'AoWorkTab' })

  // 类型定义
  interface ScrollState {
    translateX: number
    transition: string
  }

  interface TouchState {
    startX: number
    currentX: number
  }

  type TabCloseType = 'current' | 'left' | 'right' | 'other' | 'all'

  // 基础设置
  const { t } = useI18n()
  const store = useWorktabStore()
  const route = useRoute()
  const router = useRouter()
  const { currentRoute } = router
  const settingStore = useSettingStore()
  const { showWorkTab } = storeToRefs(settingStore)

  // DOM 引用
  const scrollRef = ref<HTMLElement | null>(null)
  const tabsRef = ref<HTMLElement | null>(null)
  const menuRef = ref()

  // 状态管理
  const scrollState = ref<ScrollState>({
    translateX: 0,
    transition: ''
  })

  const touchState = ref<TouchState>({
    startX: 0,
    currentX: 0
  })

  const clickedPath = ref('')

  // 计算属性
  const list = computed(() => store.opened)
  const activeTab = computed(() => currentRoute.value.path)
  const activeTabIndex = computed(() => list.value.findIndex((tab) => tab.path === activeTab.value))

  // 右键菜单逻辑
  const useContextMenu = () => {
    const getClickedTabInfo = () => {
      const clickedIndex = list.value.findIndex((tab) => tab.path === clickedPath.value)
      const currentTab = list.value[clickedIndex]

      return {
        clickedIndex,
        currentTab,
        isLastTab: clickedIndex === list.value.length - 1,
        isOneTab: list.value.length === 1,
        isCurrentTab: clickedPath.value === activeTab.value
      }
    }

    // 检查标签页是否固定
    const checkTabsFixedStatus = (clickedIndex: number) => {
      const leftTabs = list.value.slice(0, clickedIndex)
      const rightTabs = list.value.slice(clickedIndex + 1)
      const otherTabs = list.value.filter((_, index) => index !== clickedIndex)

      return {
        areAllLeftTabsFixed: leftTabs.length > 0 && leftTabs.every((tab) => tab.fixedTab),
        areAllRightTabsFixed: rightTabs.length > 0 && rightTabs.every((tab) => tab.fixedTab),
        areAllOtherTabsFixed: otherTabs.length > 0 && otherTabs.every((tab) => tab.fixedTab),
        areAllTabsFixed: list.value.every((tab) => tab.fixedTab)
      }
    }

    // 右键菜单选项
    const menuItems = computed(() => {
      const { clickedIndex, currentTab, isLastTab, isOneTab, isCurrentTab } = getClickedTabInfo()
      const fixedStatus = checkTabsFixedStatus(clickedIndex)

      return [
        {
          key: 'refresh',
          label: t('worktab.btn.refresh'),
          icon: 'ri:refresh-line',
          disabled: !isCurrentTab
        },
        {
          key: 'fixed',
          label: currentTab?.fixedTab ? t('worktab.btn.unfixed') : t('worktab.btn.fixed'),
          icon: 'ri:pushpin-2-line',
          disabled: false,
          showLine: true
        },
        {
          key: 'left',
          label: t('worktab.btn.closeLeft'),
          icon: 'ri:arrow-left-s-line',
          disabled: clickedIndex === 0 || fixedStatus.areAllLeftTabsFixed
        },
        {
          key: 'right',
          label: t('worktab.btn.closeRight'),
          icon: 'ri:arrow-right-s-line',
          disabled: isLastTab || fixedStatus.areAllRightTabsFixed
        },
        {
          key: 'other',
          label: t('worktab.btn.closeOther'),
          icon: 'ri:close-fill',
          disabled: isOneTab || fixedStatus.areAllOtherTabsFixed
        },
        {
          key: 'all',
          label: t('worktab.btn.closeAll'),
          icon: 'ri:close-circle-line',
          disabled: isOneTab || fixedStatus.areAllTabsFixed
        }
      ]
    })

    return { menuItems }
  }

  // 滚动逻辑
  const useScrolling = () => {
    const setTransition = () => {
      scrollState.value.transition = 'transform 0.5s cubic-bezier(0.15, 0, 0.15, 1)'
      setTimeout(() => {
        scrollState.value.transition = ''
      }, 250)
    }

    const getCurrentTabElement = (): HTMLElement | null => {
      return document.getElementById(`scroll-li-${activeTabIndex.value}`)
    }

    const calculateScrollPosition = () => {
      if (!scrollRef.value || !tabsRef.value) return

      const scrollWidth = scrollRef.value.offsetWidth
      const ulWidth = tabsRef.value.offsetWidth
      const curTabEl = getCurrentTabElement()

      if (!curTabEl) return

      const { offsetLeft, clientWidth } = curTabEl
      const curTabRight = offsetLeft + clientWidth
      const targetLeft = scrollWidth - curTabRight

      return {
        scrollWidth,
        ulWidth,
        offsetLeft,
        clientWidth,
        curTabRight,
        targetLeft
      }
    }

    const autoPositionTab = () => {
      const positions = calculateScrollPosition()
      if (!positions) return

      const { scrollWidth, ulWidth, offsetLeft, curTabRight, targetLeft } = positions

      if (
        (offsetLeft > Math.abs(scrollState.value.translateX) && curTabRight <= scrollWidth) ||
        (scrollState.value.translateX < targetLeft && targetLeft < 0)
      ) {
        return
      }

      requestAnimationFrame(() => {
        if (curTabRight > scrollWidth) {
          scrollState.value.translateX = Math.max(targetLeft - 6, scrollWidth - ulWidth)
        } else if (offsetLeft < Math.abs(scrollState.value.translateX)) {
          scrollState.value.translateX = -offsetLeft
        }
      })
    }

    const adjustPositionAfterClose = () => {
      const positions = calculateScrollPosition()
      if (!positions) return

      const { scrollWidth, ulWidth, offsetLeft, clientWidth } = positions
      const curTabLeft = offsetLeft + clientWidth

      requestAnimationFrame(() => {
        scrollState.value.translateX = curTabLeft > scrollWidth ? scrollWidth - ulWidth : 0
      })
    }

    return {
      setTransition,
      autoPositionTab,
      adjustPositionAfterClose
    }
  }

  // 事件处理逻辑
  const useEventHandlers = () => {
    const { setTransition, adjustPositionAfterClose } = useScrolling()

    const handleWheelScroll = (event: WheelEvent) => {
      if (!scrollRef.value || !tabsRef.value) return

      event.preventDefault()

      if (tabsRef.value.offsetWidth <= scrollRef.value.offsetWidth) return

      const xMax = 0
      const xMin = scrollRef.value.offsetWidth - tabsRef.value.offsetWidth
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY

      scrollState.value.translateX = Math.min(
        Math.max(scrollState.value.translateX - delta, xMin),
        xMax
      )
    }

    const handleTouchStart = (event: TouchEvent) => {
      touchState.value.startX = event.touches[0].clientX
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (!scrollRef.value || !tabsRef.value) return

      touchState.value.currentX = event.touches[0].clientX
      const deltaX = touchState.value.currentX - touchState.value.startX
      const xMin = scrollRef.value.offsetWidth - tabsRef.value.offsetWidth

      scrollState.value.translateX = Math.min(
        Math.max(scrollState.value.translateX + deltaX, xMin),
        0
      )
      touchState.value.startX = touchState.value.currentX
    }

    const handleTouchEnd = () => {
      setTransition()
    }

    const setupEventListeners = () => {
      if (tabsRef.value) {
        tabsRef.value.addEventListener('wheel', handleWheelScroll, { passive: false })
        tabsRef.value.addEventListener('touchstart', handleTouchStart, { passive: true })
        tabsRef.value.addEventListener('touchmove', handleTouchMove, { passive: true })
        tabsRef.value.addEventListener('touchend', handleTouchEnd, { passive: true })
      }
    }

    const cleanupEventListeners = () => {
      if (tabsRef.value) {
        tabsRef.value.removeEventListener('wheel', handleWheelScroll)
        tabsRef.value.removeEventListener('touchstart', handleTouchStart)
        tabsRef.value.removeEventListener('touchmove', handleTouchMove)
        tabsRef.value.removeEventListener('touchend', handleTouchEnd)
      }
    }

    return {
      setupEventListeners,
      cleanupEventListeners,
      adjustPositionAfterClose
    }
  }

  // 标签页操作逻辑
  const useTabOperations = (adjustPositionAfterClose: () => void) => {
    const clickTab = (item: WorkTab) => {
      router.push({
        path: item.path,
        query: item.query as LocationQueryRaw
      })
    }

    const closeWorktab = (type: TabCloseType, tabPath: string) => {
      const path = typeof tabPath === 'string' ? tabPath : route.path

      const closeActions = {
        current: () => store.removeTab(path),
        left: () => store.removeLeft(path),
        right: () => store.removeRight(path),
        other: () => store.removeOthers(path),
        all: () => store.removeAll()
      }

      closeActions[type]?.()

      setTimeout(() => {
        adjustPositionAfterClose()
      }, 100)
    }

    const showMenu = (e: MouseEvent, path?: string) => {
      clickedPath.value = path || ''
      menuRef.value?.show(e)
      e.preventDefault()
      e.stopPropagation()
    }

    const handleSelect = (item: MenuItemType) => {
      const { key } = item

      if (key === 'refresh') {
        useCommon().refresh()
        return
      }

      if (key === 'fixed') {
        useWorktabStore().toggleFixedTab(clickedPath.value)
        return
      }

      const activeIndex = list.value.findIndex((tab) => tab.path === activeTab.value)
      const clickedIndex = list.value.findIndex((tab) => tab.path === clickedPath.value)

      const navigationRules = {
        left: activeIndex < clickedIndex,
        right: activeIndex > clickedIndex,
        other: true
      } as const

      const shouldNavigate = navigationRules[key as keyof typeof navigationRules]

      if (shouldNavigate) {
        router.push(clickedPath.value)
      }

      closeWorktab(key as TabCloseType, clickedPath.value)
    }

    return {
      clickTab,
      closeWorktab,
      showMenu,
      handleSelect
    }
  }

  // 组合所有逻辑
  const { menuItems } = useContextMenu()
  const { setTransition, autoPositionTab } = useScrolling()
  const { setupEventListeners, cleanupEventListeners, adjustPositionAfterClose } =
    useEventHandlers()
  const { clickTab, closeWorktab, showMenu, handleSelect } =
    useTabOperations(adjustPositionAfterClose)

  // 生命周期
  onMounted(() => {
    setupEventListeners()
    autoPositionTab()
  })

  onUnmounted(() => {
    cleanupEventListeners()
  })

  // 监听器
  watch(
    () => currentRoute.value,
    () => {
      setTransition()
      autoPositionTab()
    }
  )

  watch(
    () => getLanguageRef().value,
    () => {
      scrollState.value.translateX = 0
      nextTick(() => {
        autoPositionTab()
      })
    }
  )
</script>

<style scoped lang="scss">
  // 标签页容器
  .work-tab {
    box-sizing: border-box;
    display: flex;
    flex: 1 1 0%;
    align-items: center;
    min-width: 0;
    padding-right: 0.625rem;
    padding-left: 0.625rem;
    user-select: none;
    // 滚动容器
    &__scroll {
      width: 100%;
      overflow: hidden;
    }
    // 标签列表
    &__list {
      display: flex;
      float: left;
      white-space: nowrap;
      background: transparent !important;
    }
    // 标签项
    &__item {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 2rem;
      margin-right: 0.375rem;
      font-size: 0.75rem;
      line-height: 1rem;
      cursor: pointer;
      border: none !important;
      border-radius: 20px !important;
      // 悬停时同步设置标签和图标颜色
      &:hover {
        color: var(--theme-color);
        .work-tab__item-icon {
          color: var(--theme-color);
        }
      }
      // 激活状态：
      &--active {
        color: var(--theme-color) !important;
        background: var(--el-color-primary-light-9) !important;
        // 暗黑模式：light-9 比容器底色更深，改用主题色叠加，保证选中态可辨识
        .dark & {
          background: color-mix(in srgb, var(--el-color-primary) 22%, transparent) !important;
        }
        .work-tab__item-icon {
          color: var(--theme-color);
        }
      }
      // 非激活状态
      &--inactive {
        color: var(--ao-gray-600);
        // 亮色下页面底色为纯白，胶囊底色改用灰阶变量保持可辨识
        background: var(--ao-gray-200) !important;
        .work-tab__item-icon {
          color: var(--ao-gray-600);
        }
        // 暗黑模式
        .dark & {
          color: var(--ao-gray-800);
          // 暗色下页面底色与容器同为 #161618，改用灰色叠加形成抬起的胶囊底色
          background: color-mix(in srgb, var(--ao-gray-300) 45%, transparent) !important;
          .work-tab__item-icon {
            color: var(--ao-gray-800);
          }
        }
      }
    }
    // 标签图标
    &__item-icon {
      margin-right: 0.25rem;
      font-size: 1rem;
      line-height: 1.5rem;
    }
    // 关闭按钮：
    &__close {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.25rem;
      margin-left: 0.125rem;
      border-radius: 9999px;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 200ms;
      transition-property: all;
      &:hover {
        background: var(--ao-gray-200);
      }
    }
    // 关闭图标
    &__close-icon {
      font-size: 10px;
      color: var(--ao-gray-600);
    }
    // 响应式
    @media only screen and (width <= 640px) {
      padding-right: 0.9375rem;
      padding-left: 0.9375rem;
    }
  }
</style>
