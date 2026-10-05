<template>
  <p class="section-title" :style="style">
    {{ title }}
  </p>
</template>

<script setup lang="ts">
  interface Props {
    title: string
    style?: Record<string, any>
  }

  defineProps<Props>()
</script>

<style scoped lang="scss">
  // 设置面板标题
  .section-title {
    position: relative;
    margin-top: 1.875rem;
    margin-bottom: 1.375rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--ao-gray-800);
    text-align: center;
    // 左侧装饰横线
    &::before {
      position: absolute;
      top: 10px;
      left: 0;
      width: 50px;
      margin: auto;
      content: '';
      border-bottom: 1px solid var(--ao-gray-300);
    }
    // 右侧装饰横线
    &::after {
      position: absolute;
      top: 10px;
      right: 0;
      width: 50px;
      margin: auto;
      content: '';
      border-bottom: 1px solid var(--ao-gray-300);
    }
  }
</style>
