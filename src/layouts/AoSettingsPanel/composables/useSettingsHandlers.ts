import { useSettingStore } from '../../../store/modules/setting'

/**
 * 设置项通用处理逻辑
 */
export function useSettingsHandlers() {
  const settingStore = useSettingStore()

  // DOM 操作相关
  const domOperations = {
    // 设置body类名
    setBodyClass: (className: string, add: boolean) => {
      const el = document.getElementsByTagName('body')[0]
      if (add) {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    }
  }

  // 通用切换处理器
  const createToggleHandler = (storeMethod: () => void, callback?: () => void) => {
    return () => {
      storeMethod()
      callback?.()
    }
  }

  // 基础设置处理器
  const basicHandlers = {
    // 工作台标签页
    workTab: createToggleHandler(() => settingStore.setWorkTab(!settingStore.showWorkTab)),

    // 菜单手风琴
    uniqueOpened: createToggleHandler(() => settingStore.setUniqueOpened()),

    // 显示菜单按钮
    menuButton: createToggleHandler(() => settingStore.setButton()),

    // 显示快速入口
    fastEnter: createToggleHandler(() => settingStore.setFastEnter()),

    // 显示语言切换
    language: createToggleHandler(() => settingStore.setLanguage()),

    // 显示通知入口
    notification: createToggleHandler(() => settingStore.setNotification())
  }

  // 颜色设置处理器
  const colorHandlers = {
    // 选择主题色
    selectColor: (theme: string) => {
      settingStore.setElementTheme(theme)
      settingStore.reload()
    }
  }

  return {
    domOperations,
    basicHandlers,
    colorHandlers,
    createToggleHandler
  }
}
