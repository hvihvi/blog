import { Link } from 'react-router'
import { posts } from '../posts'
import PostItem from '../components/PostItem'

export default function Home() {
  return (
    <>
      <section className="intro">
        <h1>Hugo Vinet</h1>
        <p>
          Personal <Link to="/posts">notes</Link>, mostly about front-end
          engineering, UX, and teamwork.
        </p>
      </section>

      <section>
        <h2 className="section-title">Recent posts</h2>
        <ul className="post-list">
          {posts.slice(0, 5).map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </ul>
        <p>
          <Link to="/posts">All posts →</Link>
        </p>
      </section>
    </>
  )
}
