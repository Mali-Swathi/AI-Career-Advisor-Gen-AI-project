import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real application, you would send this data to your backend API.
    // For now, we'll just simulate a successful registration.
    console.log('Registering with:', { name, email, password });
    
    // Simulate a successful API response
    setTimeout(() => {
      setIsRegistered(true);
    }, 500);
  };

  if (isRegistered) {
    return (
      <div className="auth-container">
        <div className="auth-form">
          <h2>Successfully Registered!</h2>
          <p>You can now <Link to="/login" className="toggle-link">log in to your account</Link>.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Create a new account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="auth-button">Register</button>
        </form>
        <Link to="/login" className="toggle-link">Already have an account? Login here.</Link>
      </div>
    </div>
  );
}

export default RegisterForm;