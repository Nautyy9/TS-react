import React from "react"

type OwnProps<E extends React.ElementType>={
    children: React.ReactNode
    as?: E
} 

type Props<E extends React.ElementType> = OwnProps<E> & Omit<React.ComponentProps<E>, keyof OwnProps<E>>

export default function Example <E extends React.ElementType = 'div'>({as, children}: Props<E>) {
    const Component = as || 'div'
  return (
    <Component>{children}</Component>
  )
}
