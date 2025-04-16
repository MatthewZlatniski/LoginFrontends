import React, { useState } from 'react';
import './loginPage.css';
import headerImage from '../Assets/starbuckslogo.png';

const LoginPage = () => {
  const [message, setMessage] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (!username || !password) {
      setMessage('Please fill in both fields.');
    } else {
      setMessage('Logging in...');
      console.log('Username:', username, 'Password:', password);
      // Simulate a login delay
      setTimeout(() => setMessage(''), 2000);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  return (
    <div className='login-page'>
      <div className='login-content'>
        <div className='login-header'>
          <img src={headerImage} alt="Login Header" />
        </div>
        <div className='login-title'>
          Sign in or create an account
        </div>
        <div className='login-container-box'>
          <div className='indicate'>
            <p>* indicates required field</p>
          </div>
          <form onSubmit={handleLogin} className="login-form">
            <input
              type="text"
              name="username"
              placeholder="* Username or email address"
              className="login-input"
            />
            {/* Wrap the password input and toggle button in a container */}
            <div className="password-input-container" style={{ position: 'relative' }}>
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                name="password"
                placeholder="* Password"
                className="login-input"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="toggle-password-button"
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer'
                }}
                aria-label="Toggle password visibility"
              >
                {isPasswordVisible ? 'Hide' : 'Show'}
              </button>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            {message && <p className="login-message">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
