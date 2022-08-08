//used React.CSSProperties as css property contain string with number or string as a value
type StyledProps ={
    style: React.CSSProperties
}

function StyleProps(props: StyledProps) {
  return (
    <div>
        <h1 style={props.style}>This text is with styles</h1>
    </div>
  )
}

export default StyleProps