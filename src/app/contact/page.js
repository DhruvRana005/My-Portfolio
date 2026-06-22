'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.05 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Dhruv, I saw your portfolio and would like to connect!\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/918287698998?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <main className="hero-wrapper">
      <div className="hero-header-banner animate-fade-in-up">
        <div className="container">
          <h1>Contact Me</h1>
          <p>Home &gt; Contact</p>
        </div>
      </div>

      <section className="contact-section" style={{ backgroundColor: 'transparent' }}>
        <div className="container">
          <div className="contact-layout">
            {/* Left detail card */}
            <div className="contact-detail-card reveal">
              <div className="contact-header">
                <span className="section-tag">Get in Touch</span>
                <h2>Let&apos;s Design Something Great!</h2>
                <p>
                  Have a web development project, internship opportunity, or workshop suggestion? Reach out and let&apos;s discuss.
                </p>
              </div>

              <div className="contact-list">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+91 8287698998</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <a href="mailto:dhruvrana199@gmail.com">dhruvrana199@gmail.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Ballabgarh, Faridabad, Haryana - 121004</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right form card */}
            <form className="contact-form reveal delay-200" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Description / Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Enter details about your project..." 
                  required 
                />
              </div>

              <button type="submit" className="submit-btn">
                {formSubmitted ? 'Message Sent Successfully!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
