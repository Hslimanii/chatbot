import React from "react";
import "./ChatHeader.css";
import { SettingsIcon } from "./Icons";

const ChatHeader = () => {
  return (
    <div className="chat-header">
      <input
        type="text"
        className="search-input"
        placeholder="Search in chat..."
      />
      <div className="header-Icons">
        <div className="icon-container">
          <span>
            <SettingsIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
