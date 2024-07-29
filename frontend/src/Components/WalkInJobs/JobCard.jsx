import React, { useState } from 'react';
import { FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import "../../Assest/css/JobCard.css";

const JobCard = ({ job }) => {
  const [isInterested, setIsInterested] = useState(true);

  const handleApplyClick = () => {
    if (isInterested) {
      window.location.href = job.applyLink;
    }
  };

  const handleNotInterestedClick = () => {
    setIsInterested(false);
  };

  return (
    <div className={`job-card ${!isInterested ? 'not-interested' : ''}`}>
      <div className="job-card-content">
        <div className="job-card-header">
          <span className="job-badge">Hot</span>
          <span className="job-badge">Walk-in</span>
          <span className="job-days-ago">{job.daysAgo} days ago</span>
        </div>
        <h2 className="job-title">{job.title}</h2>
        <p className="job-company">{job.company}</p>
        <div className="job-location">
          <FaMapMarkerAlt /> {job.location}
        </div>
        <div className="job-experience">
          <FaBriefcase /> {job.experience}
        </div>
        <p className="job-positions">{job.positions} Positions</p>
        <div className="job-card-footer">
          <button className="not-interested-button" onClick={handleNotInterestedClick}>ignore</button>
          <button className="apply-button" onClick={handleApplyClick} disabled={!isInterested}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
