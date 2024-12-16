import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ChatDetails.css';

const ChatDetails = () => {
  const navigate = useNavigate();
  const { state: chat } = useLocation();

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: chat.username,
      text: 'Hi! I really liked the skirt you have on your profile, and I saw you liked one of my items. Can we arrange a time to meet up and swap?',
      type: 'received',
    },
    {
      id: 2,
      sender: 'You',
      text: 'Sounds great! Sunday at 3pm works for me, hbu?',
      type: 'sent',
    },
    {
      id: 3,
      sender: chat.username,
      text: 'Yes! That works for me! See you there.',
      type: 'received',
    },
  ]);

  if (!chat) {
    return <div>Chat not found</div>;
  }

  return (
    <div className="chat-details-page">
      <div className="chat-details-header">
        <button onClick={() => navigate(-1)}>←</button>
        <h1>{chat.username}</h1>
        <div className="spacer"></div>
        <div className="profile-icon">
          <img
            src={chat.avatar}
            alt={`${chat.username}'s avatar`}
            className="user-icon"
          />
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-bubble ${message.type}`} 
          >
            {message.type === 'received' && (
              <div className="avatar">
                <img
                  src={chat.avatar}
                  alt={`${message.sender}'s avatar`}
                  className="user-icon"
                />
              </div>
            )}
            <div className="message-text">{message.text}</div>
            {message.type === 'sent' && (
              <div className="avatar">
                <img
                  src="/images/avatar4.png"
                  alt="Your avatar"
                  className="user-icon"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Write a message..."
          className="message-input"
        />
        <button className="send-button">➤</button>
      </div>
    </div>
  );
};

export default ChatDetails;
