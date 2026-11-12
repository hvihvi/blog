import { posts } from '../posts'
import PostItem from '../components/PostItem'

export default function PostList() {
  return (
    <>
      <h1>Posts</h1>
      <ul className="post-list">
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </ul>
    </>
  )
}
