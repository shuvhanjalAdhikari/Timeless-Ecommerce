import React from "react";
4;
import logo from "../assets/banner.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setmessage] = useState("");
  const [error, setError] = useState(""); // State to handle error messages

  // Validation criteria
//   const validateUsername = (username) => {
//     // Example: username must contain at least one capital letter
//     const usernamePattern = /[A-Z]/;
//     return usernamePattern.test(username);
//   };
  const validateMail = (mail) => {
    // A simple regex pattern for basic email validation
    const mailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return mailPattern.test(mail);
  };

//   const validatePassword = (password) => {
//     // Example: password must contain at least one capital letter and one number
//     const passwordPattern = /(?=.*[A-Z])(?=.*\d)/;
//     return passwordPattern.test(password);
//   };

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeMail = (e) => {
    setMail(e.target.value);
  };

  const ChangeMessage = (e) => {
    setmessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate credentials
    if (
      
      validateMail(mail) 
      
    ) {
      console.log("successfully Submitted")
      // If valid, navigate to home page
      navigate("/");
    } else {
      // If invalid, set error message
      setError(
        "Fill the form correctly."
      );
    }
  };

  return (
    <div className="background-image">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">CONTACT US</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="input-field"
              placeholder="Enter your Name"
              onChange={changeName}
              value={name}
            />
    
            <input
              type="mail"
              className="input-field"
              placeholder="Enter your Email Address"
              onChange={changeMail}
              value={mail}
            />
            <input
              type="text"
              className="input-field"
              placeholder="Enter your Message"
              onChange={ChangeMessage}
              value={message}
            />
           
            <button type="submit" className="submit-button">
              Submit
            </button>
            {error && <p className="error-message">{error}</p>}{" "}
            {/* Display error message */}
          </form>
          <a href="/" className="back-link">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>  
    
  );
};
export default Contact;
