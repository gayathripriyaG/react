import React,{useState,createContext} from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isAuthorized,setIsAuthorized] = useState(false)
    const [tokken,setTokken] = useState("null")

    const onLogOut = () => {
        setIsAuthorized(false)
        setTokken("null")
    }
    const onLogin = () => {
        fetch('https://reqres.in/api/login',{
            method:"POST",
            body:JSON.stringify({
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }),
            headers:{
                'content-type':'application/json',
            },
        }).then(r => r.json())
        .then(d => {
            if(d.token){
                console.log(d.token)
                setTokken(d.token)
                setIsAuthorized(true)
            }
        })

        

      
           
        
    }
  return (
    <AuthContext.Provider value={{isAuthorized,onLogOut,onLogin,tokken}}>
        {children}
    </AuthContext.Provider>
  )
}
