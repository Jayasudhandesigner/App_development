import React, { useState } from 'react';
import JobCard from './JobCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "../../Assest/css/RemoteJobs.css"; // Use the same CSS file for consistency

const walkinJobData = [
  {
    title: 'Hiring(Only Females)-CAM-Kotak Mahindra',
    company: 'Kotak Mahindra Bank Limited',
    location: 'Bangalore',
    experience: '2 to 7 Yrs',
    positions: 10,
    daysAgo: 1,
    applyLink: 'https://example.com/apply1',
  },
  {
    title: 'Senior Executive',
    company: 'HDFC ERGO General Insurance Company',
    location: 'Kolkata',
    experience: '0 to 3 Yrs',
    positions: 5,
    daysAgo: 1,
    applyLink: 'https://example.com/apply2',
  },
  {
    title: 'Placement Drive',
    company: 'Quastech, hiring for client',
    location: 'Mumbai City',
    experience: '0 Yrs',
    positions: 99,
    daysAgo: 2,
    applyLink: 'https://example.com/apply3',
  }
  // Add more walk-in jobs as needed
];

const WalkinJobs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - itemsPerPage : 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage < walkinJobData.length ? prevIndex + itemsPerPage : prevIndex));
  };

  const currentJobs = walkinJobData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="remote-jobs">
      <h1>Walkin Jobs</h1>
      <div className="job-cards-container">
        <button className="nav-button" onClick={handlePrevClick}><FaChevronLeft /></button>
        {currentJobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
        <button className="nav-button" onClick={handleNextClick}><FaChevronRight /></button>
      </div>
      <div className="view-all">
        <a href="https://example.com/view-all">View All</a>
      </div>
    </div>
  );
};

export default WalkinJobs;
