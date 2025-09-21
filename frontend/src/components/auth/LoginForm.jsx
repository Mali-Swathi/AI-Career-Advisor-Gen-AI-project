import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate a successful login
    console.log('Logging in with:', { email, password });
    
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 500);
  };

  if (isLoggedIn) {
    return (
      <div className="auth-container">
        <div className="auth-form">
          <h2>Logged in Successfully!</h2>
          <p>Welcome back! You can now access your personalized career advice.</p>
          <Link to="/career-advisor" className="auth-button">Go to AI Career Advisor</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login to your account</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="auth-button">Login</button>
        </form>
        <Link to="/register" className="toggle-link">Don't have an account? Register here.</Link>
      </div>
    </div>
  );
}

export default LoginForm;