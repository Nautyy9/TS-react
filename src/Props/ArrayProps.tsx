import {ArrayKeProps} from './Types'

function ArrayProps(props: ArrayKeProps) {
  return (
    <div>
        {props.name.map((val , ind) =>{
            return(
                <h1 key={ind}> {val.firstName} <br/> {val.lastName}</h1>
            )
        })}
    </div>
  )
}

export default ArrayProps