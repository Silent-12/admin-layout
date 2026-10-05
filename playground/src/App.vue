<template>
  <RouterView />
</template>

<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { initializeTheme } from '@ao/admin-layout'

  defineOptions({ name: 'Playground' })

  // 与Admin模板一致：首屏按持久化的主题偏好初始化亮色 / 暗色模式
  // Element Plus 的 locale 与尺寸已由 main.ts 全局配置提供，此处不重复包裹 ElConfigProvider
  onBeforeMount(() => {
    initializeTheme()
  })
</script>
