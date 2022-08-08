//this example is of simple string type array 
// now we also want number type array and object type too , one way is do union | and the other way is to do with generic type 
// we can use any varaible like we used <T> also , we should specify T[] as items , T as return from click and <T extends for using the Generic type  and after type name is evoke and call

type Props<T> = {
    // items: string[] | number[] | object[]
    items: T[]
    onClick: (value: T)=> void
}
// we use simply {} for object but TS will throw error although in browser it is right but for the generic type we haven't declared the firstName or id inside { } so we do that to let ts know that there exists such value inside the passed {}

function GenericType <T extends {id: number , firstName: string}> ({items, onClick} : Props<T>) {
  return (
    <>
    {items.map((val,ind) =>{
        return(
         <div key={ind} onClick={() => onClick(val)}>
            <h1>{val.firstName}</h1>
            
         </div>
        ) 
    })}
    </>
  )
}

export default GenericType