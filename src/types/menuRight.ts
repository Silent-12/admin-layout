/**
 * 右键菜单项。
 * @description 工作标签右键菜单使用的菜单项及子菜单配置。
 */
export interface MenuItemType {
  // 菜单项唯一标识
  key: string
  // 菜单项标签
  label: string
  // 可选的菜单项图标
  icon?: string
  // 可选的禁用状态
  disabled?: boolean
  // 可选的分割线开关
  showLine?: boolean
  // 可选的子菜单
  children?: MenuItemType[]
  // 菜单项附加数据
  [key: string]: any
}

/**
 * 右键菜单属性。
 * @description 显式导出组件属性，保证工作标签模板引用的声明文件可生成。
 */
export interface MenuRightProps {
  // 菜单项列表
  menuItems: MenuItemType[]
  // 可选的菜单宽度
  menuWidth?: number
  // 可选的子菜单宽度
  submenuWidth?: number
  // 可选的菜单项高度
  itemHeight?: number
  // 可选的边界距离
  boundaryDistance?: number
  // 可选的菜单内边距
  menuPadding?: number
  // 可选的菜单项水平内边距
  itemPaddingX?: number
  // 可选的菜单圆角
  borderRadius?: number
  // 可选的动画持续时间
  animationDuration?: number
}
