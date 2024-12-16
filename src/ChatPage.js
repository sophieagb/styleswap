import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Header from './Main/Header';
import Footer from './Main/Footer';
import './ChatPage.css';

const ChatPage = () => {
  const chats = [
    {
      id: 1,
      username: '@styleswap_user123',
      avatar: '/images/avatar1.png',
      item: '/images/chat1.png',
    },
    {
      id: 2,
      username: '@styleswap_user456',
      avatar: '/images/avatar2.png',
      item: '/images/chat2.png',
    },
    {
      id: 3,
      username: '@styleswap_user789',
      avatar: '/images/avatar3.png',
      item: '/images/chat1.png',
    },
  ];

  return (
    <div className="chat-page">
      <Header />
      <div className="chat-bubble-container">
        <img
          src="/images/chat_bubble.png"
          alt="Chat Bubble Icon"
          className="chat-bubble"
        />
      </div>
      <div className="chat-list">
        {chats.map((chat) => (
           <Link
           key={chat.id}
           to={`/chat/${chat.id}`}
           state={chat} 
           className="chat-link"
         >
            <div className="chat-section">
              <div className="avatar">
                <img src={chat.avatar} alt={`${chat.username} avatar`} />
              </div>
              <div className="chat-info">
                <span className="username">{chat.username}</span>
                <div className="item-preview">
                  <img src={chat.item} alt="Item preview" />
                </div>
              </div>
              <div className="arrow">
                <button className="carousel-button">❯</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ChatPage;