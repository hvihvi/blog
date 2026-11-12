import { Link } from 'react-router'
import { formatDate, type Post } from '../posts'

export default function PostItem({ post }: { post: Post }) {
  return (
    <li className="post-item">
      <Link to={`/posts/${post.slug}`} className="post-title">
        {post.title}
      </Link>
      {post.description && <p className="post-description">{post.description}</p>}
      <time dateTime={post.date.toISOString()}>{formatDate(post.date)}</time>
    </li>
  )
}
