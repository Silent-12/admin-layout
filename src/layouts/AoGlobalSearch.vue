<!-- 全局搜索组件 -->
<template>
  <div class="layout-search">
    <ElDialog
      v-model="showGlobalSearch"
      width="600"
      :show-close="false"
      :lock-scroll="false"
      modal-class="search-modal"
      @close="closeSearchDialog"
    >
      <ElInput
        v-model.trim="searchVal"
        :placeholder="$t('search.placeholder')"
        @input="search"
        @blur="searchBlur"
        ref="searchInput"
        :prefix-icon="Search"
        class="search-input"
      >
        <template #suffix>
          <div class="search-input__suffix">
            <AoSvgIcon icon="fluent:arrow-enter-left-20-filled" />
          </div>
        </template>
      </ElInput>
      <ElScrollbar class="search-scrollbar" max-height="370px" ref="searchResultScrollbar" always>
        <div class="result search-result" v-show="searchResult.length">
          <div class="box search-result__item" v-for="(item, index) in searchResult" :key="index">
            <div
              class="search-result__inner"
              :class="isHighlighted(index) ? 'search-result__inner--highlighted' : ''"
              @click="searchGoPage(item)"
              @mouseenter="highlightOnHover(index)"
            >
              {{ formatMenuTitle(item.meta.title) }}
              <AoSvgIcon v-show="isHighlighted(index)" icon="fluent:arrow-enter-left-20-filled" />
            </div>
          </div>
        </div>

        <div v-show="!searchVal && searchResult.length === 0 && historyResult.length > 0">
          <p class="search-history__title">{{ $t('search.historyTitle') }}</p>
          <div class="search-history__list">
            <div
              class="box search-history__item"
              v-for="(item, index) in historyResult"
              :key="index"
              :class="historyHIndex === index ? 'search-history__item--highlighted' : ''"
              @click="searchGoPage(item)"
              @mouseenter="highlightOnHoverHistory(index)"
            >
              {{ formatMenuTitle(item.meta.title) }}
              <div class="selected-icon search-history__delete" @click.stop="deleteHistory(index)">
                <AoSvgIcon icon="ri:close-large-fill" class="search-history__delete-icon" />
              </div>
            </div>
          </div>
        </div>
      </ElScrollbar>

      <template #footer>
        <div class="dialog-footer">
          <div class="dialog-footer__group dialog-footer__group--center">
            <AoSvgIcon icon="fluent:arrow-enter-left-20-filled" class="keyboard" />
            <span class="dialog-footer__text">{{ $t('search.selectKeydown') }}</span>
          </div>
          <div class="dialog-footer__group">
            <AoSvgIcon icon="ri:arrow-up-wide-fill" class="keyboard" />
            <AoSvgIcon icon="ri:arrow-down-wide-fill" class="keyboard" />
            <span class="dialog-footer__text">{{ $t('search.switchKeydown') }}</span>
          </div>
          <div class="dialog-footer__group">
            <i class="keyboard keyboard--esc"><p class="keyboard__esc-text">ESC</p></i>
            <span class="dialog-footer__text">{{ $t('search.exitKeydown') }}</span>
          </div>
        </div>
      </template>
    </ElDialog>
  </div>
</template>

<script lang="ts" setup>
  import { AoSvgIcon } from '@ao/admin-components'
  import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
  import { ElDialog, ElInput, ElScrollbar } from 'element-plus'
  import { useAppStore } from '../store/modules/app'
  import { useSearchStore } from '../store/modules/search'
  import { getMenuSource } from '../install/context'
  import { storeToRefs } from 'pinia'
  import { AppRouteRecord } from '../types/router'
  import { Search } from '@element-plus/icons-vue'
  import { formatMenuTitle } from '../utils/router'
  import { handleMenuJump } from '../utils/navigation'
  import { type ScrollbarInstance } from 'element-plus'

  defineOptions({ name: 'AoGlobalSearch' })

  const searchStore = useSearchStore()
  const appStore = useAppStore()
  const menuList = computed(() => getMenuSource().menuList)
  const { showGlobalSearch } = storeToRefs(appStore)

  const searchVal = ref('')
  const searchResult = ref<AppRouteRecord[]>([])
  const historyMaxLength = 10

  const { searchHistory: historyResult } = storeToRefs(searchStore)

  const searchInput = ref<HTMLInputElement | null>(null)
  const highlightedIndex = ref(0)
  const historyHIndex = ref(0)
  const searchResultScrollbar = ref<ScrollbarInstance>()
  const isKeyboardNavigating = ref(false) // 新增状态：是否正在使用键盘导航

  // 监听全局搜索状态变化，打开时自动聚焦输入框
  watch(showGlobalSearch, (val) => {
    if (val) {
      focusInput()
    }
  })

  // 生命周期钩子
  onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
  })

  // 键盘快捷键处理
  const handleKeydown = (event: KeyboardEvent) => {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0
    const isCommandKey = isMac ? event.metaKey : event.ctrlKey

    if (isCommandKey && event.key.toLowerCase() === 'k') {
      event.preventDefault()
      showGlobalSearch.value = true
      focusInput()
    }

    // 当搜索对话框打开时，处理方向键和回车键
    if (showGlobalSearch.value) {
      if (event.key === 'ArrowUp') {
        event.preventDefault()
        highlightPrevious()
      } else if (event.key === 'ArrowDown') {
        event.preventDefault()
        highlightNext()
      } else if (event.key === 'Enter') {
        event.preventDefault()
        selectHighlighted()
      } else if (event.key === 'Escape') {
        event.preventDefault()
        showGlobalSearch.value = false
      }
    }
  }

  const focusInput = () => {
    setTimeout(() => {
      searchInput.value?.focus()
    }, 100)
  }

  // 搜索逻辑
  const search = (val: string) => {
    if (val) {
      searchResult.value = flattenAndFilterMenuItems(menuList.value, val)
    } else {
      searchResult.value = []
    }
  }

  const flattenAndFilterMenuItems = (items: AppRouteRecord[], val: string): AppRouteRecord[] => {
    const lowerVal = val.toLowerCase()
    const result: AppRouteRecord[] = []

    const flattenAndMatch = (item: AppRouteRecord) => {
      if (item.meta?.isHide) return

      const lowerItemTitle = formatMenuTitle(item.meta.title).toLowerCase()

      if (item.children && item.children.length > 0) {
        item.children.forEach(flattenAndMatch)
        return
      }

      if (
        lowerItemTitle.includes(lowerVal) &&
        ((item.path && item.path.trim()) || item.meta.link || item.meta.isIframe)
      ) {
        result.push({ ...item, children: undefined })
      }
    }

    items.forEach(flattenAndMatch)
    return result
  }

  // 高亮控制并实现滚动条跟随
  const highlightPrevious = () => {
    isKeyboardNavigating.value = true
    if (searchVal.value) {
      highlightedIndex.value =
        (highlightedIndex.value - 1 + searchResult.value.length) % searchResult.value.length
      scrollToHighlightedItem()
    } else {
      historyHIndex.value =
        (historyHIndex.value - 1 + historyResult.value.length) % historyResult.value.length
      scrollToHighlightedHistoryItem()
    }
    // 延迟重置键盘导航状态，防止立即被 hover 覆盖
    setTimeout(() => {
      isKeyboardNavigating.value = false
    }, 100)
  }

  const highlightNext = () => {
    isKeyboardNavigating.value = true
    if (searchVal.value) {
      highlightedIndex.value = (highlightedIndex.value + 1) % searchResult.value.length
      scrollToHighlightedItem()
    } else {
      historyHIndex.value = (historyHIndex.value + 1) % historyResult.value.length
      scrollToHighlightedHistoryItem()
    }
    setTimeout(() => {
      isKeyboardNavigating.value = false
    }, 100)
  }

  const scrollToHighlightedItem = () => {
    nextTick(() => {
      if (!searchResultScrollbar.value || !searchResult.value.length) return

      const scrollWrapper = searchResultScrollbar.value.wrapRef
      if (!scrollWrapper) return

      const highlightedElements = scrollWrapper.querySelectorAll('.result .box')
      if (!highlightedElements[highlightedIndex.value]) return

      const highlightedElement = highlightedElements[highlightedIndex.value] as HTMLElement
      const itemHeight = highlightedElement.offsetHeight
      const scrollTop = scrollWrapper.scrollTop
      const containerHeight = scrollWrapper.clientHeight
      const itemTop = highlightedElement.offsetTop
      const itemBottom = itemTop + itemHeight

      if (itemTop < scrollTop) {
        searchResultScrollbar.value.setScrollTop(itemTop)
      } else if (itemBottom > scrollTop + containerHeight) {
        searchResultScrollbar.value.setScrollTop(itemBottom - containerHeight)
      }
    })
  }

  const scrollToHighlightedHistoryItem = () => {
    nextTick(() => {
      if (!searchResultScrollbar.value || !historyResult.value.length) return

      const scrollWrapper = searchResultScrollbar.value.wrapRef
      if (!scrollWrapper) return

      const historyItems = scrollWrapper.querySelectorAll('.history-result .box')
      if (!historyItems[historyHIndex.value]) return

      const highlightedElement = historyItems[historyHIndex.value] as HTMLElement
      const itemHeight = highlightedElement.offsetHeight
      const scrollTop = scrollWrapper.scrollTop
      const containerHeight = scrollWrapper.clientHeight
      const itemTop = highlightedElement.offsetTop
      const itemBottom = itemTop + itemHeight

      if (itemTop < scrollTop) {
        searchResultScrollbar.value.setScrollTop(itemTop)
      } else if (itemBottom > scrollTop + containerHeight) {
        searchResultScrollbar.value.setScrollTop(itemBottom - containerHeight)
      }
    })
  }

  const selectHighlighted = () => {
    if (searchVal.value && searchResult.value.length) {
      searchGoPage(searchResult.value[highlightedIndex.value])
    } else if (!searchVal.value && historyResult.value.length) {
      searchGoPage(historyResult.value[historyHIndex.value])
    }
  }

  const isHighlighted = (index: number) => {
    return highlightedIndex.value === index
  }

  const searchBlur = () => {
    highlightedIndex.value = 0
  }

  const searchGoPage = (item: AppRouteRecord) => {
    showGlobalSearch.value = false
    addHistory(item)
    handleMenuJump(item)
    searchVal.value = ''
    searchResult.value = []
  }

  // 历史记录管理
  const updateHistory = () => {
    if (Array.isArray(historyResult.value)) {
      searchStore.setSearchHistory(historyResult.value)
    }
  }

  const addHistory = (item: AppRouteRecord) => {
    const itemKey = item.path || String(item.meta.link || '')
    const hasItemIndex = historyResult.value.findIndex(
      (historyItem: AppRouteRecord) =>
        (historyItem.path || String(historyItem.meta.link || '')) === itemKey
    )

    if (hasItemIndex !== -1) {
      historyResult.value.splice(hasItemIndex, 1)
    } else if (historyResult.value.length >= historyMaxLength) {
      historyResult.value.pop()
    }

    const cleanedItem = { ...item }
    delete cleanedItem.children
    delete cleanedItem.meta.authList
    historyResult.value.unshift(cleanedItem)
    updateHistory()
  }

  const deleteHistory = (index: number) => {
    historyResult.value.splice(index, 1)
    updateHistory()
  }

  // 对话框控制
  const closeSearchDialog = () => {
    searchVal.value = ''
    searchResult.value = []
    highlightedIndex.value = 0
    historyHIndex.value = 0
  }

  // 修改 hover 高亮逻辑，只有在非键盘导航时才生效
  const highlightOnHover = (index: number) => {
    if (!isKeyboardNavigating.value && searchVal.value) {
      highlightedIndex.value = index
    }
  }

  const highlightOnHoverHistory = (index: number) => {
    if (!isKeyboardNavigating.value && !searchVal.value) {
      historyHIndex.value = index
    }
  }
</script>
<style lang="scss" scoped>
  .layout-search {
    :deep(.search-modal) {
      background-color: var(--ao-modal-overlay);
    }
    :deep(.el-dialog__body) {
      padding: 5px 0 0 !important;
    }
    :deep(.el-dialog__header) {
      padding: 0;
    }
    .el-input {
      :deep(.el-input__wrapper) {
        background-color: var(--ao-gray-200);
        border: 1px solid var(--default-border-dashed);
        border-radius: calc(var(--custom-radius) / 2 + 2px) !important;
        box-shadow: none;
      }
      :deep(.el-input__inner) {
        color: var(--ao-gray-800) !important;
      }
    }
  }

  .dark .layout-search {
    .el-input {
      :deep(.el-input__wrapper) {
        background-color: var(--ao-gray-300);
        border: 1px solid var(--ao-gray-400);
      }
    }
    :deep(.search-modal) {
      background-color: var(--ao-modal-overlay);
      backdrop-filter: none;
    }
    :deep(.el-dialog) {
      background-color: var(--default-box-color);
    }
  }

  // 搜索输入框
  .search-input {
    height: 3rem;
    &__suffix {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1.125rem;
      padding-right: 0.375rem;
      padding-left: 0.375rem;
      color: var(--ao-gray-500);
      background: var(--default-box-color) !important;
      border: 1px solid var(--ao-gray-300);
      border-radius: 0.25rem;
      .dark & {
        background: color-mix(in srgb, var(--ao-gray-200) 50%, transparent) !important;
      }
    }
  }

  // 滚动区
  .search-scrollbar {
    margin-top: 1.25rem;
  }

  // 搜索结果
  .search-result {
    width: 100%;
    &__item {
      margin-top: 0 !important;
      font-size: 1rem;
      line-height: 1;
      cursor: pointer;
    }
    &__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 3rem;
      padding-right: 1rem;
      padding-left: 1rem;
      margin-top: 0.5rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: var(--ao-gray-700);
      background: color-mix(in srgb, var(--ao-gray-200) 80%, transparent);
      border-radius: calc(var(--custom-radius) / 2 + 2px);
      &--highlighted {
        color: var(--ao-text-on-theme) !important;
        background: color-mix(in srgb, var(--theme-color) 70%, transparent) !important;
      }
    }
  }

  // 历史搜索
  .search-history {
    &__title {
      font-size: 0.75rem;
      line-height: 1rem;
      color: var(--ao-gray-500);
    }
    &__list {
      width: 100%;
      margin-top: 0.375rem;
    }
    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 3rem;
      padding-right: 1rem;
      padding-left: 1rem;
      margin-top: 0.5rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: var(--ao-gray-800);
      cursor: pointer;
      background: color-mix(in srgb, var(--ao-gray-200) 80%, transparent);
      border-radius: calc(var(--custom-radius) / 2 + 2px);
      &--highlighted {
        color: var(--ao-text-on-theme) !important;
        background: color-mix(in srgb, var(--theme-color) 70%, transparent) !important;
        .selected-icon {
          color: var(--ao-text-on-theme) !important;
        }
      }
    }
    // 删除按钮
    &__delete {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.25rem;
      height: 1.25rem;
      color: var(--ao-gray-500);
      cursor: pointer;
      user-select: none;
      border-radius: 9999px;
    }
    // 删除图标
    &__delete-icon {
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }

  // 对话框底部
  .dialog-footer {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-top: 1.125rem;
    padding-bottom: 0.25rem;
    border-top: 1px solid var(--default-border);
    &__group {
      display: flex;
      align-items: center;
      &--center {
        justify-content: center;
      }
    }
    &__text {
      margin-right: 0.875rem;
      font-size: 0.75rem;
      line-height: 1rem;
      color: var(--ao-gray-700);
    }
  }

  // 键盘按键样式
  .keyboard {
    box-sizing: border-box;
    width: 1.375rem;
    height: 1.25rem;
    padding-right: 0.25rem;
    padding-left: 0.25rem;
    margin-right: 0.5rem;
    color: var(--ao-gray-500);
    border: 1px solid var(--ao-gray-400);
    border-radius: 0.25rem;
    box-shadow: 0 2px 0 var(--default-border-dashed);
    &:last-of-type {
      margin-right: 0.375rem;
    }
    // ESC 键宽度覆盖
    &--esc {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem !important;
    }
    // ESC 文字
    &__esc-text {
      font-size: 10px;
      font-weight: 500;
    }
  }
</style>
