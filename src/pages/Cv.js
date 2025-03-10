import React from 'react';
import '../styles/cv.css';
import Education from '../components/cv/Education';
import Experience from '../components/cv/Experience';
import Skills from '../components/cv/Skills';
import Extracurricular from '../components/cv/Extracurricular';

const Cv = () => {
  return (
    <div className="cv-container">
      <Education />
      <Experience />
      <Skills />
      <Extracurricular />
    </div>
  );
};

export default Cv;
