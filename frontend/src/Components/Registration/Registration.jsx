import React, { useState } from 'react';
import '../../Assest/css/Registration.css';
import logo from '../../Assest/Img/logo.png'; // Import the logo image


function Registration({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); // New state for email
  const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirming password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password && email && password === confirmPassword) {
      onRegister(username, password, email); // Pass email to onRegister
    } else {
      alert('Please fill all fields correctly.');
    }
  };

  return (
    <div className="registration-form-container">
                  <img src={logo} alt="Logo" className="logo" /> {/* Add the logo image */}
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      
    </div>
  );
}

export default Registration;
