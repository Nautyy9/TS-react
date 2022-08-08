import { createContext, useState } from "react"


type Detail = {
    name: string
    email: string
}

type Auth ={
    children: React.ReactNode
}

type UserType ={
    user: Detail | null
    setUser: React.Dispatch<React.SetStateAction<Detail | null>>
}

export const AuthProvider = createContext<UserType | null>(null)

function UserContext({children}: Auth) {

    const [user, setUser] = useState<Detail | null>(null);
return(
    <AuthProvider.Provider value={{user, setUser}}>
        {children}
    </AuthProvider.Provider>
)
}
export default UserContext