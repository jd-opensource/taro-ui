import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.ts', 'src/**/*.tsx'],
  outDir: 'lib',
  format: ['cjs'],
  dts: false,
  bundle: false,
  sourcemap: true,
  splitting: false,
  clean: true,
  target: 'es2017',
  tsconfig: 'tsconfig.build.json'
})
