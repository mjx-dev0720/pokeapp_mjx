import React, { useState } from 'react';
import './FeedbackModal.css';

const FeedbackModal = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSent(false);
    // Use Formspree for simple email forwarding
    const formData = new FormData();
    formData.append('email', email);
    formData.append('message', message);
    try {
      const res = await fetch("https://formspree.io/f/xkgvygke", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSent(true);
        setEmail('');
        setMessage('');
      } else {
        setError('Failed to send feedback.');
      }
    } catch {
      setError('Failed to send feedback.');
    }
  };

  if (!open) return null;
  return (
    <div className="feedback-modal-backdrop">
      <div className="feedback-modal">
        <button className="feedback-close" onClick={onClose}>&times;</button>
        <h3>We value your feedback!</h3>
        {sent ? (
          <div className="feedback-success">Thank you for your feedback!</div>
        ) : (
          <form onSubmit={handleSubmit} className="feedback-form">
            <input
              type="email"
              placeholder="Your email (optional)"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Your feedback..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />
            <button type="submit">Send Feedback</button>
            {error && <div className="feedback-error">{error}</div>}
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackModal;
