import { Metadata } from 'next'
import prisma from '../../lib/prisma'
import CardGridContainer from './_containers/CardGridContainer'

export const metadata: Metadata = {
  title: 'tama',
}

export default async function Home() {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
  return <CardGridContainer posts={posts} />
}
