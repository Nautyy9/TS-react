import { useState } from "react"

//in the conditional rendering in div we've the auth?.name that check the auth.name for different values i.e null or Inputs
// however we can specify the state for input without null or if we say that the logout is not defined then we can use the below syntax

type Inputs ={
    name: String
    email: String
}
function Loging({name, email}: Inputs) {
    // 1 ---> change type inference
    // here we have changed the custom type inference i.e the state will be true for two values either it is the Inputs or null not any third value can be provided
    //if we don't provide the Inputs in <> and | null it will give error for setAuth in login
    // inital value type = null 
    //future value type = Inputs 
    // const [auth, setAuth] = useState<Inputs | null>(null);

    // 2 ---> type asertion
    // this specify that the Inputs will always be used after decleration and at initial the empty object  {} is of type Inputs  
    const [auth , setAuth ] = useState<Inputs>({} as Inputs)
    
    const [val, setVal] = useState(false)

    const login= () => {
        setAuth({
            name: name,
            email: email
        })
        setVal(true)
    }
  return (
    <div>
        <button onClick={login}>Login</button>
        {
            val ? `Name ${auth?.name} Email ${auth?.email}`: 'Not login'
        }
        
    </div>
  )
}

export default Loging