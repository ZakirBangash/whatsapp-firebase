import React from 'react'
import "./Chat.css";

const ChatBox = ({message}) => {
   
    return (
    
        <div className={`chat__message  chat__receiver}`}>
            <span className="chat__name">{message.name}</span>
             {message.message}
            <span className="chat__timestamp">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
          </div>
        
    )
}

export default ChatBox
