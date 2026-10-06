<!-- 顶部栏用户头像区（业务组件示例）：演示业务侧如何通过 #user-avatar 插槽接管头像内容与交互 -->
<template>
  <ElPopover
    ref="userMenuPopover"
    placement="bottom-end"
    :width="240"
    :hide-after="0"
    :offset="10"
    trigger="hover"
    :show-arrow="false"
    popper-class="user-menu-popover"
    popper-style="padding: 5px 16px;"
  >
    <template #reference>
      <img class="user-avatar" :src="userAvatar" alt="avatar" />
    </template>
    <template #default>
      <div class="user-menu">
        <div class="user-menu__header">
          <img class="user-menu__avatar" :src="userAvatar" />
          <div class="user-menu__info">
            <span class="user-menu__name">{{ userName }}</span>
            <span class="user-menu__email">{{ userEmail }}</span>
          </div>
        </div>
        <ul class="user-menu__list">
          <li class="btn-item" @click="showDevTip">
            <AoSvgIcon icon="ri:user-3-line" />
            <span>{{ $t('pgUser.userCenter') }}</span>
          </li>
          <div class="user-menu__divider"></div>
          <div class="log-out" @click="loginOut">
            {{ $t('pgUser.logout') }}
          </div>
        </ul>
      </div>
    </template>
  </ElPopover>
</template>

<script setup lang="ts">
  import { AoSvgIcon } from '@ao/admin-components'
  import { ElMessage, ElMessageBox, ElPopover } from 'element-plus'
  import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  defineOptions({ name: 'PlaygroundUserMenu' })

  /**
   * 用户信息
   * @description 由宿主 / Admin模板经插槽传入；布局包不再注入用户域数据。
   */
  const props = defineProps<{
    user?: {
      userName?: string
      email?: string
      avatar?: string
    }
  }>()

  /**
   * 登出事件
   * @description 弹层内完成确认交互后抛出，实际登出（清会话 / 跳登录页）由宿主执行。
   */
  const emit = defineEmits<{
    logout: []
  }>()

  // 文案由业务侧自行维护（示例用 playground 本地语言包，不复用布局包文案）
  const { t } = useI18n()

  // 头像地址（未提供时回退占位图）
  const userAvatar = computed(() => props.user?.avatar || 'https://dummyimage.com/160x160.png')
  // 用户名 / 邮箱（仅展示）
  const userName = computed(() => props.user?.userName)
  const userEmail = computed(() => props.user?.email)

  // 用户菜单弹层组件引用
  const userMenuPopover = ref()

  /**
   * 打开用户中心（演示占位）
   * @return {void} 无返回值
   */
  const showDevTip = (): void => {
    ElMessage.info('正在开发中')
  }

  /**
   * 用户登出确认
   * @return {void} 无返回值
   */
  const loginOut = (): void => {
    closeUserMenu()
    setTimeout(() => {
      ElMessageBox.confirm(t('pgUser.logOutTips'), t('pgUser.tips'), {
        confirmButtonText: t('pgUser.confirm'),
        cancelButtonText: t('pgUser.cancel'),
        customClass: 'login-out-dialog'
      }).then(() => {
        emit('logout')
      })
    }, 200)
  }

  /**
   * 关闭用户菜单弹出层
   * @return {void} 无返回值
   */
  const closeUserMenu = (): void => {
    setTimeout(() => {
      userMenuPopover.value.hide()
    }, 100)
  }
</script>

<style scoped lang="scss">
  // 头像（弹层触发器）：尺寸与圆角属于业务侧展示规范，右间距由布局包容器提供
  .user-avatar {
    width: 2.125rem;
    height: 2.125rem;
    cursor: pointer;
    border-radius: 9999px;
    @media (width <= 39.99rem) {
      width: 1.625rem;
      height: 1.625rem;
    }
  }

  // 用户菜单弹层
  .user-menu {
    padding-top: 0.75rem;
    &__header {
      display: flex;
      align-items: center;
      padding-right: 0;
      padding-bottom: 0.25rem;
      padding-left: 0;
    }
    &__avatar {
      float: left;
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 0.75rem;
      margin-left: 0;
      overflow: hidden;
      border-radius: 9999px;
    }
    &__info {
      width: calc(100% - 60px);
      height: 100%;
    }
    // 用户名
    &__name {
      display: block;
      overflow: hidden;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.25rem;
      color: var(--ao-gray-800);
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    // 邮箱
    &__email {
      display: block;
      margin-top: 0.125rem;
      overflow: hidden;
      font-size: 0.75rem;
      line-height: 1rem;
      color: var(--ao-gray-500);
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &__list {
      padding-top: 1rem;
      padding-bottom: 1rem;
      margin-top: 0.75rem;
      border-top: 1px solid color-mix(in srgb, var(--ao-gray-300) 80%, transparent);
    }
    // 分割线
    &__divider {
      width: 100%;
      height: 1px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      background: color-mix(in srgb, var(--ao-gray-300) 80%, transparent);
    }
  }

  // 菜单项
  .btn-item {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    margin-bottom: 0.75rem;
    cursor: pointer;
    user-select: none;
    border-radius: 0.375rem;
    &:last-child {
      margin-bottom: 0;
    }
    span {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    :deep(.ao-svg-icon) {
      margin-right: 0.5rem;
      font-size: 1rem;
      line-height: 1.5rem;
    }
    &:hover {
      background-color: var(--ao-gray-200);
    }
  }

  // 退出登录按钮
  .log-out {
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    margin-top: 1.25rem;
    font-size: 0.75rem;
    line-height: 1rem;
    text-align: center;
    cursor: pointer;
    border: 1px solid var(--ao-gray-400);
    border-radius: 0.375rem;
    transition-duration: 200ms;
    transition-property: all;
    &:hover {
      box-shadow:
        0 20px 25px -5px var(--ao-shadow-10),
        0 8px 10px -6px var(--ao-shadow-10);
    }
  }
</style>
