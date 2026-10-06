<!-- Admin模板布局入口：承载 AppLayout，并通过 #sidebar-header / #user-avatar 插槽接管侧栏顶部与顶部栏用户头像区 -->
<template>
  <AppLayout>
    <template #sidebar-header="{ menuOpen, theme }">
      <SidebarBrand :collapsed="!menuOpen" :theme="theme" />
    </template>
    <!-- 用户信息由Admin模板持有，经插槽传入业务组件；登出逻辑同样在宿主侧处理 -->
    <template #user-avatar>
      <UserMenu :user="demoUser" @logout="handleLogout" />
    </template>
  </AppLayout>
</template>

<script setup lang="ts">
  import { AppLayout } from '@ao/admin-layout'
  import { ref } from 'vue'
  import SidebarBrand from './SidebarBrand.vue'
  import UserMenu from './UserMenu.vue'

  defineOptions({ name: 'PlaygroundLayout' })

  // 模拟Admin模板持有的用户信息（布局包不再注入用户域数据）
  const demoUser = ref({ userName: '演示用户', email: 'demo@example.com', avatar: '' })

  /**
   * 处理登出
   * @description 示例：实际由Admin模板执行清会话、跳转登录页等动作。
   * @return {void} 无返回值
   */
  const handleLogout = (): void => {
    console.info('logout')
  }
</script>
