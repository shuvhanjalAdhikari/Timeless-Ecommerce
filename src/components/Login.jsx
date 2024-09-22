import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/login-bg.png"; // Ensure the correct path to the logo image

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to handle error messages

  // Validation criteria
  const validateUsername = (username) => {
    // Example: username must contain at least one capital letter
    const usernamePattern = /[A-Z]/;
    return usernamePattern.test(username);
  };

  const validatePassword = (password) => {
    // Example: password must contain at least one capital letter and one number
    const passwordPattern = /(?=.*[A-Z])(?=.*\d)/;
    return passwordPattern.test(password);
  };

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate credentials
    if (validateUsername(username) && validatePassword(password)) {
      console.log(username)
      console.log(password)
      // If valid, navigate to home page
      navigate('/');
    } else {
      // If invalid, set error message
      setError("Username must include a capital letter. Password must include a capital letter and a number.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-title">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-field"
            placeholder="Username or Email Address"
            onChange={changeUsername}
            value={username}
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            onChange={changePassword}
            value={password}
          />
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button type="submit" className="submit-button">
            Log In
          </button>
          {error && <p className="error-message">{error}</p>} {/* Display error message */}
        </form>
        <a href="#" className="forgot-password">
          Forgot your password?
        </a>
        <a href="/" className="back-link">
          SignIn
        </a>
      </div>
    </div>
  );
};

export default Login;
