import React, { createContext, useContext } from 'react'

const AuthContext=createContext();

export function useAuth(){
    return useContext(AuthContext); 
}

const AuthContextProvider = () => {
    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password);
    }
  return (
    <div>

    </div>
  )
}

export default AuthContextProvider