# Changelog

## v1

- 首版：从 admin-template-vue 迁移布局骨架（AppLayout、AoSidebarMenu、AoHeaderBar、AoPageContent、AoGlobalComponent、AoGlobalSearch、AoNotification、AoSettingsPanel、AoWorkTab、AoFastEnter、AoMenuRight）
- 解耦：菜单数据 / 用户信息 / 语言 / 登出 / router / i18n 全部改为 install 注入（context 模块级上下文）；搜索历史迁入包内 store
- 自带样式底座（theme/dark/app/router-transition/theme-transition/mixin）与内置语言包（setting/worktab/notice/search/topBar/common 段）
- 发版机制：`pnpm run release` 整数版本自动自增
## v2 (2026-10-05)

- 见提交记录
