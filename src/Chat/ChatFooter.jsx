import React, { useState } from "react";
import { SendIcon, MicIcon, UploadIcon } from "./Icons";
import "./ChatFooter.css";

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
  return (
    <div className="chat-input">
      <div className="chat-input-wrapper">
        <div class="input-container">
          {/* icons */}
          <SendIcon />
          <MicIcon />
          <UploadIcon />
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
        {/* <small className="input_small"> Avaxia</small> */}
      </div>
    </div>
  );
};

export default ChatFooter;
