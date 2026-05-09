const fs = require('fs')
const path = require('path')

const srcDir = path.resolve(__dirname, '../markdown')
const destDir = path.resolve(__dirname, '../docs')

const guideFiles = [
  'introduction.md',
  'quickstart.md',
  'customize-theme.md',
  'questions.md',
  'changelog.md',
  'resource.md',
  'color.md'
]

function processMarkdown(content) {
  let result = content

  // Remove imports frontmatter for icon.md
  result = result.replace(
    /---\nimports:\n {2}import IconList from '\.\.\/components\/iconlist\/index\.jsx'\n---\n/,
    "<script setup>\nimport IconList from '../.vitepress/theme/components/IconList.vue'\n</script>\n\n"
  )

  // Remove any other imports frontmatter lines
  result = result.replace(/imports:\n {2}.+\n/, '')

  // :::caution -> :::warning
  result = result.replace(/:::caution/g, ':::warning')

  // Remove :::demo containers but keep inner content
  // IMPORTANT: use [ \t]* instead of \s* to avoid matching newlines
  result = result.replace(/:::\s*demo[ \t]*([^\n\r]*)\r?\n/g, (match, desc) => {
    if (desc.trim()) {
      return `**${desc.trim()}**\n\n`
    }
    return '\n'
  })

  // Remove closing ::: markers
  result = result.replace(/\n:::\s*\n/g, '\n')
  result = result.replace(/\n:::\s*$/g, '\n')

  return result
}

function migrateFile(filename, destSubdir) {
  const srcPath = path.join(srcDir, filename)
  if (!fs.existsSync(srcPath)) {
    // eslint-disable-next-line no-console
    console.warn(`Skipping missing file: ${filename}`)
    return
  }

  const content = fs.readFileSync(srcPath, 'utf-8')
  const processed = processMarkdown(content, filename)
  const destPath = path.join(destDir, destSubdir, filename)
  fs.writeFileSync(destPath, processed)
  // eslint-disable-next-line no-console
  console.log(`Migrated: ${filename} -> docs/${destSubdir}/${filename}`)
}

// Ensure directories exist
fs.mkdirSync(path.join(destDir, 'guide'), { recursive: true })
fs.mkdirSync(path.join(destDir, 'components'), { recursive: true })

// Migrate guide files
guideFiles.forEach(f => migrateFile(f, 'guide'))

// Migrate component files
const allFiles = fs.readdirSync(srcDir).filter(f => f.endsWith('.md'))
allFiles.forEach(f => {
  if (!guideFiles.includes(f)) {
    migrateFile(f, 'components')
  }
})

// eslint-disable-next-line no-console
console.log('Migration complete!')
