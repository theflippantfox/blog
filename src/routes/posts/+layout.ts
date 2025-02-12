import * as path from 'path'
import * as fs from 'fs'

export const entries = async () => {
  const postDir = path.resolve('src/lib/posts')
  const files = fs.readdirSync(postDir)

  return files
    .filter(file => file.endsWith('.md'))
    .map(file => ({ slug: file.replace('.md', '') }))
}
