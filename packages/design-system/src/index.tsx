import { ForwardedRef, ReactNode, forwardRef } from 'react'

type CommonProps = {
  ['data-testid']?: string
}

/**
 * design-system 上で コンポーネントを定義するためのヘルパー関数
 */
export function define<Ref, Props extends object>(
  factory: (
    props: Omit<Props & CommonProps, 'asChild'>,
    forwardedRef: ForwardedRef<Ref>
  ) => ReactNode
) {
  return forwardRef<Ref, Omit<Props & CommonProps, 'asChild'>>(
    (props, forwardedRef) => {
      return factory(props, forwardedRef)
    }
  )
}
