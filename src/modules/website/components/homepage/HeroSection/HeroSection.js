// HeroSection.js

import React from 'react';
import HeroImage from '../../../../../assets/background_image.png';

function HeroSection() {
  return (
    <div className="hero-section relative h-590/2 flex items-center justify-center overflow-hidden">
      <img
        src={HeroImage}
        alt="Hero"
        className="mx-auto max-w-85 w-full object-cover rounded-3xl"
        style={{ 
          borderRadius: '100px',
          height: '400px', // adjust height as needed
          width: '90%',    // adjust width as needed
          padding: '40px'  // adjust padding as needed
        }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <h1 className="text-2xl mb-2 font-semibold">SAP University<br />Competence Center</h1>
      </div>
    </div>
  );
}

export default HeroSection;
