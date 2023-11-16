import React, { useState } from "react";
import "./Sidebar.css";
import { JeraLogo, LogoutIcon } from "./Icons";
const Sidebar = ({ currentChat, setCurrentChat, chat, chat2, chat3 }) => {
  const [selectedItem, setSelectedItem] = useState("1");

  const historyData = {
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
  };
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
