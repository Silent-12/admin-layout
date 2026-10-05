import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 源码级链接布局包：改包源码即时热更新
      '@ao/admin-layout': fileURLToPath(new URL('../src/index.ts', import.meta.url))
    }
  }
})
