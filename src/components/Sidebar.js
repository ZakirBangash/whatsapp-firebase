import React,{useEffect,useState} from "react";
import "./Sidebar.css";
import Avatar from "@material-ui/core/Avatar";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SidebarChat from "./SidebarChat";
import db from '../firebase'


const Sidebar = () => {
    const [rooms, setrooms] = useState([])

    useEffect(() => {
        const collection = db.collection('messages');
        collection.onSnapshot((snapshot) => {
            setrooms(
                snapshot.docs.map((doc) => ({
                  id: doc.id,
                  data: doc.data(),
                }))
              );
        })
    }, [])


    console.log(rooms)

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar className="sidebar__header__avatar" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />

          <input type="text" placeholder="Serach or start new chat" />
        </div>
      </div>

      <div className="sidebar__chat">
      <SidebarChat addNewRoom />

        {rooms.map((room) => (
              <SidebarChat key={room.id} name={room.data.name} roomId={room.id} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
