/**
 * 全局应用状态管理模块
 *
 * 管理应用级别的临时 UI 状态，不持久化到本地存储。
 *
 * ## 主要功能
 *
 * - 设置面板显示状态管理
 * - 全局搜索弹窗显示状态管理
 *
 * ## 使用场景
 *
 * - 跨组件触发/控制全局 UI 面板的显示与隐藏
 * - 替代全局事件总线，使用 Pinia 共享状态实现组件通信
 */
import { defineStore } from 'pinia'
// 引入持久化插件的类型扩充（persist 选项），运行时插件由Admin模板安装
import type {} from 'pinia-plugin-persistedstate'
import { ref } from 'vue'

/**
 * 全局应用状态管理
 * 管理设置面板、全局搜索等临时 UI 状态
 */
export const useAppStore = defineStore('appStore', () => {
  /** 设置面板显示状态 */
  const showSettingsPanel = ref(false)
  /** 全局搜索弹窗显示状态 */
  const showGlobalSearch = ref(false)

  /**
   * 打开设置面板
   */
  const openSettingsPanel = () => {
    showSettingsPanel.value = true
  }

  /**
   * 关闭设置面板
   */
  const closeSettingsPanel = () => {
    showSettingsPanel.value = false
  }

  /**
   * 打开全局搜索弹窗
   */
  const openGlobalSearch = () => {
    showGlobalSearch.value = true
  }

  /**
   * 关闭全局搜索弹窗
   */
  const closeGlobalSearch = () => {
    showGlobalSearch.value = false
  }

  return {
    showSettingsPanel,
    showGlobalSearch,
    openSettingsPanel,
    closeSettingsPanel,
    openGlobalSearch,
    closeGlobalSearch
  }
})
