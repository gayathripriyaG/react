import React,{useContext} from 'react'
import { AuthContext } from '../contexts/AuthProvider'

export const Login = () => {
    const {isAuthorized,tokken} = useContext(AuthContext)
  return (
    <div>
     {`status is : ${isAuthorized} - token id : ${tokken}`}
    </div>
  )
}
