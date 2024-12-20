import React from 'react';
import './App.css'; // Import the CSS file for styling

function App() {
  return (
    <div className="whatsapp-web">
      <div className="sidebar">
        <div className="profile-section">
          <img
            src="./download.png" 
            alt="Profile"
            className="profile-pic"
          />
        </div>
        <div className="no-chats">
          <p>No chats, contacts or messages found</p>
        </div>
      </div>
      <div className="main-content">
        <div className="content-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp Logo"
            className="whatsapp-logo"
          />
          <h2>Keep your phone connected</h2>
          <p>
            WhatsApp connects to your phone to sync messages. To reduce data
            usage, connect your phone to Wi-Fi.
          </p>
          <a href="https://www.whatsapp.com" className="download-link">
            WhatsApp is available for Mac. Get it here.
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

// import React from "react";
// import Header from "./Header";
// import MainContent from "./Maincontent";
// import "./App.css";

// function App() {
//   return (
//     <div className="app">
//       <Header />
//       <MainContent />
//     </div>
//   );
// }

// export default App;
