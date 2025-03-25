import React from "react";
import "./ContactUs.css";

const ContactUs: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="header-banner">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>📞 Contact Us</h2>
          <p>📧 <a href="mailto:redpccomputer@gmail.com">redpccomputer@gmail.com</a></p>
          <p>💬 <a href="#">RED PC PM</a></p>

          <h3>Hours of Operation</h3>
          <p>Our team is available to assist you during the following hours:</p>
          <p><strong>OPEN DAILY:</strong> 8:00 AM - 6:00 PM</p>
        </div>

        <div className="contact-map">
          <h2>Google Maps</h2>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?..."
            width="100%"
            height="300"
            style={{ border: "none", borderRadius: "8px" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;