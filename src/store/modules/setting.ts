/**
 * 系统设置状态管理模块
 *
 * 提供完整的系统设置状态管理
 *
 * ## 主要功能
 *
 * - 主题管理（亮色、暗色、自动）
 * - 菜单主题样式配置
 * - 界面显示开关（标签页、语言切换、通知入口等）
 * - 功能开关（手风琴模式等）
 * - Element Plus 主题色动态设置
 *
 * ## 使用场景
 *
 * - 设置面板配置管理
 * - 主题切换和样式定制
 * - 界面功能开关控制
 * - 用户偏好设置持久化
 *
 * ## 持久化
 *
 * - 使用 localStorage 存储
 * - 存储键：setting
 * - 支持跨版本数据迁移
 */
import { defineStore } from 'pinia'
// 引入持久化插件的类型扩充（persist 选项），运行时插件由Admin模板安装
import type {} from 'pinia-plugin-persistedstate'
import { ref, computed } from 'vue'
import { MenuThemeType } from '../../types/store/setting'
import AppConfig from '../../config'
import { SystemThemeEnum, MenuThemeEnum } from '../../enums'
import { setElementThemeColor } from '../../utils/ui'
import { StorageConfig } from '../../utils'
import { SETTING_DEFAULT_CONFIG } from '../../config/setting'

/**
 * 系统设置状态管理
 * 管理应用的菜单、主题、界面显示等各项设置
 */
export const useSettingStore = defineStore(
  'settingStore',
  () => {
    // 菜单相关设置
    /** 菜单是否展开 */
    const menuOpen = ref(SETTING_DEFAULT_CONFIG.menuOpen)

    // 主题相关设置
    /** 系统主题类型 */
    const systemThemeType = ref(SETTING_DEFAULT_CONFIG.systemThemeType)
    /** 系统主题模式 */
    const systemThemeMode = ref(SETTING_DEFAULT_CONFIG.systemThemeMode)
    /** 菜单主题类型 */
    const menuThemeType = ref(SETTING_DEFAULT_CONFIG.menuThemeType)
    /** 系统主题颜色 */
    const systemThemeColor = ref(SETTING_DEFAULT_CONFIG.systemThemeColor)

    // 界面显示设置
    /** 是否显示菜单按钮 */
    const showMenuButton = ref(SETTING_DEFAULT_CONFIG.showMenuButton)
    /** 是否显示快速入口 */
    const showFastEnter = ref(SETTING_DEFAULT_CONFIG.showFastEnter)
    /** 是否显示工作台标签 */
    const showWorkTab = ref(SETTING_DEFAULT_CONFIG.showWorkTab)
    /** 是否显示语言切换 */
    const showLanguage = ref(SETTING_DEFAULT_CONFIG.showLanguage)
    /** 是否显示通知入口 */
    const showNotification = ref(SETTING_DEFAULT_CONFIG.showNotification)
    /** 是否显示设置引导 */
    const showSettingGuide = ref(SETTING_DEFAULT_CONFIG.showSettingGuide)

    // 功能设置
    /** 是否唯一展开 */
    const uniqueOpened = ref(SETTING_DEFAULT_CONFIG.uniqueOpened)
    /** 是否刷新 */
    const refresh = ref(SETTING_DEFAULT_CONFIG.refresh)

    /**
     * 获取菜单主题
     * 根据当前主题类型和暗色模式返回对应的主题配置
     */
    const getMenuTheme = computed((): MenuThemeType => {
      const list = AppConfig.themeList.filter((item) => item.theme === menuThemeType.value)
      if (isDark.value) {
        return AppConfig.darkMenuStyles[0]
      } else {
        return list[0]
      }
    })

    /**
     * 判断是否为暗色模式
     */
    const isDark = computed((): boolean => {
      return systemThemeType.value === SystemThemeEnum.DARK
    })

    /**
     * 设置全局主题
     * @param theme 主题类型
     * @param themeMode 主题模式
     */
    const setGlopTheme = (theme: SystemThemeEnum, themeMode: SystemThemeEnum) => {
      systemThemeType.value = theme
      systemThemeMode.value = themeMode
      localStorage.setItem(StorageConfig.THEME_KEY, theme)
    }

    /**
     * 切换菜单样式
     * @param theme 菜单主题
     */
    const switchMenuStyles = (theme: MenuThemeEnum) => {
      menuThemeType.value = theme
    }

    /**
     * 设置Element Plus主题颜色
     * @param theme 主题颜色
     */
    const setElementTheme = (theme: string) => {
      systemThemeColor.value = theme
      setElementThemeColor(theme)
    }

    /**
     * 切换唯一展开模式
     */
    const setUniqueOpened = () => {
      uniqueOpened.value = !uniqueOpened.value
    }

    /**
     * 切换菜单按钮显示
     */
    const setButton = () => {
      showMenuButton.value = !showMenuButton.value
    }

    /**
     * 切换快速入口显示
     */
    const setFastEnter = () => {
      showFastEnter.value = !showFastEnter.value
    }

    /**
     * 设置工作台标签显示
     * @param show 是否显示
     */
    const setWorkTab = (show: boolean) => {
      showWorkTab.value = show
    }

    /**
     * 切换语言切换显示
     */
    const setLanguage = () => {
      showLanguage.value = !showLanguage.value
    }

    /**
     * 切换通知入口显示状态
     * @description 更新顶部栏通知入口的显示状态。
     * @return {void} 无返回值
     */
    const setNotification = () => {
      showNotification.value = !showNotification.value
    }

    /**
     * 设置菜单展开状态
     * @param open 是否展开
     */
    const setMenuOpen = (open: boolean) => {
      menuOpen.value = open
    }

    /**
     * 刷新页面
     */
    const reload = () => {
      refresh.value = !refresh.value
    }

    return {
      systemThemeType,
      systemThemeMode,
      menuThemeType,
      systemThemeColor,
      uniqueOpened,
      showMenuButton,
      showFastEnter,
      showWorkTab,
      showLanguage,
      showNotification,
      showSettingGuide,
      menuOpen,
      refresh,
      getMenuTheme,
      isDark,
      setGlopTheme,
      switchMenuStyles,
      setElementTheme,
      setUniqueOpened,
      setButton,
      setFastEnter,
      setWorkTab,
      setLanguage,
      setNotification,
      setMenuOpen,
      reload
    }
  },
  {
    persist: {
      key: 'setting',
      storage: localStorage
    }
  }
)
