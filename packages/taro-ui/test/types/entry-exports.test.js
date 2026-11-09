const path = require('path')
const ts = require('typescript')

const pkgRoot = path.resolve(__dirname, '../..')

/** H5 / 小程序入口有、RN 入口暂未提供的导出名 */
const RN_PLATFORM_ONLY_EXCLUDED = [
  'ConfigProvider',
  'zhCN',
  'enUS',
  'Locale',
  'PartialLocale'
]

function createProgram() {
  const configPath = path.join(pkgRoot, 'tsconfig.build.json')
  const configFile = ts.readConfigFile(configPath, ts.sys.readFile)
  const { options } = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    pkgRoot
  )

  return ts.createProgram(
    [
      path.join(pkgRoot, 'src/index.ts'),
      path.join(pkgRoot, 'rn/index.ts'),
      path.join(pkgRoot, 'types/index.d.ts'),
      path.join(pkgRoot, 'types/modal.d.ts')
    ],
    {
      ...options,
      noEmit: true,
      emitDeclarationOnly: false,
      jsx: ts.JsxEmit.React
    }
  )
}

/** 用 TypeScript 编译器取模块的导出名，避免正则解析带来的误判 */
function getExportedNames(program, file) {
  const sourceFile = program.getSourceFile(file)

  if (!sourceFile) {
    throw new Error(`TypeScript 程序中缺少 ${file}`)
  }

  const checker = program.getTypeChecker()
  const symbol = checker.getSymbolAtLocation(sourceFile)

  if (!symbol) return []

  return checker
    .getExportsOfModule(symbol)
    .map(exported => exported.getName())
    .sort()
}

function getExportedSymbol(program, file, exportName) {
  const sourceFile = program.getSourceFile(file)

  if (!sourceFile) {
    throw new Error(`TypeScript 程序中缺少 ${file}`)
  }

  const checker = program.getTypeChecker()
  const moduleSymbol = checker.getSymbolAtLocation(sourceFile)

  if (!moduleSymbol) {
    throw new Error(`无法解析模块符号: ${file}`)
  }

  const exported = checker
    .getExportsOfModule(moduleSymbol)
    .find(symbol => symbol.getName() === exportName)

  if (!exported) {
    throw new Error(`${file} 未导出 ${exportName}`)
  }

  return { checker, symbol: exported }
}

describe('types 入口声明', () => {
  const program = createProgram()
  const runtimeExports = getExportedNames(
    program,
    path.join(pkgRoot, 'src/index.ts')
  )
  const rnExports = getExportedNames(program, path.join(pkgRoot, 'rn/index.ts'))
  const declaredExports = getExportedNames(
    program,
    path.join(pkgRoot, 'types/index.d.ts')
  )

  it('types/index.d.ts 不应导出运行时不存在的内容', () => {
    expect(
      declaredExports.filter(name => !runtimeExports.includes(name))
    ).toEqual([])
  })

  it('types/index.d.ts 不应遗漏运行时存在的内容', () => {
    expect(
      runtimeExports.filter(name => !declaredExports.includes(name))
    ).toEqual([])
  })

  it('types/index.d.ts 不应遗漏 RN 运行时存在的内容', () => {
    expect(rnExports.filter(name => !declaredExports.includes(name))).toEqual(
      []
    )
  })

  it('types/index.d.ts 相对 RN 入口的多余导出应仅限平台差异项', () => {
    expect(
      declaredExports.filter(
        name =>
          !rnExports.includes(name) && !RN_PLATFORM_ONLY_EXCLUDED.includes(name)
      )
    ).toEqual([])
  })
})

describe('AtModalActionProps', () => {
  const program = createProgram()

  it('isSimple 应为可选，允许不传该属性', () => {
    const { checker, symbol } = getExportedSymbol(
      program,
      path.join(pkgRoot, 'types/modal.d.ts'),
      'AtModalActionProps'
    )
    const propsType = checker.getDeclaredTypeOfSymbol(symbol)
    const isSimple = checker.getPropertyOfType(propsType, 'isSimple')

    expect(isSimple).toBeDefined()
    expect(isSimple.flags & ts.SymbolFlags.Optional).toBeTruthy()
  })

  it('不传 isSimple 时应能通过类型检查', () => {
    const sourceText = [
      "import * as React from 'react'",
      "import { AtModalAction } from '../../types/index'",
      'const el = <AtModalAction>确认</AtModalAction>',
      'export default el'
    ].join('\n')
    const fileName = path.join(
      pkgRoot,
      'test/types/at-modal-action-optional.tsx'
    )
    const host = {
      ...ts.createCompilerHost({}),
      getSourceFile(name, languageVersion) {
        if (name === fileName) {
          return ts.createSourceFile(name, sourceText, languageVersion, true)
        }
        return ts.sys.fileExists(name)
          ? ts.createSourceFile(
              name,
              ts.sys.readFile(name),
              languageVersion,
              true
            )
          : undefined
      },
      fileExists: name => name === fileName || ts.sys.fileExists(name),
      readFile: name =>
        name === fileName ? sourceText : ts.sys.readFile(name),
      writeFile: () => undefined
    }
    const testProgram = ts.createProgram(
      [fileName],
      {
        noEmit: true,
        jsx: ts.JsxEmit.React,
        esModuleInterop: true,
        allowSyntheticDefaultImports: true,
        moduleResolution: ts.ModuleResolutionKind.NodeJs,
        target: ts.ScriptTarget.ES2017,
        module: ts.ModuleKind.ESNext,
        skipLibCheck: true,
        baseUrl: pkgRoot,
        paths: {
          'taro-ui': [path.join(pkgRoot, 'types/index.d.ts')]
        }
      },
      host
    )
    const diagnostics = ts
      .getPreEmitDiagnostics(testProgram)
      .filter(diagnostic => {
        if (!diagnostic.file) return false
        return diagnostic.file.fileName === fileName
      })

    expect(
      diagnostics.map(d => ts.flattenDiagnosticMessageText(d.messageText, '\n'))
    ).toEqual([])
  })
})
