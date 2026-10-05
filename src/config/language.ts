/**
 * 语言选项配置
 *
 * 顶部栏语言切换下拉的候选列表，与 vue-i18n 支持的语言保持一致。
 */
import { LanguageEnum } from '../enums'

/** 语言选项列表 */
export const languageOptions = [
  { value: LanguageEnum.ZH, label: '简体中文' },
  { value: LanguageEnum.EN, label: 'English' }
]
