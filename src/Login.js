import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);
    setErrorMessage(''); // Clear previous error messages

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/login`, {
        username,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json', // Ensure JSON content type is sent
        },
      });

      if (response.status === 200 && response.data === "Login successful!") {
        alert('Login successful!');
        navigate('/chat'); // Navigate to chat page on success
      } else {
        setErrorMessage(response.data); // Backend error message
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setErrorMessage(err.response.data); // Backend error message
      } else {
        setErrorMessage('Login failed! Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Login;
