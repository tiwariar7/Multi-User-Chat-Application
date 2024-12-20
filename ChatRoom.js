import React, { useState, useEffect } from "react";
import "./ChatRoom.css";

const ChatRoom = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [blockedUsers, setBlockedUsers] = useState([]);

  useEffect(() => {
    fetchMessages();
    fetchUsers();
  }, []);

  const fetchMessages = () => {
    setMessages([
      { sender: "User1", text: "Hello!" },
      { sender: "User2", text: "Hi there!" },
    ]);
  };

  const fetchUsers = () => {
    setUsers(["User1", "User2", "User3"]);
  };

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { sender: "You", text: message }]);
      setMessage("");
    }
  };

  const blockUser = (user) => {
    setBlockedUsers([...blockedUsers, user]);
  };

  const unblockUser = (user) => {
    setBlockedUsers(blockedUsers.filter((blockedUser) => blockedUser !== user));
  };

  return (
    <div className="chatroom">
      <div className="users">
        <h3>Users</h3>
        <ul>
          {users.map((user) => (
            <li key={user}>
              {user}
              <div className="user-actions">
                {blockedUsers.includes(user) ? (
                  <button onClick={() => unblockUser(user)}>Unblock</button>
                ) : (
                  <button onClick={() => blockUser(user)}>Block</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="chat">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              <strong>{msg.sender}: </strong>
              <span>{msg.text}</span>
            </div>
          ))}
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;

// import React, { useState, useEffect } from "react";
// import "./ChatRoom.css";

// const ChatRoom = () => {
//   const [loggedInUser] = useState("You"); // Simulate logged-in user
//   const [selectedUser, setSelectedUser] = useState(null); // Currently chatting with
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [blockedUsers, setBlockedUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = () => {
//     setUsers(["User1", "User2", "User3"]);
//   };

//   const fetchMessages = (user) => {
//     // Simulate fetching messages between loggedInUser and selectedUser
//     if (user === "User1") {
//       setMessages([
//         { sender: "You", text: "Hello, User1!" },
//         { sender: "User1", text: "Hi!" },
//       ]);
//     } else if (user === "User2") {
//       setMessages([
//         { sender: "You", text: "Hey User2!" },
//         { sender: "User2", text: "Hello!" },
//       ]);
//     } else {
//       setMessages([]);
//     }
//   };

//   const selectUser = (user) => {
//     if (!blockedUsers.includes(user)) {
//       setSelectedUser(user);
//       fetchMessages(user);
//     }
//   };

//   const sendMessage = () => {
//     if (message.trim() && selectedUser) {
//       setMessages([...messages, { sender: "You", text: message }]);
//       setMessage("");
//     }
//   };

//   const blockUser = (user) => {
//     setBlockedUsers([...blockedUsers, user]);
//     if (selectedUser === user) {
//       setSelectedUser(null);
//       setMessages([]);
//     }
//   };

//   const unblockUser = (user) => {
//     setBlockedUsers(blockedUsers.filter((blockedUser) => blockedUser !== user));
//   };

//   return (
//     <div className="chatroom">
//       <div className="users">
//         <h3>Users</h3>
//         <ul>
//           {users.map((user) => (
//             <li
//               key={user}
//               className={selectedUser === user ? "active-user" : ""}
//             >
//               <div onClick={() => selectUser(user)}>{user}</div>
//               <div className="user-actions">
//                 {blockedUsers.includes(user) ? (
//                   <button onClick={() => unblockUser(user)}>Unblock</button>
//                 ) : (
//                   <button onClick={() => blockUser(user)}>Block</button>
//                 )}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="chat">
//         {selectedUser ? (
//           <>
//             <h3>Chat with {selectedUser}</h3>
//             <div className="messages">
//               {messages.map((msg, index) => (
//                 <div key={index} className="message">
//                   <strong>{msg.sender}: </strong>
//                   <span>{msg.text}</span>
//                 </div>
//               ))}
//             </div>
//             <div className="input">
//               <input
//                 type="text"
//                 placeholder="Type a message..."
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//               <button onClick={sendMessage}>Send</button>
//             </div>
//           </>
//         ) : (
//           <div className="no-chat">
//             <p>Select a user to start chatting</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChatRoom;
