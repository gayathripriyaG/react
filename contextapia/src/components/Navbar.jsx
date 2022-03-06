import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

export const Navbar = () => {

  const {isAuthorized,onLogin,onLogOut} = useContext(AuthContext)
  return (
    <div>
      Navbar
        <button onClick={() => {
          if(isAuthorized) onLogOut()
          else onLogin()
        }}>{isAuthorized?'logout':'login'}</button>
    </div>
  )
}
