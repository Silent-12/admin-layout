<!-- 侧栏顶部品牌区：演示Admin模板如何接管 AppLayout 的 #sidebar-header 插槽内容 -->
<template>
  <div class="sidebar-brand" :style="{ color: theme.systemNameColor }">
    <span class="sidebar-brand__logo">PG</span>
    <span v-show="!collapsed" class="sidebar-brand__name">Playground 自定义头部</span>
  </div>
</template>

<script setup lang="ts">
  import type { SidebarHeaderSlotProps } from '@ao/admin-layout'

  defineOptions({ name: 'SidebarBrand' })

  defineProps<{
    // 菜单是否处于折叠态，折叠时收起文字只保留图标
    collapsed: boolean
    // 当前菜单主题，取自 #sidebar-header 插槽参数
    theme: SidebarHeaderSlotProps['theme']
  }>()
</script>

<style scoped lang="scss">
  .sidebar-brand {
    display: flex;
    align-items: center;
    // 左右间距由包内 .header 的默认内边距（--el-menu-base-level-padding）提供，与菜单项对齐；
    // min-width: 0 允许品牌区收缩到容器宽度内，配合下方 __name 的 ellipsis 生效
    min-width: 0;
    height: 100%;

    &__logo {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      font-size: 14px;
      font-weight: 600;
      color: var(--ao-white);
      background: var(--theme-color);
      border-radius: 8px;
    }

    &__name {
      min-width: 0;
      margin-left: 10px;
      overflow: hidden;
      font-size: 18px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
