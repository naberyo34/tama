import React from 'react'

/**
 * jotai の localStorage状態が取得できるまでレンダリングを待つ
 * see: https://jotai.org/docs/utilities/storage#server-side-rendering
 * see: https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
 */
export function ClientOnly({ children, ...delegated }: React.PropsWithChildren) {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }
  return <div {...delegated}>{children}</div>
}
