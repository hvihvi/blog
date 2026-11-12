// Generates public/feed.xml from the frontmatter of content/posts/*.md(x).
import { promises as fs } from 'node:fs'
import path from 'node:path'
import RSS from 'rss'
import matter from 'gray-matter'

const SITE = 'https://hugovi.net'
const dir = path.resolve('content/posts')

const toDate = (v) => {
  if (v instanceof Date) return v
  const [y, m, d] = String(v).split(/[-/]/).map(Number)
  return new Date(Date.UTC(y, m - 1, d))
}

const files = (await fs.readdir(dir)).filter((f) => /\.mdx?$/.test(f))
const items = await Promise.all(
  files.map(async (file) => {
    const { data } = matter(await fs.readFile(path.join(dir, file), 'utf8'))
    return { file, data }
  })
)

const feed = new RSS({
  title: 'Hugo Vinet',
  site_url: SITE,
  feed_url: `${SITE}/feed.xml`
})

items
  .map(({ file, data }) => ({ file, data, date: toDate(data.date) }))
  .sort((a, b) => b.date - a.date)
  .forEach(({ file, data, date }) =>
    feed.item({
      title: data.title,
      url: `${SITE}/posts/${file.replace(/\.mdx?$/, '')}`,
      date,
      description: data.description,
      categories: (data.tag ?? '').split(',').map((t) => t.trim()).filter(Boolean)
    })
  )

await fs.writeFile('public/feed.xml', feed.xml({ indent: true }))
console.log(`feed.xml: ${items.length} posts`)
