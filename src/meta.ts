import { getPost } from './posts'

export const site = {
  name: 'Hugo Vinet',
  url: 'https://hugovi.net',
  description:
    'Personal notes, mostly about front-end engineering, UX, and teamwork.'
}

export type Meta = { title: string; description: string; type: 'website' | 'article' }

// Single source of truth for <title> and share-preview tags, used both by the
// prerender script (static HTML) and on the client after navigation.
export function getMeta(pathname: string): Meta {
  const post = pathname.startsWith('/posts/')
    ? getPost(pathname.slice('/posts/'.length))
    : undefined
  if (post) {
    return {
      title: `${post.title} – ${site.name}`,
      description: post.description || site.description,
      type: 'article'
    }
  }
  if (pathname.startsWith('/tags/')) {
    const tag = decodeURIComponent(pathname.slice('/tags/'.length))
    return { title: `${tag} – ${site.name}`, description: `Posts tagged “${tag}”.`, type: 'website' }
  }
  if (pathname === '/tags') {
    return { title: `Tags – ${site.name}`, description: site.description, type: 'website' }
  }
  if (pathname === '/posts') {
    return { title: `Posts – ${site.name}`, description: site.description, type: 'website' }
  }
  if (pathname === '/') {
    return { title: site.name, description: site.description, type: 'website' }
  }
  return { title: `Not found – ${site.name}`, description: site.description, type: 'website' }
}

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export function renderHead(pathname: string): string {
  const { title, description, type } = getMeta(pathname)
  const url = site.url + (pathname === '/' ? '' : pathname)
  return [
    `<title>${escape(title)}</title>`,
    `<meta name="description" content="${escape(description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:site_name" content="${escape(site.name)}" />`,
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:title" content="${escape(title)}" />`,
    `<meta property="og:description" content="${escape(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:card" content="summary" />`
  ].join('\n    ')
}
