import { useEffect } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router'
import { getMeta, site } from './meta'
import Home from './pages/Home'
import PostList from './pages/PostList'
import PostPage from './pages/PostPage'
import NotFound from './pages/NotFound'
import Tags from './pages/Tags'
import TagPage from './pages/TagPage'

function useRouteMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const { title, description } = getMeta(pathname)
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    window.scrollTo(0, 0)
  }, [pathname])
}

export default function App() {
  useRouteMeta()
  return (
    <div className="shell">
      <header className="site-header">
        <Link to="/" className="site-name">
          {site.name}
        </Link>
        <nav>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/tags">Tags</NavLink>
          <a href="/feed.xml">RSS</a>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:slug" element={<PostPage />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/tags/:tag" element={<TagPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <a href="https://github.com/hvihvi">GitHub</a>
        <a href="https://www.linkedin.com/in/hugo-vinet-347a8b21b/">LinkedIn</a>
      </footer>
    </div>
  )
}
