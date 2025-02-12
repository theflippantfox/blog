import fs from 'fs'
import path from 'path'

export const load = async () => {
  const postDir = path.resolve('src/lib/posts')
  const files = fs.readdirSync(postDir)

  const posts = files
    .filter(file => file.endWith('.md'))
    .map(file => ({
      slug: file.replace('.md', '')
    }))

  return { posts }
}
