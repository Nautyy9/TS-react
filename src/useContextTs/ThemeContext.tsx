import { useContext } from "react"
import { themeProvider } from "./Context"


function UsedContext () {
    const theme = useContext(themeProvider);
    
    return(
        <div style={{
            backgroundColor: theme.secondary.main,
            color: theme.secondary.text
          }}>
          Theme context
        </div>
    )
}
export default UsedContext