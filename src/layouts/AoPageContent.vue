<!-- 布局内容 -->
<template>
  <div class="layout-content" :class="{ 'layout-content--full-page': isFullPage }">
    <div id="app-content-header">
      <!-- 路由信息调试 -->
      <div v-if="isOpenRouteInfo === 'true'" class="route-info-debug">
        router meta：{{ route.meta }}
      </div>
    </div>

    <RouterView v-if="isRefresh" v-slot="{ Component, route }" :style="contentStyle">
      <!-- 统一处理缓存与非缓存路由动画，避免两个 Transition 同时占据文档流 -->
      <Transition :name="showTransitionMask ? '' : actualTransition" mode="out-in" appear>
        <!-- KeepAlive 始终挂载，避免切换到非缓存路由时丢失已缓存页面 -->
        <KeepAlive :max="10" :exclude="routeCacheExclude">
          <component class="ao-page-view" :is="Component" :key="route.path" />
        </KeepAlive>
      </Transition>
    </RouterView>

    <!-- 全屏页面切换过渡遮罩（用于提升页面切换视觉体验） -->
    <Teleport to="body">
      <div v-show="showTransitionMask" class="transition-mask" />
    </Teleport>
  </div>
</template>
<script setup lang="ts">
  import { computed, nextTick, onMounted, ref, shallowRef, watch } from 'vue'
  import { storeToRefs } from 'pinia'
  import type { CSSProperties } from 'vue'
  import { useRoute } from 'vue-router'
  import { useAutoLayoutHeight } from '../hooks/core/useLayoutHeight'
  import { useSettingStore } from '../store/modules/setting'
  import { useWorktabStore } from '../store/modules/worktab'

  defineOptions({ name: 'AoPageContent' })

  const route = useRoute()
  // 驱动头部高度测量：测量结果写入 CSS 变量，内容区高度在 app.scss 中由 CSS 组合
  useAutoLayoutHeight()
  const { refresh } = storeToRefs(useSettingStore())
  const { keepAliveExclude } = storeToRefs(useWorktabStore())

  // 当前非缓存路由动态排除，保持原有的页面缓存策略
  const routeCacheExclude = computed(() => {
    const exclude = new Set(keepAliveExclude.value)
    if (!route.meta.keepAlive && typeof route.name === 'string') {
      exclude.add(route.name)
    }
    return [...exclude]
  })

  const isRefresh = shallowRef(true)
  const isOpenRouteInfo = import.meta.env.VITE_OPEN_ROUTE_INFO
  const showTransitionMask = ref(false)

  // 标记是否是首次加载（浏览器刷新）
  const isFirstLoad = ref(true)

  // 检查当前路由是否需要使用无基础布局模式
  const isFullPage = computed(() => route.matched.some((r) => r.meta?.isFullPage))
  const prevIsFullPage = ref(isFullPage.value)

  // 切换动画名称：固定为 slide-left，首次加载、从全屏返回时不使用动画
  const actualTransition = computed(() => {
    if (isFirstLoad.value) return ''
    if (prevIsFullPage.value && !isFullPage.value) return ''
    return 'slide-left'
  })

  // 监听全屏状态变化，显示过渡遮罩
  watch(isFullPage, (val, oldVal) => {
    if (val !== oldVal) {
      showTransitionMask.value = true
      // 延迟隐藏遮罩，给足时间让页面完成切换
      setTimeout(() => {
        showTransitionMask.value = false
      }, 50)
    }

    nextTick(() => {
      prevIsFullPage.value = val
    })
  })

  /** 内容区最小高度：引用 --ao-full-height，具体数值由 CSS 组合（见 app.scss） */
  const contentStyle: CSSProperties = {
    minHeight: 'var(--ao-full-height)'
  }

  const reload = () => {
    isRefresh.value = false
    nextTick(() => {
      isRefresh.value = true
    })
  }

  watch(refresh, reload, { flush: 'post' })

  // 组件挂载后标记首次加载完成
  onMounted(() => {
    // 延迟一帧，确保首次渲染完成
    nextTick(() => {
      isFirstLoad.value = false
    })
  })
</script>

<style scoped lang="scss">
  // 全屏页面模式
  .layout-content {
    &--full-page {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 2500;
      width: 100%;
      height: 100vh;
      overflow: auto;
      background: var(--default-bg-color);
    }
  }

  // 路由信息调试条
  .route-info-debug {
    padding: 0.375rem 0.5rem;
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--ao-gray-500);
    background: var(--ao-gray-200);
    border: 1px solid var(--default-border);
    border-radius: 0.375rem;
  }

  // 全屏切换过渡遮罩
  .transition-mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    background: var(--default-box-color);
  }
</style>
