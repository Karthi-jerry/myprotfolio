import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>I'm currently open to new opportunities and collaborations.</p>
      
      <div className="contact-details">
        <p><strong>Email:</strong> karthikutty1040746@gmail.com</p>
        <p><strong>Location:</strong> Tamil Nadu, India</p>
        <p>
          <strong>GitHub:</strong> <a href="https://github.com/karthi-jerry" target="_blank" rel="noreferrer">github.com/karthi-jerry</a>
        </p>
        <p>
          <strong>LinkedIn:</strong> <a href="linkedin.com/in/karthickmuthupandi" target="_blank" rel="noreferrer">linkedin.com/in/karthickmuthupandi</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
