import { useEffect, useRef, useState } from "react"


function MutableRef() {
    const [timer, setTimer] = useState(0)
    //const myRef = useRef<number | null>(null)
    const myRef = useRef<number | undefined>(undefined)


    const removeInterval= () =>{
        //the below interval return 2 cases i.e either the number is returned or the undefined if not exist .
        // so this problem can be solved by changing the type inference to number | undefined or using if( ) statement i.e if the value exist then only value will be returned else nothing
        //if will always return a number since the condition will only run if the parameters value is a number  
        
        // if(myRef.current) window.clearInterval(myRef.current)
    
        window.clearInterval(myRef.current)
    }

    useEffect(() =>{
        // clearInterval and setInterval return an id which is a number and the ref is mutable as the value can be undefined or any number 
        myRef.current = window.setInterval(() => {
            setTimer((timer) => timer +1);
        }, 1000)
        return  () => {
            removeInterval()
        }
    }, [])

  return (
    <div>
        <h1>value is :  {timer}</h1>
        <button onClick={ () =>removeInterval()}> Stop the timer</button>
    </div>
  )
}

export default MutableRef