import React, { useState } from 'react';
import './Loginform.css';
import { useNavigate, } from 'react-router-dom'; // Import useHistory instead of Link

const Loginform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Use useHistory instead of Link

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = () => setRememberMe(!rememberMe);

  const handleSignIn = async () => {
    // Prepare data for the request
    const data = {
      email: email,
      password: password,
    };

    try {
      // Make a POST request to the backend
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // Handle non-successful response (HTTP error status)
        console.error('Login failed:', response.statusText);
        return;
      }

      // Handle the successful response from the backend
      const responseData = await response.json();
      console.log('Login response:', responseData);
      // Depending on your backend response, you might want to handle authentication here

      // Redirect to "/Blog" after successful login
      navigate('/Blog');
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleResetPassword = () => {
    // Add logic for handling the password reset action
    console.log('Resetting password...');
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <div className="form-field">
        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
      </div>
      <div className="form-field">
        <label>Password</label>
        <input type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
      </div>
      <div className="form-field">
        <label>
          <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
          Remember me
        </label>
      </div>
      <div className="form-field">
        <p>
          <label className="reset-password-label" onClick={handleResetPassword}>
            Have you lost your password? Click here to reset.
          </label>
        </p>
      </div>
      <div className="form-field">
        {/* Remove the Link component and use a regular button */}
        
        <button className="sign-in-button" onClick={handleSignIn}>
          Sign In
        </button>
        

      </div>
    </div>
  );
};

export default Loginform;
