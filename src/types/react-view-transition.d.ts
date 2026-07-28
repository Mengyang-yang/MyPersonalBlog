import 'react'

declare module 'react' {
  export function ViewTransition(props: { children?: ReactNode }): ReactNode
}
