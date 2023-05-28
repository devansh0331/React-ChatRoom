import React, {useState, useEffect} from 'react'
import {addDoc , collection , serverTimestamp, onSnapshot, query, where, orderBy} from "firebase/firestore"
import {auth , db} from "../../firebase_config"
import "./Chat.css" 



function Chat(props) {
    const {room} = props
    const [newMessage , setNewMessage] = useState("")
    const [messages , setMessages] = useState([])

    const messagesRef = collection(db , "messages")

    useEffect(() => {
        const queryMessages = query(messagesRef , where("room" , "==" , room) ,orderBy("createdAt"))
        
        const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
            let message = []
            console.log("New Messages");
            snapshot.forEach((doc) => {
                message.push({...doc.data() , id : doc.id})
            });
        setMessages(message)
        });
        return () => unsuscribe()

      
    },[])

    const handleOnSubmit = async(e) => {
        e.preventDefault()
        console.log(newMessage);

        if(newMessage === "") return;

        await addDoc(messagesRef, {
            text : newMessage,
            createdAt : serverTimestamp(),
            user : auth.currentUser.displayName,
            room : room
        });
        
        setNewMessage("")
    }
  return (
    <div className="chat ">
      {/* <div className="heading">
        <h1>Welcome to Room : <strong>{messages.room}</strong></h1>
        
      </div> */}
        <div className="chatArea">
            {messages.map((message) =><div className="chatMsg"> <h1> - {message.user} : </h1> <p id="txt"> &nbsp;{message.text}</p></div>)}
        </div>
      <form className="form" onSubmit={handleOnSubmit}>

        <div id="chatInp">
          
        <input id="chatBox" type="" onChange={e => setNewMessage(e.target.value)} value={newMessage} placeholder="Type your message here..."/>        
        <button id="sendBtn"  type="submit" >Send</button>
        </div>

      </form>
    </div>
  )
}

export default Chat
