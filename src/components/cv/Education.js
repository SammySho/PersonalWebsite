import React from 'react';
import '../../styles/cv.css';

const Education = () => {
  return (
    <section className="cv-section">
      <h2 className="cv-section-title">EDUCATION</h2>
      
      <div className="cv-entry">
        <div className="cv-entry-header">
          <div>
            <h3 className="cv-entry-title">Ph.D. in Digital Health and Care</h3>
            <h4 className="cv-entry-subtitle">UNIVERSITY OF BRISTOL</h4>
          </div>
          <span className="cv-entry-date">09/2021 – present</span>
        </div>
        <div className="cv-entry-content">
          <ul>
            <li>Research has involved building a biological and computational model for understanding precision medicine in chemotherapy drugs and ovarian cancer.</li>
            <li>Currently applying computer vision models to understand early-stage brain development through organoids.</li>
            <li>Building software and applications to enable faster data annotation, model generation, and conclusions.</li>
          </ul>
        </div>
      </div>

      <div className="cv-entry">
        <div className="cv-entry-header">
          <div>
            <h3 className="cv-entry-title">MSc in Artificial Intelligence - Average Mark [78%]</h3>
            <h4 className="cv-entry-subtitle">KING'S COLLEGE LONDON</h4>
          </div>
          <span className="cv-entry-date">09/2020 – 09/2021</span>
        </div>
        <div className="cv-entry-content">
          <ul>
            <li> MSc Individual Project - [65%] - Thesis focused on imputation methods for missing data in predicting sepsis diagnosis.</li>
            <li>Artificial Intelligence Planning - [82%] - Experience in a group project conducting many experiments in cloud processing instances.</li>
            <li>Computer Vision - [79%] - Understanding biological and artificial vision systems and how their interpretation systems differ.</li>
            <li>Agents & Multi-Agent Systems - [88%] - Experience in a group project of designing a multi-agent system for the autonomy of marine vessels.</li>
          </ul>
        </div>
      </div>

      <div className="cv-entry">
        <div className="cv-entry-header">
          <div>
            <h3 className="cv-entry-title">BSc in Computer Science - Average Mark [67%]</h3>
            <h4 className="cv-entry-subtitle">UNIVERSITY OF SUSSEX</h4>
          </div>
          <span className="cv-entry-date">09/2017 – 06/2020</span>
        </div>
        <div className="cv-entry-content">
          <ul>
            <li>Neural Networks- [75%]- Learnt the mathematics behind artificial neural networks and clustering methods, as well as how to implement them in Python.</li>
            <li>Computer Science Project- [72%]- Investigated how information sharing in multi-agent model-free reinforcement learning environments can affect training and performance.</li>
            <li>Comparative Programming- [72%]- Explored a variety of languages including Haskell and Prolog.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education; 