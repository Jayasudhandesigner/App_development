// src/components/OptionsSection.js
import React from 'react';
import '../../Assest/css/OptionsSection.css'; // Ensure this path is correct

const OptionsSection = () => {
  return (
    <div className="options-container">
      <div className="option-item">
        <h3>Add Job Listing</h3>
      </div>
      <div className="option-item">
        <h3>Get Hired</h3>
      </div>
      <div className="option-item">
        <h3>Get Consulting</h3>
      </div>
    </div>
  );
};

export default OptionsSection;
