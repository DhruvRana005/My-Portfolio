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

export default function SkillsPage() {
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

  return (
    <main className="hero-wrapper">
      <div className="hero-header-banner animate-fade-in-up">
        <div className="container">
          <h1>My Skills</h1>
          <p>Home &gt; Skills</p>
        </div>
      </div>

      <section className="skills-section" style={{ backgroundColor: 'transparent' }}>
        <div className="container">
          <div className="section-header reveal">
            <h2>Technical <span className="gradient-text">Proficiencies</span></h2>
            <p>
              A deeper look into the technologies and frameworks I use to build clean, functional, and responsive applications.
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
    </main>
  );
}
