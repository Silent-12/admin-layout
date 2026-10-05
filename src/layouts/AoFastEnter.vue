<!-- 顶部业务系统切换器 -->
<template>
  <ElDropdown popper-class="langDropDownStyle" @command="openApplication">
    <!-- 快速入口 -->
    <slot />

    <!-- 系统列表 -->
    <template #dropdown>
      <ElDropdownMenu>
        <div v-for="item in applicationList" :key="item.path" class="lang-btn-item">
          <ElDropdownItem
            :command="item"
            :class="{ 'is-selected': item.path === currentApplication?.path }"
          >
            <span class="menu-txt">{{ formatMenuTitle(item.meta.title) }}</span>
            <AoSvgIcon
              style="margin-left: 5px"
              icon="ri:check-fill"
              v-if="item.path === currentApplication?.path"
            />
          </ElDropdownItem>
        </div>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<script setup lang="ts">
import { AoSvgIcon } from '@ao/admin-components'
  import { computed } from 'vue'
  import { getMenuSource } from '../install/context'
  import { useRouter } from 'vue-router'
  import { ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus'
  import type { AppRouteRecord } from '../types/router'
  import { getFirstMenuPath } from '../utils/navigation/route'
  import { formatMenuTitle } from '../utils/router'

  defineOptions({ name: 'AoFastEnter' })

  const router = useRouter()
  const applicationList = computed(() => getMenuSource().applicationList)
  const currentApplication = computed(() => getMenuSource().currentApplication)

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
