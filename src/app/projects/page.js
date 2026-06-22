'use client';

import React from 'react';

export default function ProjectsPage() {
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
          <h1>My Projects</h1>
          <p>Home &gt; Projects</p>
        </div>
      </div>

      <section className="projects-section" style={{ backgroundColor: 'transparent' }}>
        <div className="container">
          <div className="section-header reveal">
            <h2>Featured <span className="gradient-text">Creations</span></h2>
            <p>
              An in-depth look at my coding achievements, replica builds, and custom full-stack solutions.
            </p>
          </div>

          <div className="projects-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {/* Project 1: Car Rental */}
            <div className="project-card reveal delay-100">
              <span className="project-tag">Full-Stack AI</span>
              <div className="project-image-container" style={{ height: '260px' }}>
                <img src="/car_rental_project.png" alt="Car-Rental Website" className="project-image" />
              </div>
              <div className="project-content">
                <h3>Car-Rental (4Wheeler)</h3>
                <p>
                  A premium luxury online car rental platform offering flexible vehicle options. Features AI chatbot integration powered by Noupe, enabling client interaction, luxury car catalog browsing, reservation flows, and modern admin configuration panels.
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
              <div className="project-image-container" style={{ height: '260px' }}>
                <img src="/lms_project.png" alt="LMS" className="project-image" />
              </div>
              <div className="project-content">
                <h3>Learning Management System</h3>
                <p>
                  A complete Learning Management System built using Next.js for student and teacher collaboration. Designed with advanced course progress tracking, interactive quiz engines, and custom analytics dashboards to monitor education delivery.
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
              <div className="project-image-container" style={{ height: '260px' }}>
                <img src="/home_decor_project.png" alt="Home Decoration" className="project-image" />
              </div>
              <div className="project-content">
                <h3>Home Decoration - Interior Design</h3>
                <p>
                  An interactive interior design catalog website developed with Next.js and fully-responsive 3D Scroll Trigger animations. Showcases high-end premium modern furniture items with dynamic page transitions and interactive elements.
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

            {/* Project 4: Royalfinity Academy */}
            <div className="project-card reveal delay-100">
              <span className="project-tag">Web Development</span>
              <div className="project-image-container" style={{ height: '260px' }}>
                <img src="/royalfinity_project.png" alt="Royalfinity Academy" className="project-image" />
              </div>
              <div className="project-content">
                <h3>Royalfinity Academy</h3>
                <p>
                  A premium educational academy platform designed with beautiful layout configurations, and high-performance 3D Scroll Trigger animation effects. Includes learning path flows, program registrations, and custom styling filters.
                </p>
                <div className="project-actions">
                  <a href="https://github.com/DhruvRana005/" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                    GitHub Code
                  </a>
                  <a href="https://royalfiniteacademy.vercel.app/" target="_blank" rel="noopener noreferrer" className="arrow-circle-btn" aria-label="Live Demo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Inline styles override for 2-column project list on large screen responsive behavior */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
