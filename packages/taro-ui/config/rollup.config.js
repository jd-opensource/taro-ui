import NodePath from 'path'
import fs from 'fs'
import sass from 'sass'
import RollupJson from '@rollup/plugin-json'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import RollupCopy from 'rollup-plugin-copy'
import Package from '../package.json'
import iconsMaker from './iconsMaker.js'

iconsMaker('../rn/assets/iconfont.svg')

const resolveFile = path =>
  NodePath.resolve(__dirname, '..', path).split(NodePath.sep).join('/')

const externalPackages = [
  'react',
  'react-dom',
  '@tarojs/components',
  '@tarojs/runtime',
  '@tarojs/taro',
  '@tarojs/react'
]

export default {
  input: resolveFile(Package.source),
  output: [
    {
      file: resolveFile(Package.main),
      format: 'cjs',
      sourcemap: true
    },
    {
      file: resolveFile(Package.module),
      format: 'es',
      sourcemap: true
    }
  ],
  external: externalPackages,
  plugins: [
    RollupTypescript({
      tsconfig: resolveFile('tsconfig.rollup.json'),
      include: ['*.ts', '*.tsx', '**/*.ts', '**/*.tsx'],
      exclude: ['node_modules']
    }),
    RollupNodeResolve({
      extensions: ['.mjs', '.js', '.jsx', '.json', '.node', '.ts', '.tsx'],
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    RollupCommonjs({
      include: /\/node_modules\//
    }),
    RollupJson(),
    RollupCopy({
      targets: [
        {
          src: resolveFile('src/style'),
          dest: resolveFile('dist')
        },
        {
          src: resolveFile('rn/style/**/*.scss'),
          dest: resolveFile('dist'),
          rename: (name, extension, fullpath) => {
            const relativePath = NodePath.relative(resolveFile('rn'), fullpath)

            return relativePath.replace('.scss', '.rn.scss')
          }
        }
      ]
    }),
    {
      name: 'sass-compile',
      generateBundle() {
        const scssPath = resolveFile('dist/style/index.scss')
        const cssPath = resolveFile('dist/style/index.css')
        const result = sass.compile(scssPath, {
          silenceDeprecations: ['import', 'slash-div', 'global-builtin']
        })
        fs.writeFileSync(cssPath, result.css)
      }
    }
  ]
}
