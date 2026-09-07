import React, { useState } from 'react';
import { IoAt } from "react-icons/io5";
import { FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import './Contact.css';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPopup, setShowPopup] = useState(false); // Popup state

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(event.target);
        formData.append("access_key", "988c3c4c-91b3-425b-bfac-09dbde1a2330");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setShowPopup(true); // Show success popup
                event.target.reset();
            } else {
                console.log("Error", data);
                alert(data.message || "Something went wrong!");
            }
        } catch (error) {
            console.error("Error submitting form", error);
            alert("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

  return (
    <section id="contact" className="contact-section">
      {/* Background Ambient Glows */}
      <div className="contact-unique-glow glow-one"></div>
      <div className="contact-unique-glow glow-two"></div>

      <div className="contact-card">
        
        {/* Floating Badge */}
        <div className="contact-floating-badge"><span>💬 Let's Connect</span></div>

        {/* Header */}
        <div className="contact-heading-container">
          <h2 className="contact-main-title">L E T ' S  T A L K</h2>
          <p className="contact-subtitle">Have a project in mind or want to collaborate? Let's build something awesome together!</p>
        </div>

        {/* Contact Content Grid */}
        <div className="contact-content-grid">
          
          {/* Left Side: Info */}
          <div className="contact-info-box">
            <h3 className="info-title">Get in Touch</h3>
            <p className="info-desc">
              I'm currently available for full-time roles, freelance projects, and creative collaborations. Drop a message or reach out via email!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon"><IoAt /></span>
                <div>
                  <span className="contact-label">Email Me</span>
                  <a href="mailto:riyaaskhan23@gmail.com" className="contact-val">riyaaskhan23@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon phone"><FaPhoneAlt /></span>
                <div>
                  <span className="contact-label">Mobile Number</span>
                  <span className="contact-val">+91 9629038439</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required className="form-input" />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required className="form-input" />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message..." rows="4" required className="form-input"></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>

        {/* Success Popup Modal */}
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-box">
              <FaCheckCircle className="popup-icon" />
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I'll get back to you soon via email.</p>
              <button className="popup-close-btn" onClick={() => setShowPopup(false)}>OK</button>
            </div>
          </div>
        )}

        {/* Footer Copyright */}
        <div className="footer-bottom">
          <p>© 2026 Abdul Riyas Khan. Crafted with passion.</p>
        </div>

      </div>
    </section>
  );
}