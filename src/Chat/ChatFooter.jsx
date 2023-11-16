import React, { useState } from "react";
import { SendIcon, UploadIcon } from "./Icons";
import "./ChatFooter.css";
import AudioRecorder from "./AudioRecorder";

const ChatFooter = () => {
  const [text, setText] = useState("");
  const [rows, setRows] = useState(1);
  const minRows = 1;
  const maxRows = 3;
  const handleChange = (event) => {
    const textareaRows = event.target.value.split("\n").length;
    setRows(Math.min(maxRows, Math.max(minRows, textareaRows)));
    setText(event.target.value);
  };
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("Uploaded file:", file);
  };
  return (
    <div className="chat-input">
      <div className="chat-input-wrapper">
        <div className="input-container">
          {/* icons */}
          <SendIcon />
          <AudioRecorder />
          <label htmlFor="file-input">
            <UploadIcon />
          </label>
          <input
            id="file-input"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
          <div className="input_class">
            <textarea
              type="text"
              className="textarea_class"
              rows={rows}
              onChange={handleChange}
              placeholder="Type a message..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatFooter;
