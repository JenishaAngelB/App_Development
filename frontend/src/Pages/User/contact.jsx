import React from 'react';
import Navbar from '../../Components/navbar';
import Footer from '../../Components/footer'; // Import the Footer component
import '../../Assets/CSS/contact.css';

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-description">
          We are here to assist you with any questions or concerns you may have. Reach out to us through any of the methods below.
        </p>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-input"
          />
          <textarea
            placeholder="Your Address"
            className="contact-textarea"
          />
          <input
            type="text"
            placeholder="Your Number"
            className="contact-input"
          />
          <textarea
            placeholder="Your Message"
            className="contact-textarea"
          />
          <button className="contact-button">Submit</button>
        </div>
        <div className="contact-details">
          <h2>Our Contact Information</h2>
          <p>
            <strong>Email:</strong> <a href="mailto:support@transpomaster.com">support@transpomaster.com</a>
          </p>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p>
            <strong>Address:</strong> 123 Logistics Way, Transport City, TS 12345
          </p>
        </div>
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>How can I track my shipment?</li>
            <li>What are your operating hours?</li>
            <li>How do I change my delivery address?</li>
          </ul>
        </div>
        <div className="customer-support">
          <h2>Customer Support</h2>
          <p>If you have any issues or inquiries, please contact our 24/7 support team at <a href="mailto:support@transpomaster.com">support@transpomaster.com</a> or call us at (123) 456-7890.</p>
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

export default Contact;