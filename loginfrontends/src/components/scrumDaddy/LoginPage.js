import React, { useState } from 'react';
import './LoginPage.css';

import user_icon from '../Assets/user.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import SignupPopup from './SignupPopup';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [action, setAction] = useState("Login");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupClose = () => {
    setShowPopup(false);
    setName("");
    setEmail("");
    setPassword("");
    setAction("Login");
    setMessage("");
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password clicked");
    setMessage("Forgot Password functionality is not implemented in this demo.");
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    console.log('Sign Up Submitted', { name, email, password });
    // Simulate a successful signup if all fields are filled.
    if(name && email && password) {
      setMessage("");
      setShowPopup(true);
    } else {
      setMessage("Please fill in all fields for sign up.");
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log('Login Submitted', { email, password });
    // Simulate a login process.
    if(email && password) {
      setMessage("Login successful (demo).");
    } else {
      setMessage("Please enter both email and password to login.");
    }
  };

  const handleActionSwap = () => {
    setEmail('');
    setName('');
    setPassword('');
    setMessage("");
    setAction(prev => (prev === "Sign Up" ? "Login" : "Sign Up"));
  };

  return (
    <div className="login-page">
      <div className={action === "Sign Up" ? "login-container left" : "login-container right"}>
        {action === "Sign Up" ? (
          <div className="left-side-container">
            <div className="left-side-header">Already Have an Account?</div>
            <div className="underline"></div>
            <p>To continue where you left off, please log in with your existing credentials.</p>
            <button onClick={handleActionSwap}>Login</button>
          </div>
        ) : (
          <div className="left-side-container">
            <div className="left-side-header">New Here?</div>
            <div className="underline"></div>
            <p>Create a new account to get started.</p>
            <button onClick={handleActionSwap}>Sign Up</button>
          </div>
        )}
        <div className="right-side-container">
          <div className="right-side-header">
            {action === "Sign Up" ? (
              <div className="text">Create Account</div>
            ) : (
              <div className="text">Login to Account</div>
            )}
            <div className="underline"></div>
            <div className="error-message">{message}</div>
          </div>
          <form
            className="submission-form"
            onSubmit={action === "Sign Up" ? handleSubmitSignUp : handleSubmitLogin}
          >
            {action === "Sign Up" && (
              <label className="name">
                <img src={user_icon} alt="User Icon" />
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="off"
                />
              </label>
            )}
            <label className="email">
              <img src={email_icon} alt="Email Icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
            </label>
            <label className="password">
              <img src={password_icon} alt="Password Icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
            </label>
            {action === "Login" && (
              <div className="forgot-password">
                <span onClick={handleForgotPassword}>Forgot Password?</span>
              </div>
            )}
            <button type="submit">{action}</button>
          </form>
        </div>
      </div>
      {showPopup && <SignupPopup onClose={handlePopupClose} />}
    </div>
  );
};

export default LoginPage;
