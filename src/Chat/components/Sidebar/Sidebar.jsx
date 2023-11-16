import React, { useState } from "react";
import "./Sidebar.css";
import { JeraLogo, LogoutIcon } from "../Icons/Icons";
const Sidebar = ({ currentChat, setCurrentChat, chat, chat2, chat3, onNewChatClick, historyData  }) => {
  const [selectedItem, setSelectedItem] = useState("1");


  const handleItemClick = (index) => {
    setSelectedItem(index);
    switch (index) {
      case "1":
        setCurrentChat(chat);
        break;
      case "2":
        setCurrentChat(chat2);
        break;
      case "3":
        setCurrentChat(chat3);
        break;
        case "new-chat": 
        onNewChatClick(); 
        break;
      // Add more cases as needed
      default:
        setCurrentChat([]);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span>
          <JeraLogo />
        </span>
      </div>
      <button
        className={`new-chat-button ${selectedItem === "new-chat" ? "selected" : ""}`}
        onClick={() => handleItemClick("new-chat")}
      >
        New Chat
      </button>
      <div className="sidebar-main-content">
        <div className="main-content-section">
          <h2>Today</h2>
          <ul>
            {historyData.today.map((item, index) => (
              <li
                key={item.id}
                className={item.id === selectedItem ? "selected" : ""}
                onClick={() => handleItemClick(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="main-content-section">
          <h2>Yesterday</h2>
          <ul>
            {historyData.yesterday.map((item, index) => (
              <li
                key={item.id}
                className={item.id === selectedItem ? "selected" : ""}
                onClick={() => handleItemClick(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="profile-message-container">
          <img
            src="https://images.desenio.com/zoom/8701_2.jpg"
            alt="aa"
            className="message-image"
          />
          <div className="message-text">
            <p>Houssem Slimani</p>
          </div>
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
