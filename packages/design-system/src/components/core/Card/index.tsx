import React from 'react'

export const Card = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentProps<'div'> & {
    title: string
    description: string | null
    updatedAt: string
  }
>(({ title, description, updatedAt, ...props }, forwardedRef) => (
  <div {...props} ref={forwardedRef}>
    <div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
    <time>{updatedAt}</time>
  </div>
))
