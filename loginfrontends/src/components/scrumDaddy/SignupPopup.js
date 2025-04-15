import React from 'react';
import "./SignupPopup.css";

const SignupPopup = ({ onClose }) => {
  return (
    <div className="signup-popup-overlay">
      <div className="signup-popup">
        <div className="header">Thank You For Signing Up!</div>
        <div className="sub-header">Your account has been successfully registered.</div>
        <p>Please check your email for further instructions.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SignupPopup;
