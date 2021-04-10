import React from "react";
import "./SidebarChat.css";
// import Avatar from "@material-ui/core/Avatar";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import db from '../firebase'

const SidebarChat = ({addNewRoom,name,roomId}) => {

const addRoom = () => {
    const roomName = prompt("Enter contact name?")

    if(roomName){
        db.collection('messages').add({
            name: roomName
        })
    }
  
}


  return !addNewRoom ? (
    <div className="sidebarChat">
    <Link className="sidebar__link" to={`/${roomId}`}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
                    Last message..
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset"  />
      </Link>
    </div>
  ): (
    <div className="sidebarChat" onClick={addRoom}>
      <ListItem >
        <ListItemText className="addNew"
          primary="Add new Contact"
        />
      </ListItem>
      <Divider variant="inset"  />  
    </div>
  );
};

export default SidebarChat;
