import { Link } from 'react-router'
import { tags, tagUrl } from '../posts'

export default function Tags() {
  return (
    <>
      <h1>Tags</h1>
      <ul className="tag-list">
        {tags.map(({ tag, count }) => (
          <li key={tag}>
            <Link to={tagUrl(tag)}>{tag}</Link> <span className="count">{count}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
