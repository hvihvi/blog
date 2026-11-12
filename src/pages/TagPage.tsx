import { Link, useParams } from 'react-router'
import { postsByTag } from '../posts'
import PostItem from '../components/PostItem'
import NotFound from './NotFound'

export default function TagPage() {
  const { tag = '' } = useParams()
  const tagged = postsByTag(tag)
  if (tagged.length === 0) return <NotFound />

  return (
    <>
      <h1>Posts tagged “{tag}”</h1>
      <ul className="post-list">
        {tagged.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </ul>
      <p>
        <Link to="/tags">All tags →</Link>
      </p>
    </>
  )
}
