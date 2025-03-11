import React from 'react';
import '../../styles/cv.css';

const Experience = () => {
  return (
    <section className="cv-section">
      <h2 className="cv-section-title">EXPERIENCE</h2>

      <div className="cv-entry">
        <div className="cv-entry-header">
          <div>
            <h3 className="cv-entry-title">Creator Fund Fellowship</h3>
          </div>
          <span className="cv-entry-date">09/2023 – 09/2024</span>
        </div>
        <div className="cv-entry-content">
          <ul>
            <li>The largest pre-seed deep-tech VC fund in Europe. Key roles included performing due diligence, writing reports for investment committees, and sourcing new companies.</li>
          </ul>
        </div>
      </div>

      <div className="cv-entry">
        <div className="cv-entry-header">
          <div>
            <h3 className="cv-entry-title">Tutoring & Teaching</h3>
          </div>
          <span className="cv-entry-date">03/2021 – present</span>
        </div>
        <div className="cv-entry-content">
          <ul>
            <li>Over 400 hours of experience teaching computer science largely focused on A-levels and IGCSE. Comprehensive understanding of the theoretical fundamentals, broad programming language experience, and how to communicate ideas effectively to varying abilities.</li>
          </ul>
        </div>
      </div>

      <div className="cv-entry">
        <div className="cv-entry-header">
          <div>
            <h3 className="cv-entry-title">Firemind.</h3>
            <h4 className="cv-entry-subtitle">Engineer</h4>
          </div>
          <span className="cv-entry-date">08/2019 – 09/2019</span>
        </div>
        <div className="cv-entry-content">
          <ul>
            <li>Primary responsibilities included creating computer vision solutions for customers through developing marker recognition systems to map space within a scene, for assessing flow of crowds in queuing systems.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience; 