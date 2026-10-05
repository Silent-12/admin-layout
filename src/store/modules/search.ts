/**
 * 全局搜索历史状态管理模块
 *
 * 管理全局搜索的搜索历史，属于布局包私有 UI 偏好。
 *
 * ## 持久化
 * - 使用 localStorage 存储，存储键：ao-search-history
 */
import { defineStore } from 'pinia'
// 引入持久化插件的类型扩充（persist 选项），运行时插件由宿主安装
import type {} from 'pinia-plugin-persistedstate'
import { ref } from 'vue'
import type { AppRouteRecord } from '../../types/router'

/**
 * 全局搜索历史状态管理
 */
export const useSearchStore = defineStore(
  'aoSearchStore',
  () => {
    /** 搜索历史列表 */
    const searchHistory = ref<AppRouteRecord[]>([])

    /**
     * 写入搜索历史
     * @param list 历史列表
     */
    const setSearchHistory = (list: AppRouteRecord[]) => {
      searchHistory.value = list
    }

    return { searchHistory, setSearchHistory }
  },
  {
    persist: {
      key: 'ao-search-history',
      storage: localStorage,
      pick: ['searchHistory']
    }
  }
)
