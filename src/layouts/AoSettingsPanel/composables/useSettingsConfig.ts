import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AppConfig from '../../../config'
import { headerBarConfig } from '../../../config/headerBar'

/**
 * 设置项配置选项管理
 */
export function useSettingsConfig() {
  const { t } = useI18n()

  // 从配置文件获取的选项
  const configOptions = {
    // 主题色彩选项
    mainColors: AppConfig.systemMainColor,
    // 主题风格选项
    themeList: AppConfig.settingThemeList
  }

  // 基础设置项配置
  const basicSettingsConfig = computed(() => {
    // 定义所有基础设置项
    const allSettings = [
      {
        key: 'showWorkTab',
        label: t('setting.basics.list.multiTab'),
        type: 'switch' as const,
        handler: 'workTab',
        headerBarKey: null // 不依赖headerBar配置
      },
      {
        key: 'uniqueOpened',
        label: t('setting.basics.list.accordion'),
        type: 'switch' as const,
        handler: 'uniqueOpened',
        headerBarKey: null // 不依赖headerBar配置
      },
      {
        key: 'showMenuButton',
        label: t('setting.basics.list.collapseSidebar'),
        type: 'switch' as const,
        handler: 'menuButton',
        headerBarKey: 'menuButton' as const
      },
      {
        key: 'showFastEnter',
        label: t('setting.basics.list.fastEnter'),
        type: 'switch' as const,
        handler: 'fastEnter',
        headerBarKey: 'fastEnter' as const
      },
      {
        key: 'showLanguage',
        label: t('setting.basics.list.language'),
        type: 'switch' as const,
        handler: 'language',
        headerBarKey: 'language' as const
      },
      {
        key: 'showNotification',
        label: t('setting.basics.list.notification'),
        type: 'switch' as const,
        handler: 'notification',
        headerBarKey: 'notification' as const
      }
    ]

    // 根据 headerBarConfig 过滤设置项
    return (
      allSettings
        .filter((setting) => {
          // 如果设置项不依赖headerBar配置，则始终显示
          if (setting.headerBarKey === null) {
            return true
          }

          // 如果依赖headerBar配置，检查对应的功能是否启用
          const headerBarFeature = headerBarConfig[setting.headerBarKey]
          return headerBarFeature?.enabled !== false
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(({ headerBarKey: _headerBarKey, ...setting }) => setting)
    )
  })

  return {
    // 选项配置
    configOptions,

    // 设置项配置
    basicSettingsConfig
  }
}
