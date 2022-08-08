// children props is used when we send the data written inside the component

type NamedProps ={
    children: String
}
function Home(props: NamedProps) {
  return (
    <div>{props.children}</div>
  )
}

export default Home