// we use React.ReactNode when we call a component inside the component 

type NamedProps = {
    children: React.ReactNode
}

function ReactChild(props: NamedProps) {
  return (
    <div>{props.children}</div>
  )
}

export default ReactChild