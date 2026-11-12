// Renders every route to static HTML after `vite build` so each page has real
// content and its own <title>/meta tags (search engines, link previews).
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const serverDir = path.resolve('dist-server')
const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8')
const { render, renderHead, paths } = await import(
  pathToFileURL(path.join(serverDir, 'entry-server.js')).href
)

const page = (url) =>
  template
    .replace('<!--app-head-->', renderHead(url))
    .replace('<!--app-html-->', render(url))

for (const url of paths) {
  // Hosts decode the URL before looking up the file: /tags/web%20development → "tags/web development.html"
  const file = path.join(dist, url === '/' ? 'index.html' : decodeURIComponent(url).slice(1) + '.html')
  await fs.mkdir(path.dirname(file), { recursive: true })
  await fs.writeFile(file, page(url))
}
await fs.writeFile(path.join(dist, '404.html'), page('/404'))
await fs.rm(serverDir, { recursive: true })

console.log(`prerendered ${paths.length} pages + 404.html`)
