import React, { useEffect, useRef } from 'react'

function DomRef() {

    const myRef = useRef<HTMLInputElement >(null!)

    //here null! states that that the input value will be null only one time and afterwards it's gonna be the value of <htmlInputElement>

    useEffect(() =>{
        //myRef.current?.focus();
        myRef.current.focus();

    }, [])

  return (
    <div>
        <input type="text" name="Text" ref={myRef} id="text" />
    </div>
  )
}

export default DomRef