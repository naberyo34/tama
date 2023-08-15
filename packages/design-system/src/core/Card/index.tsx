import React from 'react'
import { card, cardTitle, cardContent, cardDate } from './index.css'

export const Card = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentProps<'div'> & {
    title: string
    description?: string
    updatedAt: string
  }
>(({ title, description, updatedAt, ...props }, forwardedRef) => (
  <div
    {...props}
    ref={forwardedRef}
    className={`${card} ${props.className ?? ''}`}
  >
    <div>
      <h2 className={cardTitle}>{title}</h2>
      {description && <p className={cardContent}>{description}</p>}
    </div>
    <time className={cardDate}>{updatedAt}</time>
  </div>
))
