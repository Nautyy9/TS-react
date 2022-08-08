type NamedProps = {
    name: String & 'accept' | 'reject' 
}

function FixedProps( props: NamedProps) {
    let message
    if(props.name === 'accept')
     {   message = 'hello, welocome!'}
     else if(props.name === 'reject')
        {message = 'out!'}
  return (
    <div>optional props: {props.name}</div>
  )
}

export default FixedProps