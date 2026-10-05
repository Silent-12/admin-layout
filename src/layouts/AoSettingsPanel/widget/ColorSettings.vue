<template>
  <div>
    <SectionTitle :title="$t('setting.color.title')" class="color-section-title" />
    <div class="color-list-wrapper">
      <div class="color-list">
        <div
          v-for="color in configOptions.mainColors"
          :key="color"
          class="color-item"
          :style="{ background: `${color} !important` }"
          @click="colorHandlers.selectColor(color)"
        >
          <AoSvgIcon
            icon="ri:check-fill"
            class="color-check-icon"
            v-show="color === systemThemeColor"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { AoSvgIcon } from '@ao/admin-components'
  import SectionTitle from './SectionTitle.vue'
  import { useSettingStore } from '../../../store/modules/setting'
  import { useSettingsConfig } from '../composables/useSettingsConfig'
  import { useSettingsHandlers } from '../composables/useSettingsHandlers'
  import { storeToRefs } from 'pinia'

  const settingStore = useSettingStore()
  const { systemThemeColor } = storeToRefs(settingStore)
  const { configOptions } = useSettingsConfig()
  const { colorHandlers } = useSettingsHandlers()
</script>

<style scoped lang="scss">
  // 小节标题间距
  .color-section-title {
    margin-top: 2.5rem;
  }

  // 颜色列表外层
  .color-list-wrapper {
    margin-right: -1rem;
  }

  // 颜色列表（自动换行）
  .color-list {
    display: flex;
    flex-wrap: wrap;
  }

  // 单个颜色块
  .color-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 23px;
    height: 23px;
    margin-right: 1rem;
    margin-bottom: 0.625rem;
    cursor: pointer;
    border-radius: 9999px;
    transition-duration: 200ms;
    transition-property: all;
    &:hover {
      opacity: 0.85;
    }
  }

  // 选中态对勾图标
  .color-check-icon {
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--ao-white) !important;
  }
</style>
