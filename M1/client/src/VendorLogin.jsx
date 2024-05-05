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
      const response = await axios.post('http://localhost:3001/vendorLogin', {
        email,
        password,
      });
      console.log(response.data);
      // Optionally, redirect to dashboard or show a success message
      navigate("/productuploadForm");
    } catch (error) {
      console.error('Error logging in:', error.response.data.message);
      // Set error message to display to the user
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div>
      <h3>Vendor Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default VendorLogin;
