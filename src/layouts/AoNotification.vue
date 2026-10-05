<!-- 通知组件 -->
<template>
  <div
    class="ao-notification-panel ao-card-sm notification-panel"
    :style="{
      transform: show ? 'scaleY(1)' : 'scaleY(0.9)',
      opacity: show ? 1 : 0
    }"
    v-show="visible"
    @click.stop
  >
    <div class="notification-panel__header">
      <span class="notification-panel__title">{{ $t('notice.title') }}</span>
      <span class="notification-panel__read-btn">
        {{ $t('notice.btnRead') }}
      </span>
    </div>

    <ul class="notification-panel__tabs">
      <li
        v-for="(item, index) in barList"
        :key="index"
        class="notification-panel__tab"
        :class="{ 'bar-active': barActiveIndex === index }"
        @click="changeBar(index)"
      >
        {{ item.name }} ({{ item.num }})
      </li>
    </ul>

    <div class="notification-panel__content">
      <div class="notification-panel__scroll scrollbar-thin">
        <!-- 通知 -->
        <ul v-show="barActiveIndex === 0">
          <li v-for="(item, index) in noticeList" :key="index" class="notification-item">
            <div class="notification-item__icon" :class="[getNoticeStyle(item.type).iconClass]">
              <AoSvgIcon
                class="notification-item__icon-svg"
                :icon="getNoticeStyle(item.type).icon"
              />
            </div>
            <div class="notification-item__body">
              <h4 class="notification-item__title">{{ item.title }}</h4>
              <p class="notification-item__time">{{ item.time }}</p>
            </div>
          </li>
        </ul>

        <!-- 消息 -->
        <ul v-show="barActiveIndex === 1">
          <li v-for="(item, index) in msgList" :key="index" class="notification-item">
            <div class="notification-item__avatar-box">
              <img :src="item.avatar" class="notification-item__avatar" />
            </div>
            <div class="notification-item__body">
              <h4 class="notification-item__msg-title">{{ item.title }}</h4>
              <p class="notification-item__time">{{ item.time }}</p>
            </div>
          </li>
        </ul>

        <!-- 待办 -->
        <ul v-show="barActiveIndex === 2">
          <li v-for="(item, index) in pendingList" :key="index" class="pending-item">
            <h4>{{ item.title }}</h4>
            <p class="pending-item__time">{{ item.time }}</p>
          </li>
        </ul>

        <!-- 空状态 -->
        <div v-show="currentTabIsEmpty" class="notification-empty">
          <AoSvgIcon icon="system-uicons:inbox" class="notification-empty__icon" />
          <p class="notification-empty__text"
            >{{ $t('notice.text[0]') }}{{ barList[barActiveIndex].name }}</p
          >
        </div>
      </div>

      <div class="notification-panel__footer">
        <ElButton class="notification-panel__view-all" @click="handleViewAll">
          {{ $t('notice.viewAll') }}
        </ElButton>
      </div>
    </div>

    <div class="notification-panel__bottom-spacer"></div>
  </div>
</template>

<script setup lang="ts">
import { AoSvgIcon } from '@ao/admin-components'
  import { ElButton } from 'element-plus'
  import { computed, ref, watch, type Ref, type ComputedRef } from 'vue'
  import { useI18n } from 'vue-i18n'

  // 使用与已移除图片相同尺寸的占位头像
  const avatar1 = 'https://dummyimage.com/160x160.png'
  const avatar2 = 'https://dummyimage.com/160x160.png'
  const avatar3 = 'https://dummyimage.com/160x160.png'
  const avatar4 = 'https://dummyimage.com/80x80.png'
  const avatar5 = 'https://dummyimage.com/80x80.png'
  const avatar6 = 'https://dummyimage.com/80x80.png'

  defineOptions({ name: 'AoNotification' })

  interface NoticeItem {
    /** 标题 */
    title: string
    /** 时间 */
    time: string
    /** 类型 */
    type: NoticeType
  }

  interface MessageItem {
    /** 标题 */
    title: string
    /** 时间 */
    time: string
    /** 头像 */
    avatar: string
  }

  interface PendingItem {
    /** 标题 */
    title: string
    /** 时间 */
    time: string
  }

  interface BarItem {
    /** 名称 */
    name: ComputedRef<string>
    /** 数量 */
    num: number
  }

  interface NoticeStyle {
    /** 图标 */
    icon: string
    /** icon 样式 */
    iconClass: string
  }

  type NoticeType = 'email' | 'message' | 'collection' | 'user' | 'notice'

  const { t } = useI18n()

  const props = defineProps<{
    value: boolean
  }>()

  const emit = defineEmits<{
    'update:value': [value: boolean]
  }>()

  const show = ref(false)
  const visible = ref(false)
  const barActiveIndex = ref(0)

  const useNotificationData = () => {
    // 通知数据
    const noticeList = ref<NoticeItem[]>([
      {
        title: 'xxxxxxxxxx',
        time: '2024-6-13 0:10',
        type: 'email'
      },
      {
        title: 'xxxxxxxxxx',
        time: '2024-4-21 8:05',
        type: 'message'
      },
      {
        title: 'xxxxxxxxxx',
        time: '2020-3-17 21:12',
        type: 'collection'
      },
      {
        title: 'xxxxxxxxxx',
        time: '2024-02-14 0:20',
        type: 'user'
      },
      {
        title: 'xxxxxxxxxx',
        time: '2024-1-20 0:15',
        type: 'notice'
      }
    ])

    // 消息数据
    const msgList = ref<MessageItem[]>([
      {
        title: 'xxxxxxxxxx',
        time: '2021-2-26 23:50',
        avatar: avatar1
      },
      {
        title: 'xxxxxxxxxx',
        time: '2021-2-21 8:05',
        avatar: avatar2
      },
      {
        title: 'xxxxxxxxxx',
        time: '2020-1-17 21:12',
        avatar: avatar3
      },
      {
        title: 'xxxxxxxxxx',
        time: '2021-01-14 0:20',
        avatar: avatar4
      },
      {
        title: 'xxxxxxxxxx',
        time: '2020-12-20 0:15',
        avatar: avatar5
      },
      {
        title: 'xxxxxxxxxx',
        time: '2020-12-17 22:06',
        avatar: avatar6
      }
    ])

    // 待办数据
    const pendingList = ref<PendingItem[]>([])

    // 标签栏数据
    const barList = computed<BarItem[]>(() => [
      {
        name: computed(() => t('notice.bar[0]')),
        num: noticeList.value.length
      },
      {
        name: computed(() => t('notice.bar[1]')),
        num: msgList.value.length
      },
      {
        name: computed(() => t('notice.bar[2]')),
        num: pendingList.value.length
      }
    ])

    return {
      noticeList,
      msgList,
      pendingList,
      barList
    }
  }

  // 样式管理
  const useNotificationStyles = () => {
    // 通知图标样式映射（使用语义化类名，对应 SCSS 中定义）
    const noticeStyleMap: Record<NoticeType, NoticeStyle> = {
      email: {
        icon: 'ri:mail-line',
        iconClass: 'notice-icon--email'
      },
      message: {
        icon: 'ri:volume-down-line',
        iconClass: 'notice-icon--message'
      },
      collection: {
        icon: 'ri:heart-3-line',
        iconClass: 'notice-icon--collection'
      },
      user: {
        icon: 'ri:volume-down-line',
        iconClass: 'notice-icon--user'
      },
      notice: {
        icon: 'ri:notification-3-line',
        iconClass: 'notice-icon--notice'
      }
    }

    const getNoticeStyle = (type: NoticeType): NoticeStyle => {
      const defaultStyle: NoticeStyle = {
        icon: 'ri:arrow-right-circle-line',
        iconClass: 'notice-icon--notice'
      }

      return noticeStyleMap[type] || defaultStyle
    }

    return {
      getNoticeStyle
    }
  }

  // 动画管理
  const useNotificationAnimation = () => {
    const showNotice = (open: boolean) => {
      if (open) {
        visible.value = true
        setTimeout(() => {
          show.value = true
        }, 5)
      } else {
        show.value = false
        setTimeout(() => {
          visible.value = false
        }, 350)
      }
    }

    return {
      showNotice
    }
  }

  // 标签页管理
  const useTabManagement = (
    noticeList: Ref<NoticeItem[]>,
    msgList: Ref<MessageItem[]>,
    pendingList: Ref<PendingItem[]>,
    businessHandlers: {
      handleNoticeAll: () => void
      handleMsgAll: () => void
      handlePendingAll: () => void
    }
  ) => {
    const changeBar = (index: number) => {
      barActiveIndex.value = index
    }

    // 检查当前标签页是否为空
    const currentTabIsEmpty = computed(() => {
      const tabDataMap = [noticeList.value, msgList.value, pendingList.value]

      const currentData = tabDataMap[barActiveIndex.value]
      return currentData && currentData.length === 0
    })

    const handleViewAll = () => {
      // 查看全部处理器映射
      const viewAllHandlers: Record<number, () => void> = {
        0: businessHandlers.handleNoticeAll,
        1: businessHandlers.handleMsgAll,
        2: businessHandlers.handlePendingAll
      }

      const handler = viewAllHandlers[barActiveIndex.value]
      handler?.()

      // 关闭通知面板
      emit('update:value', false)
    }

    return {
      changeBar,
      currentTabIsEmpty,
      handleViewAll
    }
  }

  // 业务逻辑处理
  const useBusinessLogic = () => {
    const handleNoticeAll = () => {
      // 处理查看全部通知
      console.log('查看全部通知')
    }

    const handleMsgAll = () => {
      // 处理查看全部消息
      console.log('查看全部消息')
    }

    const handlePendingAll = () => {
      // 处理查看全部待办
      console.log('查看全部待办')
    }

    return {
      handleNoticeAll,
      handleMsgAll,
      handlePendingAll
    }
  }

  // 组合所有逻辑
  const { noticeList, msgList, pendingList, barList } = useNotificationData()
  const { getNoticeStyle } = useNotificationStyles()
  const { showNotice } = useNotificationAnimation()
  const { handleNoticeAll, handleMsgAll, handlePendingAll } = useBusinessLogic()
  const { changeBar, currentTabIsEmpty, handleViewAll } = useTabManagement(
    noticeList,
    msgList,
    pendingList,
    { handleNoticeAll, handleMsgAll, handlePendingAll }
  )

  // 监听属性变化
  watch(
    () => props.value,
    (newValue) => {
      showNotice(newValue)
    }
  )
</script>

<style scoped lang="scss">
  // 通知面板容器
  .notification-panel {
    position: absolute;
    top: 3.625rem;
    right: 1.25rem;
    width: 22.5rem;
    height: 31.25rem;
    overflow: hidden;
    box-shadow:
      0 20px 25px -5px var(--ao-shadow-10),
      0 8px 10px -6px var(--ao-shadow-10) !important;
    transition-duration: 300ms;
    transition-property: all;
    transform-origin: top;
    will-change: top, left;
    @media (width <= 640px) {
      top: 65px;
      right: 0;
      width: 100%;
      height: 80vh;
    }
    // 头部
    & &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 0.875rem;
      padding-left: 0.875rem;
      margin-top: 0.875rem;
    }
    & &__title {
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.5rem;
      color: var(--ao-gray-800);
    }
    & &__read-btn {
      padding: 0.25rem 0.375rem;
      font-size: 0.75rem;
      line-height: 1rem;
      color: var(--ao-gray-800);
      cursor: pointer;
      user-select: none;
      border-radius: 0.25rem;
      &:hover {
        background: var(--ao-gray-200);
      }
    }
    // 标签栏
    & &__tabs {
      box-sizing: border-box;
      display: flex;
      align-items: flex-end;
      width: 100%;
      height: 3.125rem;
      padding-right: 0.875rem;
      padding-left: 0.875rem;
      border-bottom: 1px solid var(--default-border);
    }
    & &__tab {
      height: 3rem;
      margin-right: 1.25rem;
      overflow: hidden;
      font-size: 13px;
      line-height: 3rem;
      color: var(--ao-gray-700);
      cursor: pointer;
      user-select: none;
    }
    // 内容区
    & &__content {
      width: 100%;
      height: calc(100% - 95px);
    }
    & &__scroll {
      height: calc(100% - 60px);
      overflow-y: scroll;
    }
    // 自定义滚动条
    .scrollbar-thin::-webkit-scrollbar {
      width: 5px !important;
    }
    .dark .scrollbar-thin::-webkit-scrollbar-track {
      background-color: var(--default-box-color);
    }
    .dark .scrollbar-thin::-webkit-scrollbar-thumb {
      background-color: var(--ao-notification-scrollbar-thumb) !important;
    }
    // 通知/消息项
    .notification-item {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 0.875rem;
      cursor: pointer;
      &:last-child {
        border-bottom: 0;
      }
      &:hover {
        background: color-mix(in srgb, var(--ao-gray-200) 60%, transparent);
      }
      // 图标容器
      &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.25rem;
        height: 2.25rem;
        line-height: 2.25rem;
        text-align: center;
        border-radius: 0.5rem;
      }
      // 图标 SVG
      &__icon-svg {
        font-size: 1.125rem;
        line-height: 1.75rem;
        background: transparent !important;
      }
      // 文本主体
      &__body {
        width: calc(100% - 45px);
        margin-left: 0.875rem;
      }
      // 通知标题
      &__title {
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.375rem;
        color: var(--ao-gray-900);
      }
      // 消息标题
      &__msg-title {
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.375rem;
      }
      // 时间
      &__time {
        margin-top: 0.375rem;
        font-size: 0.75rem;
        line-height: 1rem;
        color: var(--ao-gray-500);
      }
      // 头像容器
      &__avatar-box {
        width: 2.25rem;
        height: 2.25rem;
      }
      // 头像图片
      &__avatar {
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
      }
    }
    // 待办项
    .pending-item {
      box-sizing: border-box;
      padding: 0.875rem 1.25rem;
      &:last-child {
        border-bottom: 0;
      }
      &__time {
        font-size: 0.75rem;
        line-height: 1rem;
        color: var(--ao-gray-500);
      }
    }
    // 空状态
    .notification-empty {
      position: relative;
      top: 6.25rem;
      height: 100%;
      color: var(--ao-gray-500);
      text-align: center;
      background: transparent !important;
      // 空状态图标
      &__icon {
        font-size: 3rem;
        line-height: 1;
      }
      // 空状态文字
      &__text {
        margin-top: 0.875rem;
        font-size: 0.75rem;
        line-height: 1rem;
        background: transparent !important;
      }
    }
    //  底部按钮区
    & &__footer {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      padding-right: 0.875rem;
      padding-left: 0.875rem;
    }
    // 查看全部按钮
    & &__view-all {
      width: 100%;
      margin-top: 0.75rem;
    }
    // 底部占位
    & &__bottom-spacer {
      height: 6.25rem;
    }
    // 标签激活状态
    .bar-active {
      color: var(--theme-color) !important;
      border-bottom: 2px solid var(--theme-color);
    }
    // 通知图标类型样式
    .notice-icon {
      &--email {
        color: var(--ao-warning);
        background: color-mix(in srgb, var(--ao-warning) 12%, transparent);
      }
      &--message {
        color: var(--ao-success);
        background: color-mix(in srgb, var(--ao-success) 12%, transparent);
      }
      &--collection {
        color: var(--ao-danger);
        background: color-mix(in srgb, var(--ao-danger) 12%, transparent);
      }
      &--user {
        color: var(--ao-info);
        background: color-mix(in srgb, var(--ao-info) 12%, transparent);
      }
      &--notice {
        color: var(--theme-color);
        background: color-mix(in srgb, var(--theme-color) 12%, transparent);
      }
    }
  }
</style>
