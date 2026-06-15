'use client';

import React, { useState } from 'react';

function SkillCard({ title, percentage, icon, delayClass }) {
  const [currentPercent, setCurrentPercent] = React.useState(0);
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          
          let start = 0;
          const end = percentage;
          if (end === 0) return;
          
          const duration = 1500; // 1.5s
          const incrementTime = Math.floor(duration / end);
          
          const timer = setInterval(() => {
            start += 1;
            setCurrentPercent(start);
            if (start >= end) {
              clearInterval(timer);
            }
          }, incrementTime);
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [percentage]);

  return (
    <div ref={cardRef} className={`skill-card reveal ${delayClass}`}>
      <div className="skill-icon-wrapper">
        {icon}
      </div>
      <h3>{title}</h3>
      <div className="skill-progress-bar">
        <div 
          className="skill-progress-fill" 
          style={{ '--progress-width': `${percentage}%` }}
        ></div>
      </div>
      <span className="skill-percentage">{currentPercent}%</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [emailSubscribed, setEmailSubscribed] = useState(false);

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

  // Smooth scroll helper
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  // Contact form submission via WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message text
    const text = `Hi Dhruv, I saw your portfolio and would like to connect!\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    
    // WhatsApp URL for +91 8287698998
    const whatsappUrl = `https://wa.me/918287698998?text=${encodedText}`;
    
    // Open in a new tab
    window.open(whatsappUrl, '_blank');
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  // Newsletter subscribe
  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmailSubscribed(true);
    setTimeout(() => {
      setEmailSubscribed(false);
    }, 3000);
  };

  // Client-side Resume generation/download function
  const downloadResume = () => {
    const resumeText = `
DHRUV RANA - PORTFOLIO RESUME
----------------------------------------
Email: dhruvrana199@gmail.com
Phone: +91 8287698998
GitHub: https://github.com/DhruvRana005
LinkedIn: https://www.linkedin.com/in/dhruv-rana-820bb4361

EDUCATION
----------------------------------------
* Bachelor of Computer Applications (BCA)
  Institute of Management and Technology, 2023 - 2026
* Secondary & Sr. Secondary School
  Sardar Patel International School

SKILLS
----------------------------------------
* Frontend: HTML5, CSS3, JavaScript (ES6+), ReactJS, Next.js, Bootstrap 5, Tailwind CSS
* Backend & Databases: Node.js, Express.js, MongoDB
* Tools: Git, GitHub

PROJECTS & WORK EXPERIENCE
----------------------------------------
1. Car-Rental Website (4Wheeler)
   - Premium luxury online car rental platform. Integrated chatbot AI using Noupe.
   - Code: https://github.com/DhruvRana005/CarRental-fullstack
   - Demo: https://car-rental-three-phi.vercel.app/

2. E-Commerce Website
   - Full-stack MERN (MongoDB, Express, React, Node) application featuring user authentication, product catalog, cart management, and payment processing.
   - Code: https://github.com/DhruvRana005/ecommerce-project

3. Password-Manager
   - Secure personal credentials manager utilizing MongoDB, Express, React, and Node.js.
   - Code: https://github.com/DhruvRana005/Password-Manager

4. Netflix Clone
   - Responsive UI replica of Netflix using HTML5, CSS3, Bootstrap, and JavaScript.
   - Code: https://github.com/DhruvRana005/Netflix-Clone
   - Demo: https://dhruvrana005.github.io/Netflix-Clone/

5. To-Do List App
   - Dynamic task list manager built with React.js and Tailwind CSS featuring local storage persistence.
   - Code: https://github.com/DhruvRana005/To-Do-List
   - Demo: https://dhruvrana005.github.io/To-Do-List/

6. Myntra Clone
   - Responsive mobile-first landing page replica with clean CSS structure.
   - Code: https://github.com/DhruvRana005/Myntra-Clone
   - Demo: https://dhruvrana005.github.io/Myntra-Clone/

CERTIFICATIONS
----------------------------------------
* Certified Full-Stack ERP Developer (MongoDB, Express, React, Node.js)
* Fintech Workshop Certificate (Python, Pandas, Scikit-learn, Fraud Detection)
    `;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Dhruv_Rana_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Floating Navigation Header */}
      <nav className="navbar">
        <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="nav-logo">
          <img src="/passport.jpeg" alt="Dhruv Rana" className="nav-logo-img" />
          Dhruv<span>Rana</span>
        </a>
        
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a></li>
          <li><a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a></li>
        </ul>

        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="nav-btn">
          Hire Me
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Hero & About Section */}
      <header id="home" className="hero-wrapper">
        <div className="hero-header-banner animate-fade-in-up">
          <div className="container">
            <h1>About Me</h1>
            <p>Home &gt; About Me</p>
          </div>
        </div>

        <div className="container">
          <div className="about-grid">
            {/* Left Column: Picture frame */}
            <div className="photo-frame-container animate-fade-in-scale delay-200">
              <div className="photo-circle-outer">
                <div className="photo-circle-inner">
                  <img src="/passport.jpeg" alt="Dhruv Rana" className="profile-image" />
                </div>
                <div className="deco-dot-large"></div>
                <div className="deco-dot-small"></div>
              </div>
            </div>

            {/* Right Column: Text & Info */}
            <div className="about-details animate-fade-in-up delay-300">
              <span className="section-tag">About Me</span>
              <h2 className="about-title">
                Get a website that will make a <span className="gradient-text">lasting impression</span> on your audience!!!
              </h2>
              <p className="about-description">
                I am a professional web developer focused on building dynamic, high-performance, and responsive web applications. 
                With my Bachelor of Computer Applications (BCA) degree completed, I combine solid software engineering fundamentals 
                with practical expertise in HTML, CSS, JavaScript, and modern frameworks like React and Node.js to craft 
                delightful user experiences and solve complex technical challenges.
              </p>

              {/* Personal details card */}
              <div className="contact-info-block">
                <div className="info-item">
                  <span className="info-label">Name</span>
                  <span className="info-value">Dhruv Rana</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Phone</span>
                  <span className="info-value">+91 8287698998</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <span className="info-value">dhruvrana199@gmail.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">GitHub</span>
                  <span className="info-value">DhruvRana005</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="btn-primary">
                  Contact me
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
                <button onClick={downloadResume} className="btn-secondary">
                  Download my resume
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-header reveal">
            <h2>My Work <span className="gradient-text">Skills</span></h2>
            <p>
              I leverage a diverse set of languages, frameworks, and developer tools to bring robust full-stack applications to life.
            </p>
          </div>

          <div className="skills-grid">
            <SkillCard 
              title="Next.js" 
              percentage={75} 
              delayClass="delay-100"
              icon={
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="48" fill="#000000" stroke="#ffffff" strokeWidth="2" />
                  <path d="M 35 68 L 35 32 L 40 32 L 63 60 L 63 32 L 67 32 L 67 68 L 62 68 L 39 39 L 39 68 Z" fill="#ffffff" />
                  <path d="M 60 52 L 69 64 L 64 68 L 56 57 Z" fill="#ffffff" />
                </svg>
              }
            />

            <SkillCard 
              title="React.js" 
              percentage={80} 
              delayClass="delay-200"
              icon={
                <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="0" cy="0" r="2.05" fill="#58c4dc"/>
                  <g stroke="#58c4dc" strokeWidth="1.2" fill="none">
                    <ellipse rx="11" ry="4.2"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                  </g>
                </svg>
              }
            />

            <SkillCard 
              title="Node.js" 
              percentage={70} 
              delayClass="delay-300"
              icon={
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 50 10 L 85 30 L 85 70 L 50 90 L 15 70 L 15 30 Z" fill="#339933" />
                  <text x="50" y="58" fill="#ffffff" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="24" textAnchor="middle">node</text>
                </svg>
              }
            />

            <SkillCard 
              title="MongoDB" 
              percentage={88} 
              delayClass="delay-400"
              icon={
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 50 10 C 32 30 32 65 50 90 C 68 65 68 30 50 10 Z" fill="#13aa52" />
                  <path d="M 50 10 C 41 30 41 65 50 90 Z" fill="#439945" />
                  <path d="M 50 10 L 50 90" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              }
            />

            <SkillCard 
              title="JavaScript" 
              percentage={75} 
              delayClass="delay-100"
              icon={
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="#f7df1e" rx="10" />
                  <text x="88" y="85" fill="#000000" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="46" textAnchor="end">JS</text>
                </svg>
              }
            />

            <SkillCard 
              title="Express.js" 
              percentage={75} 
              delayClass="delay-200"
              icon={
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="#303030" rx="15" />
                  <text x="50" y="58" fill="#fd6e4a" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="22" textAnchor="middle">Express</text>
                </svg>
              }
            />

            <SkillCard 
              title="HTML5 & CSS3" 
              percentage={95} 
              delayClass="delay-300"
              icon={
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 15 10 L 85 10 L 78 80 L 50 92 L 22 80 Z" fill="#e34f26" />
                  <path d="M 50 10 L 85 10 L 78 80 L 50 92 Z" fill="#f06529" />
                  <text x="50" y="58" fill="#ffffff" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="24" textAnchor="middle">HTML5</text>
                </svg>
              }
            />

            <SkillCard 
              title="Tailwind & Bootstrap" 
              percentage={92} 
              delayClass="delay-400"
              icon={
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="#38bdf8" rx="15" />
                  <text x="50" y="58" fill="#ffffff" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="20" textAnchor="middle">CSS Libs</text>
                </svg>
              }
            />

            <SkillCard 
              title="Git & GitHub" 
              percentage={90} 
              delayClass="delay-500"
              icon={
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="#f05032" rx="15" />
                  <path d="M 50 20 L 80 50 L 50 80 L 20 50 Z" fill="none" stroke="#ffffff" strokeWidth="6" />
                  <circle cx="50" cy="35" r="7" fill="#ffffff" />
                  <circle cx="50" cy="65" r="7" fill="#ffffff" />
                  <circle cx="65" cy="50" r="7" fill="#ffffff" />
                  <path d="M 50 35 L 50 65 M 50 50 L 65 50" stroke="#ffffff" strokeWidth="5" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Services & Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header reveal">
            <h2>My Featured <span className="gradient-text">Projects</span></h2>
            <p>
              Explore a handpicked showcase of clones, interactive applications, and full-stack solutions representing my capabilities.
            </p>
          </div>

          <div className="projects-grid">
            {/* Project 1: Car Rental */}
            <div className="project-card reveal delay-100">
              <span className="project-tag">Full-Stack AI</span>
              <div className="project-image-container">
                <img src="/Lamborghini-Finance-edited.webp" alt="Car-Rental Website" className="project-image" />
              </div>
              <div className="project-content">
                <h3>Car-Rental (4Wheeler)</h3>
                <p>
                  A premium luxury online car rental platform offering flexible vehicle options. Features AI chatbot integration powered by Noupe.
                </p>
                <div className="project-actions">
                  <a href="https://github.com/DhruvRana005/CarRental-fullstack" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                    GitHub Code
                  </a>
                  <a href="https://car-rental-three-phi.vercel.app/" target="_blank" rel="noopener noreferrer" className="arrow-circle-btn" aria-label="Live Demo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: E-Commerce */}
            <div className="project-card reveal delay-200">
              <span className="project-tag">MERN Stack</span>
              <div className="project-image-container">
                <img src="/epic.png" alt="E-Commerce Website" className="project-image" />
              </div>
              <div className="project-content">
                <h3>E-Commerce Platform</h3>
                <p>
                  Full-stack e-commerce system using MongoDB, Express, React, and Node. Supports JWT auth, product catalog, shopping cart, and admin panels.
                </p>
                <div className="project-actions">
                  <a href="https://github.com/DhruvRana005/ecommerce-project" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                    GitHub Code
                  </a>
                  <span className="arrow-circle-btn" style={{ opacity: 0.5, cursor: 'not-allowed' }} title="Local MongoDB Database only">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Project 3: Password Manager */}
            <div className="project-card reveal delay-300">
              <span className="project-tag">Full-Stack</span>
              <div className="project-image-container">
                <img src="/pass-manager.webp" alt="Password Manager" className="project-image" />
              </div>
              <div className="project-content">
                <h3>Password Manager</h3>
                <p>
                  MERN-stack application built for local storage and encryption of credentials. Styled with Tailwind CSS and backed by Express.
                </p>
                <div className="project-actions">
                  <a href="https://github.com/DhruvRana005/Password-Manager" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                    GitHub Code
                  </a>
                  <span className="arrow-circle-btn" style={{ opacity: 0.5, cursor: 'not-allowed' }} title="Local Database only">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Project 4: Netflix Clone */}
            <div className="project-card reveal delay-100">
              <span className="project-tag">UI / Responsive</span>
              <div className="project-image-container">
                <img src="/netflix.webp" alt="Netflix Clone" className="project-image" />
              </div>
              <div className="project-content">
                <h3>Netflix Clone</h3>
                <p>
                  High-fidelity Netflix homepage replica built using HTML, CSS, Bootstrap, and vanilla JS. Implements video modal overlays and sliders.
                </p>
                <div className="project-actions">
                  <a href="https://github.com/DhruvRana005/Netflix-Clone.git" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                    GitHub Code
                  </a>
                  <a href="https://dhruvrana005.github.io/Netflix-Clone/" target="_blank" rel="noopener noreferrer" className="arrow-circle-btn" aria-label="Live Demo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 5: To Do List */}
            <div className="project-card reveal delay-200">
              <span className="project-tag">React / LocalStorage</span>
              <div className="project-image-container">
                <img src="/to do.webp" alt="To Do List" className="project-image" />
              </div>
              <div className="project-content">
                <h3>React To-Do Manager</h3>
                <p>
                  A neat tasks organizer app using React, Tailwind CSS, and local storage. Supports editing, deleting, categorizing, and sorting.
                </p>
                <div className="project-actions">
                  <a href="https://github.com/DhruvRana005/To-Do-List" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                    GitHub Code
                  </a>
                  <a href="https://dhruvrana005.github.io/To-Do-List/" target="_blank" rel="noopener noreferrer" className="arrow-circle-btn" aria-label="Live Demo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 6: Myntra Clone */}
            <div className="project-card reveal delay-300">
              <span className="project-tag">HTML5 & CSS3</span>
              <div className="project-image-container">
                <img src="/Myntra.avif" alt="Myntra Clone" className="project-image" />
              </div>
              <div className="project-content">
                <h3>Myntra Front-End Replica</h3>
                <p>
                  Mobile-first product grid front-end responsive replica of Myntra page. Uses native CSS layouts and layouts transition.
                </p>
                <div className="project-actions">
                  <a href="https://github.com/DhruvRana005/Myntra-Clone.git" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                    GitHub Code
                  </a>
                  <a href="https://dhruvrana005.github.io/Myntra-Clone/" target="_blank" rel="noopener noreferrer" className="arrow-circle-btn" aria-label="Live Demo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="see-all-container">
            <a href="https://github.com/DhruvRana005" target="_blank" rel="noopener noreferrer" className="btn-primary">
              See All on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
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

      {/* Footer */}
      <footer className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand column */}
            <div className="footer-brand">
              <h2>DR<span>Dhruv</span></h2>
              <p>
                Crafting robust web experiences using modern full stack javascript architectures. Specializing in high-performance frontend designs.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="footer-col">
              <h3>Navigation</h3>
              <ul className="footer-links">
                <li><a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a></li>
                <li><a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Skills</a></li>
                <li><a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a></li>
              </ul>
            </div>

            {/* Contacts Column */}
            <div className="footer-col">
              <h3>Contact Info</h3>
              <ul className="footer-contact-list">
                <li>
                  <strong>Phone</strong>
                  <span>+91 8287698998</span>
                </li>
                <li>
                  <strong>Email</strong>
                  <a href="mailto:dhruvrana199@gmail.com">dhruvrana199@gmail.com</a>
                </li>
                <li>
                  <strong>College</strong>
                  <span>IMT (MDU), Haryana</span>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="footer-col footer-newsletter">
              <h3>Get the Latest Info</h3>
              <p>Subscribe to get updates on my newest projects, blogs and design releases.</p>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  placeholder={emailSubscribed ? "Subscribed Successfully!" : "Your email address"}
                  disabled={emailSubscribed}
                  required 
                />
                <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom bar */}
      <footer className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-flex">
            <p>© {new Date().getFullYear()} Dhruv Rana. All Rights Reserved.</p>
            
            <div className="footer-socials">
              <a href="https://github.com/DhruvRana005" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/dhruv-rana-820bb4361" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>

            <div className="footer-bottom-links">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
