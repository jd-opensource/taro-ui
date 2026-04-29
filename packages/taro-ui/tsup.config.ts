import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.ts', 'src/**/*.tsx'],
  outDir: 'lib',
  format: ['esm'],
  outExtension() {
    return { js: '.js' }
  },
  dts: false,
  bundle: false,
  sourcemap: true,
  splitting: false,
  clean: true,
  target: 'es2017',
  tsconfig: 'tsconfig.build.json'
})
