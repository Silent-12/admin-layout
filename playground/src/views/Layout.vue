<!-- Admin模板布局入口：承载 AppLayout 并通过 #sidebar-header 插槽接管侧栏顶部区域 -->
<template>
  <AppLayout>
    <template #sidebar-header="{ menuOpen, theme }">
      <SidebarBrand :collapsed="!menuOpen" :theme="theme" />
    </template>
  </AppLayout>
</template>

<script setup lang="ts">
  import { AppLayout } from '@ao/admin-layout'
  import SidebarBrand from './SidebarBrand.vue'

  defineOptions({ name: 'PlaygroundLayout' })
</script>
