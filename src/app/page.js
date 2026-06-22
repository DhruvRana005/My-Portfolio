'use client';

import React, { useState } from 'react';
import Link from 'next/link';

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

2. Learning Management System
   - Build a Complete LMS using NEXT.JS for Students and Teachers.
   - Code: https://github.com/DhruvRana005/LMS---Learning-Management-System
   - Demo: https://lms-learning-management-system-69sgzkqrt-dhruvrana005s-projects.vercel.app/

3. Home Decoration - Interior Design
   - Developed a Interactive NEXT.JS website with 3D Scroll Trigger Animations.
   - Code: https://github.com/DhruvRana005/Home-decor
   - Demo: https://github.com/DhruvRana005/Home-decor

4. Royalfinity Academy
   - Developed and Maintained the Academy Website with Fully 3D Scroll Trigger animtion Effects.
   - Code: https://github.com/DhruvRana005/
   - Demo: https://royalfiniteacademy.vercel.app/

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
                <Link href="/contact" className="btn-primary">
                  Contact me
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </Link>
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

      {/* Skills Section Summary */}
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-header reveal">
            <h2>My Work <span className="gradient-text">Skills</span></h2>
            <p>
              I leverage a diverse set of languages, frameworks, and developer tools to bring robust full-stack applications to life. Here are a few of my primary skills.
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
          </div>

          <div className="see-all-container">
            <Link href="/skills" className="btn-primary">
              View All Skills
            </Link>
          </div>
        </div>
      </section>

      {/* Experience & Education Section Summary */}
      <section id="experience" className="skills-section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header reveal">
            <h2>Experience & <span className="gradient-text">Education</span></h2>
            <p>
              My professional journey and academic background at a glance.
            </p>
          </div>

          <div className="timeline-container" style={{ marginTop: '30px' }}>
            <div className="timeline-section reveal delay-100">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass-card">
                    <span className="timeline-date">March 2026 &ndash; Present</span>
                    <h4 className="timeline-role">Web Developer</h4>
                    <h5 className="timeline-company gradient-text">Royalfinity Technologies</h5>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass-card">
                    <span className="timeline-date">2023 &ndash; 2026</span>
                    <h4 className="timeline-role">Bachelor of Computer Applications (BCA)</h4>
                    <h5 className="timeline-company gradient-text">Maharishi Dayanand University</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="see-all-container" style={{ marginTop: '40px' }}>
            <Link href="/experience" className="btn-primary">
              View Full Details
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section Summary (3 Projects Only) */}
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
                <img src="/car_rental_project.png" alt="Car-Rental Website" className="project-image" />
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

            {/* Project 2: Learning Management System */}
            <div className="project-card reveal delay-200">
              <span className="project-tag">Next.js / Full-Stack</span>
              <div className="project-image-container">
                <img src="/lms_project.png" alt="LMS" className="project-image" />
              </div>
              <div className="project-content">
                <h3>Learning Management System</h3>
                <p>
                  A complete Learning Management System built using Next.js for student and teacher collaboration, course progress tracking, and dashboards.
                </p>
                <div className="project-actions">
                  <a href="https://github.com/DhruvRana005/LMS---Learning-Management-System" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                    GitHub Code
                  </a>
                  <a href="https://lms-learning-management-system-69sgzkqrt-dhruvrana005s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="arrow-circle-btn" aria-label="Live Demo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3: Home Decoration */}
            <div className="project-card reveal delay-300">
              <span className="project-tag">Next.js / 3D Animation</span>
              <div className="project-image-container">
                <img src="/home_decor_project.png" alt="Home Decoration" className="project-image" />
              </div>
              <div className="project-content">
                <h3>Home Decoration - Interior</h3>
                <p>
                  An interactive interior design catalog website developed with Next.js and fully-responsive 3D Scroll Trigger animations.
                </p>
                <div className="project-actions">
                  <a href="https://github.com/DhruvRana005/Home-decor" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                    GitHub Code
                  </a>
                  <a href="https://github.com/DhruvRana005/Home-decor" target="_blank" rel="noopener noreferrer" className="arrow-circle-btn" aria-label="Live Demo">
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
            <Link href="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section Summary */}
      <section id="contact-cta" className="skills-section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="section-header reveal" style={{ marginBottom: '30px' }}>
            <h2>Let&apos;s Work <span className="gradient-text">Together</span></h2>
            <p>
              Got a project, idea, or development role? Let&apos;s build high-performance web applications that make a difference.
            </p>
          </div>
          <div style={{ textAlign: 'center' }} className="reveal delay-100">
            <Link href="/contact" className="btn-primary" style={{ padding: '16px 40px', fontSize: '16px' }}>
              Get In Touch &amp; Connect
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
