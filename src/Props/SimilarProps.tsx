import {NamedProps} from './Types'

// ----> interface is generally used for building libraries  and does not contain = in object 

// interface NamedProps  {
//     firstName: String
//     lastName: String
// }

function SimilarProps(props: NamedProps ) {
    
  return (
    <div>
         {`FirstName: ${props.firstName} LastName ${props.lastName}`}
    </div>
  )
}

export default SimilarProps