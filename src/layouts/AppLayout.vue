<!-- 布局容器 -->
<template>
  <div class="app-layout">
    <aside id="app-sidebar">
      <AoSidebarMenu>
        <!-- 转发Admin模板的侧栏顶部内容；未传入时该区域留空（包内无默认品牌内容） -->
        <template #sidebar-header="scope">
          <slot name="sidebar-header" v-bind="scope" />
        </template>
      </AoSidebarMenu>
    </aside>

    <main id="app-main">
      <div id="app-header">
        <AoHeaderBar>
          <!-- 转发Admin模板 / 业务组件的顶部栏用户头像内容；未传入时不转发该插槽，包内不会渲染占位容器 -->
          <template v-if="$slots['user-avatar']" #user-avatar>
            <slot name="user-avatar" />
          </template>
        </AoHeaderBar>
      </div>
      <div id="app-content">
        <AoPageContent />
      </div>
    </main>

    <div id="app-global">
      <AoGlobalComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
  import AoGlobalComponent from './AoGlobalComponent.vue'
  import AoHeaderBar from './AoHeaderBar/index.vue'
  import AoPageContent from './AoPageContent.vue'
  import AoSidebarMenu from './AoSidebarMenu/index.vue'
  import type { SidebarHeaderSlotProps } from '../types/layout'
  defineOptions({ name: 'AppLayout' })

  /**
   * 侧栏 header 插槽
   * @description 向Admin模板开放侧栏顶部区域的渲染权，插槽参数为菜单折叠态与当前菜单主题；
   * 未传入时该区域留空，仅保留高度与点击跳转首页的行为。
   */
  defineSlots<{
    'sidebar-header'?: (props: SidebarHeaderSlotProps) => any
    /**
     * 顶部栏用户头像插槽
     * @description 向Admin模板 / 业务组件开放顶部栏右侧用户头像区的渲染权，无插槽参数；
     * 头像内容与交互逻辑由业务侧负责，未传入时该区域留空，包内仅保留间距规范。
     */
    'user-avatar'?: () => any
  }>()
</script>

<style lang="scss" scoped>
  .app-layout {
    display: flex;
    width: 100%;
    min-height: 100vh;
    background: var(--default-bg-color);
    #app-sidebar {
      flex-shrink: 0;
    }
    #app-main {
      display: flex;
      flex: 1;
      flex-direction: column;
      min-width: 0;
      height: 100vh;
      overflow: auto;
      #app-header {
        position: sticky;
        top: 0;
        z-index: 50;
        flex-shrink: 0;
        width: 100%;
      }
      #app-content {
        flex: 1;
        :deep(.layout-content) {
          box-sizing: border-box;
          width: 100%;
          // 子页面默认 style
          .page-content {
            position: relative;
            box-sizing: border-box;
            padding: 20px;
            overflow: hidden;
            background: var(--default-box-color);
            border-radius: calc(var(--custom-radius) / 2 + 2px) !important;
          }
        }
      }
    }
  }

  @media only screen and (width <= 1180px) {
    .app-layout {
      #app-main {
        height: 100dvh;
      }
    }
  }

  @media only screen and (width <= 800px) {
    .app-layout {
      position: relative;
      #app-sidebar {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 300;
        height: 100vh;
      }
      #app-main {
        width: 100%;
        height: auto;
        overflow: visible;
      }
    }
  }
</style>
