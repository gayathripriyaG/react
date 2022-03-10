import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { login } from "../Redux/auth/auth.api";

export const Login = () => {
  const dispatch = useDispatch()
  const [email,setEmail] = useState("eve.holt@reqres.in")
  const [password,setPassword] = useState("cityslicka")
  const {isLoading,error} = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    if(!isLoading){
      e.preventDefault()
      dispatch(login({email,password}))
    }
  }
  
  return <div>
    <form onSubmit={handleSubmit}>
      <input type="email" 
             placeholder="email"
             value={email}
             onChange={(e) => setEmail(e.currentTarget.value)}
             />
      <input type= "password" 
             placeholder = "password"
             value={password}
             onChange={(e) => setPassword(e.currentTarget.value)}/>
      <div>
        <button type="submit">{isLoading?"Loading...":"Login"}</button>
      </div>

    </form>
    {error && <h2>Something went wrong...</h2>}
  </div>;
};
