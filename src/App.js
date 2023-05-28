
import './App.css';
import Auth from "./component/auth/Auth"
import Chat from "./component/chat/Chat"
import React, {useState , useRef} from 'react'

import {signOut} from "firebase/auth"
import {auth} from "./firebase_config"

import Cookies from "universal-cookie"
const cookies = new Cookies()



function App() {

  const [isAuth , setIsAuth] = useState(cookies.get("auth-token"))
  const [room , setRoom] = useState(null)
  const roomInputRef = useRef(null)

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token")
    setIsAuth(false)
    setRoom(null)
  }

  if(!isAuth){

  return (
    <div className="App">
     <Auth setIsAuth={setIsAuth}/>

    </div>
  );
  }

  return ( <div>
 
    {room ? (<div>
      <Chat room={room}/>
    </div>):(

      <div className="auth">
        <label >Enter Room Name</label>
        <input placeholder="Enter your room or create one" ref={roomInputRef}/>
        <button id="enterBtn" onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
      </div>
    )}

<div className="signOut">
        <button id="signOut" type="" onClick={signUserOut}>Sign Out</button>
      </div>
  
      
  
  </div>
  
  
  
  )
}

export default App;
