// components/email-template.jsx
import * as React from 'react';

export const EmailTemplate = ({ name, email, message }) => (
  <div style={{ fontFamily: 'sans-serif', lineHeight: 1.5, color: '#333', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
    <h1 style={{ color: '#007bff' }}>New Contact Form Submission</h1>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Message:</strong>
    </p>
    <p style={{ whiteSpace: 'pre-wrap', borderLeft: '3px solid #ddd', paddingLeft: '15px' }}>
      {message}
    </p>
  </div>
);

export default EmailTemplate;