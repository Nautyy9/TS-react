import React from 'react'
import { ProfileProps } from './Profile'

type Props ={
    isLoggedIn: boolean,
    Component: React.ComponentType<ProfileProps>
}

function ComponentProp({isLoggedIn ,Component} : Props ) {
  return (
    <>
    { isLoggedIn ? 
        <Component name="Nitin"/> : 'User not logged in yet'
    }
    </>
  )
}

export default ComponentProp