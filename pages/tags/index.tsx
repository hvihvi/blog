const tags = [
  'web development',
  'tooling',
  'web performances',
  'css',
  'user experience',
  'book',
  'architecture',
  'developer experience',
  'code quality',
  'functional programming',
  'react',
  'redux',
  'a11y',
  'productivity',
  'management',
  'motivation',
  'layout',
  'font',
  'design',
  'learning',
  'testing'
]

const Tags = () => {
  return (
    <div>
      {tags.map((tag) => (
        <div>{tag}</div>
      ))}
    </div>
  )
}

export default Tags
