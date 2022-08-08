import React, { useContext } from 'react'
import {AuthProvider} from './UserContext'

function UserLogin() {

const Auth =  useContext(AuthProvider);

    function login () {
     Auth?.setUser({
        name: 'Nitin',
        email: 'nitin.nautiyal@djtcorp.in'
     })
    }
    function  logout () {
        Auth?.setUser(null)
    }

  return (
    <div>
        <button onClick={login}>login</button>
        <button onClick={logout}>logout</button>
        <div className="">User Name is : {Auth?.user?.name}</div>
        <div className="">User Email is : {Auth?.user?.email}</div>
    </div>
  )
}

export default UserLogin