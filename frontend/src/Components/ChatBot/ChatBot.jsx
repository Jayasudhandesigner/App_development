import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import '../../Assest/css/ChatBot.css'; // Import the CSS file for styling

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null); // Ref to the end of the messages

  const handleSendMessage = async () => {
    if (input.trim() !== '') {
      const userMessage = input.trim();
      setMessages([...messages, { text: userMessage, fromUser: true }]);
      setInput('');
      scrollToBottom();

      try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
          model: 'text-davinci-003', // Choose the model you want to use
          prompt: userMessage,
          max_tokens: 150, // Adjust token limit as needed
        }, {
          headers: {
            'Authorization': `Bearer YOUR_API_KEY`, // Replace with your API key
            'Content-Type': 'application/json'
          }
        });

        const botMessage = response.data.choices[0].text.trim();
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botMessage, fromUser: false },
        ]);
        scrollToBottom();
      } catch (error) {
        console.error('Error fetching data from OpenAI:', error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Sorry, something went wrong. Please try again later.', fromUser: false },
        ]);
      }
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { // Only send message if Enter is pressed and Shift is not pressed
      e.preventDefault(); // Prevent default behavior (e.g., adding a new line)
      handleSendMessage();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h4>Chatbot</h4>
      </div>
      <div className="chatbot-content">
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chatbot-message ${msg.fromUser ? 'user-message' : 'bot-message'}`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} /> {/* Empty div to scroll to */}
        </div>
      </div>
      <div className="chatbot-footer">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="chatbot-input"
        />
        <button className="chatbot-button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
