import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VendorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/UserLogin', {
        email,
        password,
      });
      localStorage.setItem('email', email );
      console.log(response.data);
      // Optionally, redirect to dashboard or show a success message
      navigate("/products");
    } catch (error) {
      console.error('Error logging in:', error.response.data.message);
      // Set error message to display to the user
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>User Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <br />
        <button type="submit" style={styles.button}>Login</button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

const styles = {
  input: {
    margin: '5px',
    padding: '8px',
    width: '200px',
  },
  button: {
    margin: '10px',
    padding: '8px 16px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
  },
};

export default VendorLogin;
