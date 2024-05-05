import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {/* <img src="/img/varun bhai.jpg" alt="Logo" style={{ width: '200px', height: 'auto' }} /> */}
      </div>
      <h2>About Page</h2>
      <div>
        <h3>Choose Your Role</h3>
        <button onClick={() => console.log('Vendor selected')}>
          <Link to="/login">Login</Link>
        </button>
        <button onClick={() => console.log('Vendor selected')}>
          <Link to="/register">Signup</Link>
        </button>
        {/* <button onClick={() => console.log('User selected')}>
          <Link to="/userLogin">User Login</Link>
        </button>
        <button onClick={() => console.log('User selected')}>
          <Link to="/userSignup">User Signup</Link>
        </button> */}
      </div>
    </div>
  );
};

export default About;
