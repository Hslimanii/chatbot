import React, { useState } from "react";
import "./chat.css";
import Sidebar from "./components/Sidebar/Sidebar";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import ChatFooter from "./components/ChatFooter/ChatFooter";
import ChatBox from "./components/ChatBox/ChatBox";

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

  const [historyData, setHistoryData] = useState({
    today: [
      {
        id: "1",
        title: "Test 1",
      },
      {
        id: "2",
        title: "Test 2",
      },
      {
        id: "3",
        title: "Test 3",
      },
      { id: "4", title: "Test 4" },
      { id: "5", title: "Test 5" },
      { id: "6", title: "Test 6" },
      { id: "7", title: "Test 7" },
      { id: "8", title: "Test 8" },
      { id: "9", title: "Test 9" },
      { id: "10", title: "Test 10" },
      { id: "11", title: "Test 11" },
      { id: "12", title: "Test 12" },
      { id: "13", title: "Test 13" },
      { id: "14", title: "Test 14" },
      { id: "15", title: "Test 15" },
      { id: "16", title: "Test 16" },
      { id: "17", title: "Test 17" },
      { id: "18", title: "Test 18" },
      { id: "19", title: "Test 19" },
      { id: "20", title: "Test 20" },
    ],
    yesterday: [
      {
        id: "100",
        title: "Test 100",
      },
      {
        id: "101",
        title: "Test 101",
      },
      {
        id: "102",
        title: "Test 102",
      },
      {
        id: "103",
        title: "Test 103",
      },
    ],
  })

  const [currentChat, setCurrentChat] = useState(chat);
  const fakeID = () => Math.random().toString(36).substring(7);

  const handleSendMessage = (message) => {
    setCurrentChat([...currentChat, message]);
  };

  const handleNewChatClick = () => {
    const newChat = []
    setCurrentChat(newChat);
    const updatedHistoryData = {
      ...historyData,
      today: [
        { id: fakeID(), title: "New Chat" },
        ...historyData.today,
      ],
    };
    setHistoryData(updatedHistoryData);

  };


  return (
    <div className="chat-container">
      <Sidebar setCurrentChat={setCurrentChat} currentChat={currentChat} chat={chat} chat2={chat2} chat3={chat3} onNewChatClick={handleNewChatClick} historyData={historyData} setHistoryData={setHistoryData}
      />
      <div className="main-content">
        <ChatHeader />
        <ChatBox currentChat={currentChat} />
        <ChatFooter onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Chat;
