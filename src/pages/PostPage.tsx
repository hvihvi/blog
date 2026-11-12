import { Fragment } from 'react'
import { Link, useParams } from 'react-router'
import { formatDate, getPost, tagUrl } from '../posts'
import NotFound from './NotFound'

export default function PostPage() {
  const { slug = '' } = useParams()
  const post = getPost(slug)
  if (!post) return <NotFound />

  const { Content } = post
  return (
    <article>
      <p className="post-meta">
        <time dateTime={post.date.toISOString()}>{formatDate(post.date)}</time>
        {post.tags.length > 0 && ' · '}
        {post.tags.map((tag, i) => (
          <Fragment key={tag}>
            {i > 0 && ', '}
            <Link to={tagUrl(tag)}>{tag}</Link>
          </Fragment>
        ))}
      </p>
      <div className="prose">
        <Content />
      </div>
    </article>
  )
}
