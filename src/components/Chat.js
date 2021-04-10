import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
// import axios from "../axios";
import db from "../firebase";
import ChatBox from "./ChatBox";

import { useParams } from 'react-router-dom'



const Chat = ({ message }) => {
  const [input, setinput] = useState("");
  const messagesEndRef = useRef(null);
  const { slug } = useParams(); 

  const [roomName, setRoomName] = useState('');
  const [messages, setmessages] = useState([]);

  useEffect(() => {
    
      const collection = db.collection('messages').doc(slug);
      collection.onSnapshot(snapshot => {
          setRoomName(snapshot.data().name)
      })

      collection.collection('messages').orderBy("timestamp", "asc").onSnapshot(snapshot => {
        setmessages(snapshot.docs.map((doc, i) => doc.data()));
      })
      
  }, [slug]);



  // This is for scroll functionality
  // const scrollToBottom = () => {
  //   messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  // };
  // useEffect(scrollToBottom, [message]);


  const sendMessage = (e) => {
    e.preventDefault();
    setinput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h4>{roomName}</h4>
          <p>Last seen at 9pm</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">

        {messages?.map((message) => (

          <ChatBox key={message.id} message={message} />
        ))} 



        {/* <div className={`chat__message  chat__receiver}`}>
          <span className="chat__name">Zakir Ullah</span>I will marry inshallah
          soon with her.
          <span className="chat__timestamp">dummy timestamp</span>
        </div>

        <div className={`chat__message  chat__receiver}`}>
          <span className="chat__name">Zakir Ullah</span>I will marry inshallah
          soon with her.
          <span className="chat__timestamp">dummy timestamp</span>
        </div> */}

        {/* <div ref={messagesEndRef} /> */}
      </div>
      <div className="chat__footer">
        <div className="chat__icons">
          <IconButton>
            <InsertEmoticonIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
        </div>

        <form>
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            type="text"
            placeholder="Type a message.."
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon className="chat__mic" />
      </div>
    </div>
  );
};

export default Chat;
