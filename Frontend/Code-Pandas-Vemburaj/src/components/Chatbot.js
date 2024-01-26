// // // Chatbot.js
// // import React, { useState, useEffect } from 'react';
// // import '../styles/Chatbot.css'; // Import your CSS file
// // import Bot from '../images/bot.png';
// // import User from '../images/user.png';

// // const Chatbot = () => {
// //   const [messages, setMessages] = useState([]);
// //   const [newMessage, setNewMessage] = useState('');

// //   useEffect(() => {
// //     // Simulate a chatbot response after a delay when a new user message is added
// //     const lastMessage = messages[messages.length - 1];
// //     if (lastMessage && lastMessage.sender === 'user') {
// //       setTimeout(() => {
// //         setMessages([...messages, { text: 'I am a simple chatbot!', sender: 'chatbot' }]);
// //       }, 500);
// //     }
// //   }, [messages]);

// //   const handleSendMessage = () => {
// //     if (newMessage.trim() === '') return;

// //     setMessages([...messages, { text: newMessage, sender: 'user' }]);
// //     setNewMessage('');
// //   };

// //   return (
// //     <div className="chatbot-container">
// //       <div className="chat-messages">
// //         {messages.map((msg, index) => (
// //           <div key={index} className={`message ${msg.sender}`}>
// //             <img
// //               src={msg.sender === 'user' ? User : Bot}
// //               alt={msg.sender}
// //               className="avatar"
// //             />
// //             <div className="text">{msg.text}</div>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="input-container">
// //         <input
// //           type="text"
// //           placeholder="Type your message..."
// //           value={newMessage}
// //           onChange={(e) => setNewMessage(e.target.value)}
// //           onKeyDown={(e) => {
// //             if (e.key === 'Enter') {
// //               handleSendMessage();
// //             }
// //           }}
// //         />
// //         <button onClick={handleSendMessage}>Send</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Chatbot;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   const handleSendMessage = async () => {
//     if (newMessage.trim() === '') return;

//     try {
//       const response = await axios.post('http://localhost:5000/summary', { text: newMessage }); // Adjust the URL as needed
//       console.log('Response from backend:', response.data);

//       // Handle successful response (e.g., display a success message or update chat history)
//       setMessages([...messages, { text: newMessage, sender: 'user' }]);
//       setNewMessage('');
//     } catch (error) {
//       console.error('Error sending chat message:', error);

//       // Handle error gracefully (e.g., display an error message to the user)
//     }
//   };

//   return (
//     <div>
//     <div>
//       {/* Display Chat Messages */}
//       {messages.map((msg, index) => (
//         <div key={index}>{`${msg.sender}: ${msg.text}`}</div>
//       ))}
//     </div>
//     {/* Input for New Message */}
//     <input
//       type="text"
//       placeholder="Type your message..."
//       value={newMessage}
//       onChange={(e) => setNewMessage(e.target.value)}
//     />
//     {/* Button to Send Message */}
//     <button onClick={handleSendMessage}>Send</button>
//   </div>
//   );
  
// };

// export default Chatbot;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   const handleSendMessage = async () => {
//     if (newMessage.trim() === '') return;

//     try {
//       const response = await axios.post('http://localhost:5000/summary', { text: newMessage });
//       console.log('Response from backend:', response.data);

//       // Handle successful response
//       const { user_message, chatbot_response } = response.data;

//       // Update state to include both user input and chatbot response
//       setMessages([...messages, { text: user_message, sender: 'user' }, { text: chatbot_response, sender: 'chatbot' }]);
//       setNewMessage('');
//     } catch (error) {
//       console.error('Error sending chat message:', error);

//       // Handle error gracefully (e.g., display an error message to the user)
//     }
//   };

//   return (
//     <div>
//       <div>
//         {/* Display Chat Messages */}
//         {messages.map((msg, index) => (
//           <div key={index}>{`${msg.sender}: ${msg.text}`}</div>
//         ))}
//       </div>
//       {/* Input for New Message */}
//       <input
//         type="text"
//         placeholder="Type your message..."
//         value={newMessage}
//         onChange={(e) => setNewMessage(e.target.value)}
//       />
//       {/* Button to Send Message */}
//       <button onClick={handleSendMessage}>Send</button>
//     </div>
//   );
// };

// export default Chatbot;

// // // Chatbot.js
// // import React, { useState, useEffect } from 'react';
// import '../styles/Chatbot.css'; // Import your CSS file
// // import Bot from '../images/bot.png';
// // import User from '../images/user.png';

// // const Chatbot = () => {
// //   const [messages, setMessages] = useState([]);
// //   const [newMessage, setNewMessage] = useState('');

// //   useEffect(() => {
// //     // Simulate a chatbot response after a delay when a new user message is added
// //     const lastMessage = messages[messages.length - 1];
// //     if (lastMessage && lastMessage.sender === 'user') {
// //       setTimeout(() => {
// //         setMessages([...messages, { text: 'I am a simple chatbot!', sender: 'chatbot' }]);
// //       }, 500);
// //     }
// //   }, [messages]);

// //   const handleSendMessage = () => {
// //     if (newMessage.trim() === '') return;

// //     setMessages([...messages, { text: newMessage, sender: 'user' }]);
// //     setNewMessage('');
// //   };

// //   return (
// //     <div className="chatbot-container">
// //       <div className="chat-messages">
// //         {messages.map((msg, index) => (
// //           <div key={index} className={`message ${msg.sender}`}>
// //             <img
// //               src={msg.sender === 'user' ? User : Bot}
// //               alt={msg.sender}
// //               className="avatar"
// //             />
// //             <div className="text">{msg.text}</div>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="input-container">
// //         <input
// //           type="text"
// //           placeholder="Type your message..."
// //           value={newMessage}
// //           onChange={(e) => setNewMessage(e.target.value)}
// //           onKeyDown={(e) => {
// //             if (e.key === 'Enter') {
// //               handleSendMessage();
// //             }
// //           }}
// //         />
// //         <button onClick={handleSendMessage}>Send</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Chatbot;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   const handleSendMessage = async () => {
//     if (newMessage.trim() === '') return;

//     try {
//       const response = await axios.post('http://localhost:5000/summary', { text: newMessage }); // Adjust the URL as needed
//       console.log('Response from backend:', response.data);

//       // Handle successful response (e.g., display a success message or update chat history)
//       setMessages([...messages, { text: newMessage, sender: 'user' }]);
//       setNewMessage('');
//     } catch (error) {
//       console.error('Error sending chat message:', error);

//       // Handle error gracefully (e.g., display an error message to the user)
//     }
//   };

//   return (
//     <div>
//     <div>
//       {/* Display Chat Messages */}
//       {messages.map((msg, index) => (
//         <div key={index}>{`${msg.sender}: ${msg.text}`}</div>
//       ))}
//     </div>
//     {/* Input for New Message */}
//     <input
//       type="text"
//       placeholder="Type your message..."
//       value={newMessage}
//       onChange={(e) => setNewMessage(e.target.value)}
//     />
//     {/* Button to Send Message */}
//     <button onClick={handleSendMessage}>Send</button>
//   </div>
//   );
  
// };

// export default Chatbot;

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Chatbot.css'; // Import your CSS file
import Bot from '../images/bot.png';
import User from '../images/user.png';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;

    try {
      const response = await axios.post('http://localhost:5000/summary', { text: newMessage });
      console.log('Response from backend:', response.data);

      // Handle successful response
      const { user_message, chatbot_response } = response.data;

      // Update state to include both user input and chatbot response
      setMessages([...messages, { text: user_message, sender: 'user' }, { text: chatbot_response, sender: 'chatbot' }]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending chat message:', error);

      // Handle error gracefully (e.g., display an error message to the user)
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-messages">
        {/* Display Chat Messages */}
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <img
              src={msg.sender === 'user' ? User : Bot}
              alt={msg.sender}
              className="avatar"
            />
            <div className="text">{`${msg.sender}: ${msg.text}`}</div>
          </div>
        ))}
      </div>
      {/* Input for New Message */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        {/* Button to Send Message */}
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
