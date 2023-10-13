import React, { useEffect, useState, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  
 const chatboxRef = useRef(null);
 const [isChatbotOpen, setIsChatbotOpen] = useState(false); // State to track chatbot visibility
  const chatInputRef = useRef(null);
  

  const [userMessage, setUserMessage] = useState('');
  const inputInitHeight = useRef(null);

  useEffect(() => {
    inputInitHeight.current = chatInputRef.current.scrollHeight;
    chatInputRef.current.style.height = `${inputInitHeight.current}px`;
  }, []);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen); // Toggle chatbot state
  };
  const createChatLi = (message, className) => {
    const chatLi = document.createElement('li');
    chatLi.classList.add('chat', `${className}`);
    let chatContent =
      className === 'outgoing' ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector('p').textContent = message;
    return chatLi;
  };

  const generateResponse = (chatElement) => {
    const messageElement = chatElement.querySelector('p');
    const API_URL = 'https://chatgpt-api8.p.rapidapi.com/';

    const requestOptions = {
      method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '5e6816dfecmsh1e650e5deb82948p172b3djsn6c4a0b0f1bad',
		'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
	},
	body: [
		{
			content: 'who won the super bowl 2019?',
			role: 'user'
		}
	]
};

    fetch(API_URL, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        messageElement.textContent = data.choices[0].message.content.trim();
      })
      .catch(() => {
        messageElement.classList.add('error');
        messageElement.textContent = 'Oops! Something went wrong. Please try again.';
      })
      .finally(() => chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight));
  };

  const handleChat = () => {
    const messageText = chatInputRef.current.value.trim();
    setUserMessage(chatInputRef.current.value.trim());
    if (!userMessage) return;

    chatInputRef.current.value = '';
    chatInputRef.current.style.height = `${inputInitHeight.current}px`;

    chatboxRef.current.appendChild(createChatLi(messageText, 'outgoing'));
    chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);

    setUserMessage(messageText);

    setTimeout(() => {
      const incomingChatLi = createChatLi('Thinking...', 'incoming');
      chatboxRef.current.appendChild(incomingChatLi);
      chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
      generateResponse(incomingChatLi);
    }, 600);
  };

  const openChatbot = () => {
    document.body.classList.add('show-chatbot');
  };

  const closeChatbot = () => {
    document.body.classList.remove('show-chatbot');
  };


  return (
    <div className={`body ${isChatbotOpen ? 'show-chatbot' : ''}`}>
      <button className="chatbot-toggler" onClick={toggleChatbot}>
        <span className={`material-symbols-rounded ${isChatbotOpen ? 'hidden' : ''}`}>
          mode_comment
        </span>
        <span className={`material-symbols-outlined ${isChatbotOpen ? '' : 'hidden'}`}>
          close
        </span>
      </button>
    <div className="chatbot">
      <header>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" />
        <h2>Help & Support</h2>
        {/* <span className="close-btn material-symbols-outlined" onClick={closeChatbot}>
          close
        </span> */}
      </header>
      <ul className="chatbox" ref={chatboxRef}>
        <li className="chat incoming">
          <span className="material-symbols-outlined">smart_toy</span>
          <p>Hi there 👋, How can I help you today?</p>
        </li>
      </ul>
      <div className="chat-input">
        <textarea
          placeholder="Enter a message..."
          spellCheck="false"
          ref={chatInputRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey && window.innerWidth > 800) {
              e.preventDefault();
              handleChat();
            }
          }}
        ></textarea>
        <span id="send-btn" className="material-symbols-rounded" onClick={handleChat}>
          send
        </span>
      </div>
    </div>
    </div>
  );
};

export default Chatbot;
