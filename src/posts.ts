import type { ComponentType } from 'react'

type Frontmatter = {
  title: string
  date: string | Date
  description?: string
  tag?: string
  draft?: boolean
}

type PostModule = { default: ComponentType; frontmatter: Frontmatter }

export type Post = {
  slug: string
  title: string
  date: Date
  description: string
  tags: string[]
  Content: ComponentType
}

// Every file in content/posts becomes a post at /posts/<filename>.
const modules = import.meta.glob<PostModule>('/content/posts/*.{md,mdx}', {
  eager: true
})

// Accepts "2021/7/27", "2021-07-27" or a YAML Date; always UTC so server and client agree.
export function parseDate(value: string | Date): Date {
  if (value instanceof Date) return value
  const [y, m, d] = String(value).split(/[-/]/).map(Number)
  return new Date(Date.UTC(y, m - 1, d))
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC'
  })
}

export const posts: Post[] = Object.entries(modules)
  .filter(([, mod]) => !mod.frontmatter?.draft)
  .map(([file, mod]) => ({
    slug: file.split('/').pop()!.replace(/\.mdx?$/, ''),
    title: mod.frontmatter.title,
    date: parseDate(mod.frontmatter.date),
    description: mod.frontmatter.description ?? '',
    tags: (mod.frontmatter.tag ?? '')
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean),
    Content: mod.default
  }))
  .sort((a, b) => b.date.getTime() - a.date.getTime())

export const getPost = (slug: string) => posts.find((p) => p.slug === slug)

export const tagUrl = (tag: string) => `/tags/${encodeURIComponent(tag)}`

export const postsByTag = (tag: string) => posts.filter((p) => p.tags.includes(tag))

// All tags, most used first.
export const tags: { tag: string; count: number }[] = Object.entries(
  posts
    .flatMap((p) => p.tags)
    .reduce<Record<string, number>>((acc, t) => ({ ...acc, [t]: (acc[t] ?? 0) + 1 }), {})
)
  .map(([tag, count]) => ({ tag, count }))
  .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag))
