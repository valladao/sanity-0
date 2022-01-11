// post.js
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()

  return (
    <article>
      <h1>{router.query.slug}</h1>
    </article>
  )
}

export default Post