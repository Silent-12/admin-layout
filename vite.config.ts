import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src/**/*.ts', 'src/**/*.d.ts', 'src/**/*.vue'],
      outDir: 'dist',
      tsconfigPath: './tsconfig.json',
      // 复制纯 .d.ts 声明到产物：src/types/store 下的声明不参与编译输出，
      // 不复制会导致 dist 内类型引用断链（公开类型 SidebarHeaderSlotProps 依赖 MenuThemeType）
      copyDtsFiles: true
    })
  ],
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      formats: ['es'],
      fileName: 'index'
    },
    outDir: 'dist',
    cssCodeSplit: false,
    rollupOptions: {
      // 库产物合并为单文件：AoGlobalComponent 的动态导入弹层内联打包，避免多 chunk 分发
      output: {
        inlineDynamicImports: true
      },
      external: [
        'vue',
        'pinia',
        'vue-i18n',
        'vue-router',
        'nprogress',
        '@vueuse/core',
        '@element-plus/icons-vue',
        '@iconify/vue',
        '@ao/admin-components',
        /^element-plus($|\/)/,
        /^vue-router($|\/)/
      ]
    }
  }
})
