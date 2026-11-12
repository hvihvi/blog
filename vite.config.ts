import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypeSlug from 'rehype-slug'
import rehypeShiki from '@shikijs/rehype'

export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        // Posts are written as .md or .mdx; both are compiled as MDX so JSX works everywhere.
        mdExtensions: [],
        mdxExtensions: ['.md', '.mdx'],
        remarkPlugins: [
          remarkGfm,
          remarkFrontmatter,
          [remarkMdxFrontmatter, { name: 'frontmatter' }]
        ],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeShiki,
            {
              themes: { light: 'github-light', dark: 'github-dark' },
              defaultColor: false,
              fallbackLanguage: 'text'
            }
          ]
        ]
      })
    },
    react({ include: /\.(md|mdx|jsx|tsx)$/ })
  ]
})
