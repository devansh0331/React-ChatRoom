import React from 'react'

import {auth , provider} from "../../firebase_config"
import {signInWithPopup} from "firebase/auth"

import "./Auth.css"

import Cookies from "universal-cookie"
const cookies = new Cookies()

function Auth(props) {
    const {setIsAuth} = props
    const signInWithGoogle = async () =>  {
        try{

            const response = await signInWithPopup(auth, provider)
            console.log(response );
            cookies.set("auth-token" , response.user.refreshToken)
            setIsAuth(true)
        }catch(err){
            console.log(err);
        }
        
    }


  return (
    <div className="auth">
        <h1>This is a Chat Room Web Application</h1>
        <p>Sign in with Google to continue...</p>
        <button onClick={signInWithGoogle}>Sign In With Google</button>

      
    </div>
  )
}

export default Auth
