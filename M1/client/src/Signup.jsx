import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:3001/register', { name, email, password })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>Already Have an Account</p>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default Signup;
