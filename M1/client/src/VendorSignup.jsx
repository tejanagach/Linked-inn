import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VendorSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/vendorSignup', {
        name,
        email,
        password,
      });
      console.log(response.data);
      // Optionally, redirect to login page or show a success message
    } catch (error) {
      console.error('Error signing up:', error.response.data.message);
      // Optionally, display an error message to the user
    }
  };

  return (
    <div>
      <h2>Vendor Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <Link to="/vendorLogin">Login</Link></p>
    </div>
  );
};

export default VendorSignup;
