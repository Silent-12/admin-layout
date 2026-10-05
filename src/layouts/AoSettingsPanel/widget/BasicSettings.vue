<template>
  <div>
    <SectionTitle :title="$t('setting.basics.title')" class="basic-settings-title" />
    <SettingItem
      v-for="config in basicSettingsConfig"
      :key="config.key"
      :config="config"
      :model-value="getSettingValue(config.key)"
      @change="handleSettingChange(config.handler, $event)"
    />
  </div>
</template>

<script setup lang="ts">
  import SectionTitle from './SectionTitle.vue'
  import SettingItem from './SettingItem.vue'
  import { useSettingStore } from '../../../store/modules/setting'
  import { useSettingsConfig } from '../composables/useSettingsConfig'
  import { useSettingsHandlers } from '../composables/useSettingsHandlers'
  import { storeToRefs } from 'pinia'

  const settingStore = useSettingStore()
  const { basicSettingsConfig } = useSettingsConfig()
  const { basicHandlers } = useSettingsHandlers()

  // 获取store的响应式状态
  const {
    uniqueOpened,
    showMenuButton,
    showFastEnter,
    showWorkTab,
    showLanguage,
    showNotification
  } = storeToRefs(settingStore)

  // 创建设置值映射
  const settingValueMap = {
    uniqueOpened,
    showMenuButton,
    showFastEnter,
    showWorkTab,
    showLanguage,
    showNotification
  }

  // 获取设置值的方法
  const getSettingValue = (key: string) => {
    const settingRef = settingValueMap[key as keyof typeof settingValueMap]
    return settingRef?.value ?? null
  }

  // 统一的设置变更处理
  const handleSettingChange = (handlerName: string, value: any) => {
    const handler = (basicHandlers as any)[handlerName]
    if (typeof handler === 'function') {
      handler(value)
    } else {
      console.warn(`Handler "${handlerName}" not found in basicHandlers`)
    }
  }
</script>

<style scoped lang="scss">
  .basic-settings-title {
    margin-top: 2.5rem;
  }
</style>
