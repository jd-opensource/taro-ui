import { defineConfig } from 'tsup'

export default defineConfig([
  // 1. Bundle：CJS + ESM 打包产物，兼容旧版路径
  {
    entry: { index: 'src/index.ts' },
    outDir: 'dist',
    format: ['cjs', 'esm'],
    outExtension({ format }) {
      return { js: format === 'esm' ? '.esm.js' : '.js' }
    },
    bundle: true,
    dts: true,
    sourcemap: true,
    splitting: false,
    clean: true,
    target: 'es2017',
    tsconfig: 'tsconfig.build.json'
  },
  // 2. 非打包逐文件产物：支持按需引入 tree-shaking
  {
    entry: ['src/**/*.ts', 'src/**/*.tsx', '!src/index.ts'],
    outDir: 'dist',
    format: ['esm'],
    outExtension() {
      return { js: '.js' }
    },
    bundle: false,
    dts: false,
    sourcemap: true,
    splitting: false,
    clean: false,
    target: 'es2017',
    tsconfig: 'tsconfig.build.json'
  }
])
