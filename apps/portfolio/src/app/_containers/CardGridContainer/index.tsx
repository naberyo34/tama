'use client'

import { CardGrid, Card } from '@tama/design-system'
import { format } from 'date-fns'
import Link from 'next/link'
import { cardLink } from './index.css'

type Props = {
  posts: {
    id: string
    slug: string
    title: string
    description: string | null
    updatedAt: Date
  }[]
}

export default function CardGridContainer(props: Props) {
  return (
    <CardGrid>
      {props.posts.map((post) => (
        <Link className={cardLink} key={post.slug} href={`/${post.slug}`}>
          <Card
            title={post.title}
            description={post.description}
            updatedAt={format(post.updatedAt, 'yyyy.MM.dd')}
          />
        </Link>
      ))}
    </CardGrid>
  )
}
