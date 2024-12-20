import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const fetchMessages = async () => {
    const response = await axios.get('http://localhost:8080/api/messages/1'); // Replace 1 with the logged-in user's ID
    setMessages(response.data);
  };

  const sendMessage = async () => {
    await axios.post('http://localhost:8080/api/messages', {
      senderId: 1, // Replace with logged-in user's ID
      recipientId: 2, // Replace with recipient ID
      content: newMessage,
    });
    setNewMessage('');
    fetchMessages();
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div>
      <h1>Chat Room</h1>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.senderId}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
