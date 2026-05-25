const fs = require('fs')
const path = require('path')

function copyAssets(srcDir, dstDir) {
  fs.mkdirSync(dstDir, { recursive: true })
  const entries = fs.readdirSync(srcDir, { withFileTypes: true })
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name)
    const dstPath = path.join(dstDir, entry.name)
    if (entry.isDirectory()) {
      copyAssets(srcPath, dstPath)
    } else if (!/\.(ts|tsx|scss)$/.test(entry.name)) {
      fs.copyFileSync(srcPath, dstPath)
    }
  }
}

copyAssets('src', 'dist')
