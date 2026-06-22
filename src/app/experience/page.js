import React from 'react';

export const metadata = {
  title: 'Experience & Education | Dhruv Rana',
  description: 'Professional experience and academic background of Dhruv Rana, Web Developer.',
};

export default function ExperiencePage() {
  return (
    <main className="container page-wrapper">
      <div className="section-header text-center animate-fade-in-up">
        <span className="section-tag">My Journey</span>
        <h2>Experience & <span className="gradient-text">Education</span></h2>
        <p className="section-subtitle">My professional career path and academic background.</p>
      </div>

      <div className="timeline-container">
        {/* Experience Section */}
        <div className="timeline-section animate-fade-in-up delay-100">
          <h3 className="timeline-title">Professional Experience</h3>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <span className="timeline-date">March 2026 &ndash; Present</span>
                <h4 className="timeline-role">Web Developer</h4>
                <h5 className="timeline-company gradient-text">Royalfinity Technologies</h5>
                <ul className="timeline-list">
                  <li>Developed and managed multiple responsive websites from scratch, ensuring performance, scalability, and seamless user experience.</li>
                  <li>Built and maintained custom web solutions, collaborating with clients to deliver high-quality projects on time.</li>
                  <li>Managed end-to-end website development, from design implementation to deployment and maintenance.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="timeline-section animate-fade-in-up delay-200">
          <h3 className="timeline-title">Education</h3>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <span className="timeline-date">2023 &ndash; 2026</span>
                <h4 className="timeline-role">Bachelor of Computer Applications (BCA)</h4>
                <h5 className="timeline-company gradient-text">Maharishi Dayanand University</h5>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <span className="timeline-date">2023</span>
                <h4 className="timeline-role">Sr Secondary School</h4>
                <h5 className="timeline-company gradient-text">Sardar Patel International School</h5>
                <p className="timeline-desc">From HBSE Board</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <span className="timeline-date">2021</span>
                <h4 className="timeline-role">Secondary School</h4>
                <h5 className="timeline-company gradient-text">Sardar Patel International School</h5>
                <p className="timeline-desc">From HBSE Board</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
