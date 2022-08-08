import React from 'react'
import Home from './Home'

//in this we can use the component home to get its type and and values

export default function UseTypesFromAnyWhere(props: React.ComponentProps<typeof Home>) {
  return (
    <div>{props.children}</div>
  )
}
