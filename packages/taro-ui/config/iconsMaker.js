// iconfont.svg 通过 woff 字体文件转化而来
// Convert iconfont.svg into svg icons
const fs = require('fs')
const path = require('path')
const camelize = require('camelize')

const maker = source => {
  const file = fs.readFileSync(path.resolve(__dirname, source), 'utf-8')
  const lines = file.split('\n').filter(line => line.includes('<glyph'))
  const filenames = []

  lines.forEach(line => {
    const filename = new RegExp('glyph-name="([^"]+)"').exec(line)[1]

    if (!filename.startsWith('.')) {
      let str = '<?xml version="1.0" standalone="no"?>\n'
      str +=
        '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">\n'
      str += line.replace(
        '<glyph',
        '<path transform="translate(0, -128) rotate(180, 512 512)"' // 调整图标位置
      )
      str += '\n</svg>'

      fs.writeFileSync(
        path.resolve(__dirname, `../rn/assets/icons/${filename}.svg`),
        str
      )
      filenames.push(filename)
    }
  })

  let importIcon = '/* eslint-disable prettier/prettier */\n\n'
  let ICONS = 'const ICONS = {\n'

  Array.from(new Set(filenames)).forEach(filename => {
    const cameName = camelize(filename)
    importIcon += `import ${cameName} from '../../assets/icons/${filename}.svg'\n`
    ICONS += `  '${filename}': ${cameName},\n`
  })
  ICONS = `${ICONS}}\n\nexport default ICONS\n`

  fs.writeFileSync(
    path.resolve(__dirname, `../rn/components/icon/icons.ts`),
    `${importIcon}\n${ICONS}`
  )
}

if (require.main === module) {
  maker('../rn/assets/iconfont.svg')
}

module.exports = maker
