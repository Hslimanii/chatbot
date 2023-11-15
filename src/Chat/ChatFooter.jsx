import React, { useState } from "react";

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
      <div className="wraptest">
        <div class="input-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="iconSend icon-tabler icon-tabler-send"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 14l11 -11"></path>
            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="iconMicro icon-tabler icon-tabler-microphone-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9"></path>
            <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="iconUpload icon-tabler icon-tabler-upload"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
            <path d="M7 9l5 -5l5 5"></path>
            <path d="M12 4l0 12"></path>
          </svg>

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
