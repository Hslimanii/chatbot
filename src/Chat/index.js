import React, { useState } from "react";
import "./styles.css";
import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import ChatBox from "./ChatBox";

const Chat = () => {
  const chat = [
    { role: "user", message: "Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! ", timestamp: "2023-11-14T12:30:00Z" },
    {
      role: "robot",
      message:
        "Hello How are youHow are youHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are you",
      timestamp: "2023-11-14T12:30:00Z"
    },
    { role: "user", message: "Hi aaaaaaaaaaaaa", timestamp: "2023-11-14T12:30:00Z" },
    { role: "robot", message: "Hello Howou", timestamp: "2023-11-14T12:30:00Z" },
    { role: "user", message: "Hi", timestamp: "2023-11-14T12:30:00Z" },
    { role: "robot", message: "Hello Howou", timestamp: "2023-11-14T12:30:00Z" },
    { role: "user", message: "Hi", timestamp: "2023-11-14T12:30:00Z" },
    { role: "robot", message: "Hello Howou", timestamp: "2023-11-14T12:30:00Z" },
    { role: "robot", message: "Hello Howou", timestamp: "2023-11-14T12:30:00Z" },
    { role: "robot", message: "Hello Howou", timestamp: "2023-11-14T12:30:00Z" },
    { role: "robot", message: "Hello Howou", timestamp: "2023-11-14T12:30:00Z" },
    { role: "robot", message: "cccs", timestamp: "2023-11-14T12:30:00Z" },
  ];
  const chat2 = [
    { role: "user", message: "Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! ", timestamp: "2023-11-14T12:30:00Z" },
    {
      role: "robot",
      message:
        "Hello How are youHow are youHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are you",
      timestamp: "2023-11-14T12:30:00Z"
    },
  ];
  const chat3 = [
    { role: "user", message: "Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! ", timestamp: "2023-11-14T12:30:00Z" },
  ];

  const [currentChat, setCurrentChat] = useState(chat);



  return (
    <div className="chat-container">
      <Sidebar setCurrentChat={setCurrentChat} currentChat={currentChat} chat={chat} chat2={chat2} chat3={chat3} />
      <div className="main-content">
        <ChatHeader />
        <ChatBox currentChat={currentChat} />
        <ChatFooter />
      </div>
    </div>
  );
};

export default Chat;
