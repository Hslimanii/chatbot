import React, { useState } from "react";
import "./styles.css";

const Chat = () => {
  const chat = [
    { role: "user", message: "Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! Hi Can you help me !!! ", timestamp: "2023-11-14T12:30:00Z"  },
    {
      role: "robot",
      message:
        "Hello How are youHow are youHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHowyouHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are you",
        timestamp: "2023-11-14T12:30:00Z" 
    },
    { role: "user", message: "Hi aaaaaaaaaaaaa",timestamp: "2023-11-14T12:30:00Z"  },
    { role: "robot", message: "Hello Howou" , timestamp: "2023-11-14T12:30:00Z" },
    { role: "user", message: "Hi", timestamp: "2023-11-14T12:30:00Z"  },
    { role: "robot", message: "Hello Howou",timestamp: "2023-11-14T12:30:00Z"  },
    { role: "user", message: "Hi", timestamp: "2023-11-14T12:30:00Z"  },
    { role: "robot", message: "Hello Howou", timestamp: "2023-11-14T12:30:00Z"  },
    { role: "robot", message: "Hello Howou", timestamp: "2023-11-14T12:30:00Z"  },
    { role: "robot", message: "Hello Howou", timestamp: "2023-11-14T12:30:00Z"  },
    { role: "robot", message: "Hello Howou", timestamp: "2023-11-14T12:30:00Z"  },
    { role: "robot", message: "cccs", timestamp: "2023-11-14T12:30:00Z"  },
  ];

  const [text, setText] = useState('');
  const [rows, setRows] = useState(1);
  const minRows = 1;
  const maxRows = 3;

  const handleChange = (event) => {
    const textareaRows = event.target.value.split('\n').length;
    setRows(Math.min(maxRows, Math.max(minRows, textareaRows)));
    setText(event.target.value);
  };


  const formatTimestamp = (timestamp) => {
    const options = { hour: "numeric", minute: "numeric" };
    return new Date(timestamp).toLocaleTimeString(undefined, options);
  };
  return (
    <div className="chat-container">


      <div className="sidebar">
        <div className="sidebar-header"> 
       <img className="logo_avx" src="https://www.avaxiagroup.com/wp-content/themes/poey-custom-wp/assets/img/avaxia-logo.svg" alt="" />
        </div>
        <div className="sidebar-content">b </div>
        <div className="sidebar-footer">c </div>
      </div>
      <div className={chat.length > 0 ? "main-content" : ""}>
        <div className="header">
          {/* Add a header div with a search input */}
          <div>
            <input type="text" className="search-input" placeholder="Search in chat..." />
          </div>
          <div className="headerIcons">
            <span className="icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-settings"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
              </svg>
            </span>
            <span className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-export" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
   <path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3"></path>
</svg>
            </span>
          </div>
        </div>
        {chat.length > 0 && (
          <div className="chat-box">
            {chat.map((item, index) => (
                         <div
              key={index}
              className={`message-container ${item.role === "robot" && "test"} ${item.role === "user" && "user"}`}
            >
                <span className="role-icon">
                  {item.role === "user" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-user-bolt"
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
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4c.267 0 .529 .026 .781 .076"></path>
                      <path d="M19 16l-2 3h4l-2 3"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-robot"
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
                      <path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z"></path>
                      <path d="M10 16h4"></path>
                      <circle
                        cx="8.5"
                        cy="11.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                      <circle
                        cx="15.5"
                        cy="11.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                      <path d="M9 7l-1 -4"></path>
                      <path d="M15 7l1 -4"></path>
                    </svg>
                  )}
                </span>
                <div className="message">
                    {item.message}
                    </div>
                           </div>
                           
            ))}
          </div>
        )}
     <div className="chat-input">
  <div className="wraptest">
    <div class="input-container">
        <svg xmlns="http://www.w3.org/2000/svg" class="iconSend icon-tabler icon-tabler-send" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10 14l11 -11"></path>
        <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" class="iconMicro icon-tabler icon-tabler-microphone-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9"></path>
   <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" class="iconUpload icon-tabler icon-tabler-upload" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
      </div>
    </div>
  );
};

export default Chat;
