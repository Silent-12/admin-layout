<!-- 设置操作按钮 -->
<template>
  <div class="setting-actions">
    <ElButton type="danger" plain class="action-button" @click="handleResetConfig">
      {{ $t('setting.actions.resetConfig') }}
    </ElButton>
  </div>
</template>

<script setup lang="ts">
  import { ElButton, ElMessage } from 'element-plus'
  import { nextTick } from 'vue'
  import { useSettingStore } from '../../../store/modules/setting'
  import { SETTING_DEFAULT_CONFIG } from '../../../config/setting'
  import { useI18n } from 'vue-i18n'
  import { MenuThemeEnum } from '../../../enums'
  import { useTheme } from '../../../hooks/core/useTheme'

  defineOptions({ name: 'SettingActions' })

  const { t } = useI18n()
  const settingStore = useSettingStore()
  const { switchThemeStyles } = useTheme()

  /**
   * 切换布尔值配置（如果当前值与默认值不同）
   */
  const toggleIfDifferent = (
    currentValue: boolean,
    defaultValue: boolean,
    toggleFn: () => void
  ) => {
    if (currentValue !== defaultValue) {
      toggleFn()
    }
  }

  /**
   * 重置配置为默认值
   */
  const handleResetConfig = async () => {
    try {
      const config = SETTING_DEFAULT_CONFIG

      // 主题相关 - 使用 switchThemeStyles 确保正确处理 AUTO 模式
      switchThemeStyles(config.systemThemeMode)

      // 等待主题切换完成后，根据实际应用的主题设置菜单主题
      await nextTick()
      const menuTheme = settingStore.isDark ? MenuThemeEnum.DARK : config.menuThemeType
      settingStore.switchMenuStyles(menuTheme)

      settingStore.setElementTheme(config.systemThemeColor)

      // 界面显示（切换类方法）
      toggleIfDifferent(settingStore.showMenuButton, config.showMenuButton, () =>
        settingStore.setButton()
      )
      toggleIfDifferent(settingStore.showFastEnter, config.showFastEnter, () =>
        settingStore.setFastEnter()
      )
      toggleIfDifferent(settingStore.showLanguage, config.showLanguage, () =>
        settingStore.setLanguage()
      )
      toggleIfDifferent(settingStore.showNotification, config.showNotification, () =>
        settingStore.setNotification()
      )

      // 界面显示（直接设置类方法）
      settingStore.setWorkTab(config.showWorkTab)

      // 功能设置
      toggleIfDifferent(settingStore.uniqueOpened, config.uniqueOpened, () =>
        settingStore.setUniqueOpened()
      )

      location.reload()
    } catch (error) {
      console.error('重置配置失败:', error)
      ElMessage.error(t('setting.actions.resetFailed'))
    }
  }
</script>

<style scoped lang="scss">
  // 设置操作按钮容器
  .setting-actions {
    display: flex;
    gap: 2rem;
    padding-top: 1.25rem;
    margin-top: 2.5rem;
    background: var(--ao-bg-color);
    border-top: 1px solid var(--default-border);
  }

  // 操作按钮
  .action-button {
    flex: 1 1 0%;
    height: 2rem !important;
  }
</style>
