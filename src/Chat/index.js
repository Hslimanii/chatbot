import React from 'react';
import "./styles.css";

const Chat = () => {
    const chat = [
        { role: 'user', message: 'Hi' },
        { role: 'robot', message: 'Hello How are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are you' },
        { role: 'user', message: 'Hi' },
        { role: 'robot', message: 'Hello Howou' },
        { role: 'user', message: 'Hi' },
        { role: 'robot', message: 'Hello Howou' },
        { role: 'user', message: 'Hi' },
        { role: 'robot', message: 'Hello Howou' },
        { role: 'robot', message: 'Hello How are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are you' },
        { role: 'robot', message: 'Hello How are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are you' },
        { role: 'robot', message: 'Hello How are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are you' },
        { role: 'robot', message: 'Hello How are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are you' },
        { role: 'robot', message: 'Hello How are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are you' },


    ]
    return (
        <div className='chat-container'>
            <div className='sidebar'></div>
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
                <div className='chat-input'>
                    <div className='wraptest'>
                        <div className='items_wrapper'>
                            <input type='text' className='input_class' placeholder='Type a message...' />
                            <span className='send_icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M10 14l11 -11"></path>
                                    <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                                </svg>
                            </span>
                        </div>
                        <small className='input_small'> Avaxia</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
