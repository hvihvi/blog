import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { posts, tags, tagUrl } from './posts'

export { renderHead } from './meta'

// Every URL that gets its own static HTML file at build time.
export const paths = [
  '/',
  '/posts',
  '/tags',
  ...posts.map((p) => `/posts/${p.slug}`),
  ...tags.map(({ tag }) => tagUrl(tag))
]

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  )
}
