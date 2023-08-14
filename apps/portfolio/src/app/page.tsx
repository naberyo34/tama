import { Metadata } from 'next'
import prisma from '../../lib/prisma'
import { li } from './page.css'

export const metadata: Metadata = {
  title: 'tama',
}

export default async function Home() {
  const posts = prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
    },
  })
  return (
    <ul>{(await posts)?.map((post) => <li className={li} key={post.id}>{post.title} {post.content}</li>)}</ul>
  )
}
