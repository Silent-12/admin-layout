<template>
  <div>
    <div class="header-actions">
      <div @click="$emit('close')" class="close-btn">
        <AoSvgIcon icon="ri:close-fill" class="close-btn-icon" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AoSvgIcon } from '@ao/admin-components'
  defineEmits<{
    close: []
  }>()
</script>

<style scoped lang="scss">
  // 头部操作区
  .header-actions {
    display: flex;
    justify-content: flex-end;
  }

  // 关闭按钮
  .close-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.875rem;
    height: 1.875rem;
    cursor: pointer;
    border-radius: 0.25rem;
    transition-duration: 200ms;
    transition-property: all !important;
    &:hover {
      background: color-mix(in srgb, var(--ao-gray-300) 80%, transparent);
    }
  }

  // 关闭按钮图标
  .close-btn-icon {
    display: block;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: var(--ao-gray-600);
  }
</style>
