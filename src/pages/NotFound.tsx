import { Link } from 'react-router'

export default function NotFound() {
  return (
    <>
      <h1>Not found</h1>
      <p>
        This page doesn't exist. <Link to="/">Go home</Link>
      </p>
    </>
  )
}
