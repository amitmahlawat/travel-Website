import React, { useState } from 'react'
import './LoginPage.css';
import { useDispatch } from 'react-redux';
import { authenticationActions } from './Store';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const dispatch=useDispatch()
      // State variables for form inputs and messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setError('');
    setSuccess('');

    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      
      return;
    }
    
    // Mock authentication logic
    // In a real application, replace this with an API call
    const mockEmail = 'user@example.com';
    const mockPassword = 'password123';

    // if (email === mockEmail && password === mockPassword) {
      setSuccess('Login successful!');  
      dispatch(authenticationActions.Login(email))
      localStorage.setItem("emailiD",email)
      // localStorage.setItem("loginStatus",true)
      navigate("/")
      // Redirect to another page or perform other actions
    // } else {
      setError('Invalid email or password.');
    // }
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
