// ------> type is generally used for building applications
import {NamedProps} from './Types'

// ----> interface is generally used for building libraries  and does not contain = in object 

// interface NamedProps  {
//     firstName: String
//     lastName: String
// }

function NormalProps(props: NamedProps ) {
    const {age= 0} = props
  return (
    <div>
        {props.developer ?   `FirstName: ${props.firstName} LastName ${props.lastName} Age: ${age} Optional Age: ${props.age}`: 'No User Found'
            }</div>
  )
}

export default NormalProps