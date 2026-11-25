const fs = require('fs')
const path = require('path')
const ts = require('typescript')

const sourcePath = path.resolve(__dirname, '../../rn/components/range/index.tsx')
const compiled = ts.transpileModule(fs.readFileSync(sourcePath, 'utf8'), {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2019,
    jsx: ts.JsxEmit.React,
    esModuleInterop: true
  }
}).outputText
const sourceModule = { exports: {} }
const load = id => {
  if (id.startsWith('@tarojs/') || id.endsWith('.scss')) return {}
  return require(id)
}
// Exercise the RN source without loading a native renderer.
new Function('require', 'module', 'exports', compiled)(
  load, sourceModule, sourceModule.exports
)
const AtRange = sourceModule.exports.default

describe('AtRange RN release bounds', () => {
  it('bounds the final payload after a bounds-only prop update', () => {
    const onAfterChange = jest.fn()
    const props = { min: 0, max: 100, value: [20, 80], onAfterChange }
    const slider = new AtRange(props)
    slider.setState = (next, callback) => {
      Object.assign(slider.state, next)
      if (callback) callback()
    }
    slider.componentDidMount()
    const nextProps = { ...props, max: 60 }
    slider.UNSAFE_componentWillReceiveProps(nextProps)
    slider.props = nextProps
    slider.handleTouchEnd('bX')
    expect(onAfterChange).toHaveBeenCalledWith([20, 60])
  })
})
