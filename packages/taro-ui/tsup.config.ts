import { defineConfig } from 'tsup'

const shared = {
  outDir: 'dist',
  sourcemap: true,
  splitting: false,
  target: 'es2017' as const,
  tsconfig: 'tsconfig.build.json'
}

export default defineConfig([
  // 1. Bundle：CJS + ESM 打包产物，兼容旧版路径
  {
    ...shared,
    entry: { index: 'src/index.ts' },
    format: ['cjs', 'esm'],
    outExtension({ format }) {
      return { js: format === 'esm' ? '.esm.js' : '.js' }
    },
    bundle: true,
    dts: false,
    clean: true
  },
  // 2. 非打包逐文件产物：支持按需引入 tree-shaking
  {
    ...shared,
    entry: ['src/**/*.ts', 'src/**/*.tsx', '!src/index.ts'],
    format: ['esm'],
    outExtension() {
      return { js: '.js' }
    },
    bundle: false,
    dts: false,
    clean: false
  }
])
