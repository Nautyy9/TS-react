// set the dymanic (name="I changed the name") value if the props is optional {name} 

import React, { useState } from "react"

type NamedProps = {
    name?: String
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: Number) => void
    handleChange: (event: React.ChangeEvent<HTMLInputElement> ) => void
}

function SingleProps({name="I changed the name", handleClick}: NamedProps) {

    const [message, setMessage] = useState('')

    const handleChange =(event: React.ChangeEvent<HTMLInputElement> ) =>{
        setMessage(event.target.value)
    }

  return (
   <>
    <div>{name}</div>
    <button onClick={(event) => handleClick(event, 1)}>Click it</button>
    <input value={message} onChange={(event) => handleChange(event)}></input>
   </>
  )
}

export default SingleProps