<!-- 顶部业务系统切换器 -->
<template>
  <ElDropdown popper-class="fastEnterDropDownStyle" @command="openApplication">
    <!-- 快速入口 -->
    <slot />

    <!-- 系统列表 -->
    <template #dropdown>
      <ElDropdownMenu>
        <div v-for="item in applicationList" :key="item.path" class="lang-btn-item">
          <ElDropdownItem
            :command="item"
            :class="{ 'is-selected': item.path === currentApplication?.path }"
            :style="{
              color:
                item.path === currentApplication?.path
                  ? currentApplicationTextColor
                  : 'var(--el-text-color-regular)'
            }"
          >
            <span class="menu-txt">{{ formatMenuTitle(item.meta.title) }}</span>
          </ElDropdownItem>
        </div>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import { getMenuSource } from '../install/context'
  import { useRouter } from 'vue-router'
  import { ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus'
  import { useSettingStore } from '../store/modules/setting'
  import type { AppRouteRecord } from '../types/router'
  import { getFirstMenuPath } from '../utils/navigation/route'
  import { formatMenuTitle } from '../utils/router'

  defineOptions({ name: 'AoFastEnter' })

  const router = useRouter()
  const applicationList = computed(() => getMenuSource().applicationList)
  const currentApplication = computed(() => getMenuSource().currentApplication)
  const { systemThemeColor } = storeToRefs(useSettingStore())
  const currentApplicationTextColor = computed(() => getContrastTextColor(systemThemeColor.value))

  /**
   * @description 根据主题色亮度选择可读性更好的选中项文字颜色。
   * @param color 当前系统主题色，格式为六位十六进制颜色。
   * @return 与背景对比度更高的黑色或白色。
   */
  const getContrastTextColor = (color: string): string => {
    const channels = color.match(/[0-9a-f]{2}/gi)
    if (!channels || channels.length < 3) return 'var(--ao-white)'

    const [red, green, blue] = channels.slice(0, 3).map((channel) => {
      const value = parseInt(channel, 16) / 255
      return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
    })
    const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue

    return luminance > 0.179 ? 'var(--ao-black)' : 'var(--ao-white)'
  }

  /**
   * @description 在新浏览器标签中打开目标业务系统首页。
   * @param application 目标业务系统路由。
   * @return 无返回值。
   */
  const openApplication = (application: AppRouteRecord): void => {
    const homePath = getFirstMenuPath(application.children || [])
    if (!homePath || application.path === currentApplication.value?.path) {
      return
    }

    const targetUrl = router.resolve({ path: homePath }).href
    window.open(targetUrl, '_blank', 'noopener')
  }
</script>
