import React from "react";
import { RobotIcon, UserIcon } from "./Icons";
import "./ChatBox.css";
import AudioRecorder from "./AudioRecorder";

const ChatBox = ({ currentChat }) => {
  return (
    <>
    {/* <AudioRecorder /> */}
      {currentChat.length > 0 ? (
        <div className="chat-box">
          {currentChat.map((item, index) => (
            <div
              key={index}
              className={`message-container ${
                item.role === "robot" && "bot-message-container-color"
              } ${item.role === "user" && "user"}`}
            >
              <span className="role-icon">
                {item.role === "user" ? <UserIcon /> : <RobotIcon />}
              </span>
              <div className="message">{item.message}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="chat-box">
          <div className="message-container">
            <div className="message">Start a new chat...</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
