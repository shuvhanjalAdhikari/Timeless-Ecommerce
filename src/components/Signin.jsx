import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/login-bg.png"; // Ensure the correct path to the logo image

const Signin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to handle error messages

  // Validation criteria
  const validateUsername = (username) => {
    // Example: username must contain at least one capital letter
    const usernamePattern = /[A-Z]/;
    return usernamePattern.test(username);
  };
  const validateMail = (mail) => {
    // A simple regex pattern for basic email validation
    const mailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return mailPattern.test(mail);
  };

  const validatePassword = (password) => {
    // Example: password must contain at least one capital letter and one number
    const passwordPattern = /(?=.*[A-Z])(?=.*\d)/;
    return passwordPattern.test(password);
  };

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };
  const changeMail = (e) => {
    setMail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate credentials
    if (validateUsername(username) && validateMail(mail) && validatePassword(password)) {
      console.log(username)
      console.log(password)
      console.log(mail)
      // If valid, navigate to home page
      navigate('/login');
    } else {
      // If invalid, set error message
      setError("Email not Found/Username must include a capital letter/Password must include a capital letter and a number.");
    }
  };

  return (
    <div className="signin-container ">
      <div className="signin-content  ">
        <h2 className="signin-title ">TIMELESS</h2>
        <form className="" onSubmit={handleSubmit}>

         <input
            type="mail"
            className="input-field"
            placeholder="Email Address"
            onChange={changeMail}
            value={mail}
          />    
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
          <input
            type="date"
            className="input-field"
            placeholder="YYYY-MM-DD"
            onChange={changePassword}
            value={password}
          />
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button type="submit" className="submit-button">
            Register
          </button>
          {error && <p className="error-message">{error}</p>} {/* Display error message */}
        </form>
    
        <a href="/" className="back-link">
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default Signin;
