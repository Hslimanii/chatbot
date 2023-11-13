import React from 'react';
import "./styles.css";

const Chat = () => {
    const chat = [
        { role: 'user', message: 'Hi' },
        { role: 'robot', message: 'Hello How are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are you' },
        { role: 'user', message: 'How are you?' },
    ]
    return (
        <div className='chat-container'>
            <div className='sidebar'></div>
            {/* <div className='main-content'></div> */}
            <div className={chat.length > 0 ? "main-content" : ""}>
                {chat.length > 0 && (
                    <div className="chat-box">
                        {chat.map((item, index) => (
                            <div key={index} className={`message-container ${item.role === 'robot' && "test"}`}>
                                <span className="role-icon">
                                    {item.role === 'user' ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-bolt" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4c.267 0 .529 .026 .781 .076"></path>
                                            <path d="M19 16l-2 3h4l-2 3"></path>
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-robot" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z"></path>
                                            <path d="M10 16h4"></path>
                                            <circle cx="8.5" cy="11.5" r=".5" fill="currentColor"></circle>
                                            <circle cx="15.5" cy="11.5" r=".5" fill="currentColor"></circle>
                                            <path d="M9 7l-1 -4"></path>
                                            <path d="M15 7l1 -4"></path>
                                        </svg>
                                    )}
                                </span>
                                <div className="message">{item.message}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Chat;
