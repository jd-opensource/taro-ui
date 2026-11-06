const path = require('path')
const ts = require('typescript')

const pkgRoot = path.resolve(__dirname, '../..')

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
      path.join(pkgRoot, 'types/index.d.ts')
    ],
    { ...options, noEmit: true, emitDeclarationOnly: false }
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

describe('types 入口声明', () => {
  const program = createProgram()
  const runtimeExports = getExportedNames(
    program,
    path.join(pkgRoot, 'src/index.ts')
  )
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
})
