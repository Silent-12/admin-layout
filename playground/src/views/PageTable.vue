<!-- 贴边表格回归页：无外边距、内边距的路由页面，用于回归布局包对表格外框的衔接处理 -->
<!-- 接入约定见 README「贴边表格页面」：根容器 page-flush-table，直接子级主体 AoTable 加 page-main-table -->
<!-- 页面自身不设任何间距；边框衔接由布局包 src/styles/app.scss 统一处理，此处不得重复编写边框覆盖 -->
<template>
  <div class="ao-full-height page-flush-table">
    <AoTable class="page-main-table" :data="tableData" :columns="columns">
      <template #header-left>贴边表格回归</template>
    </AoTable>
  </div>
</template>

<script setup lang="ts">
  import { AoTable } from '@ao/admin-components'
  import { ref } from 'vue'

  defineOptions({ name: 'PageTable' })

  // 演示数据：仅用于撑起表格主体，验证贴边状态下的边框衔接
  const tableData = ref([
    { name: '上边框', description: '内容头部为空且表格为页面首个元素时，与顶栏下边框衔接' },
    { name: '左边框', description: '宽度大于 800px 且实际渲染侧栏时，与侧栏右边框衔接' },
    { name: '排除场景', description: '有间距页面、独立卡片、嵌套与弹窗表格、全屏路由不参与衔接' }
  ])

  // 列定义：与 README 示例保持一致的静态列配置
  const columns = [
    { prop: 'name', label: '衔接项' },
    { prop: 'description', label: '说明' }
  ]
</script>
