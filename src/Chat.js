import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./Chat.css";
import axios from './axios';

function Chat({ messages }) {
    const [input, setInput] = useState("");
    
    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new',{
            message: input,
            name: "Haoney",
            timestamp: "235",
            recieved: false
        });

        setInput('')
    }
    return (
        <div className="Chat">
            <div className="chat_header">
                <Avatar/>
                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen at {new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton><SearchOutlinedIcon/></IconButton>
                    <IconButton><AttachFileIcon/></IconButton>
                    <IconButton><MoreVertIcon/></IconButton>
                </div>
            </div>
            <div className="chat_body">
                {messages.map((message) => (
                    <p className={`chat_message ${message.recieved && "chat_reciever"}`}>
                    <span className="chat_name">{message.name}</span>
                    <span >{message.message}</span>
                    <span className="chat_timeStamp">
                        {message.timestamp}
                    </span>
                </p>
                ))}
            </div>
            
            <div className="chat_footer">
                <InsertEmoticonIcon/>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text"
                    />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
