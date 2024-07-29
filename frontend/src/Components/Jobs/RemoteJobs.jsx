import React, { useState } from 'react';
import JobCard from './JobCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../../Assest/css/RemoteJobs.css';

// Define your job data here
const jobData = [
  {
    title: 'Data Entry Operator, Work From Home Part Time',
    company: 'Matrixx India',
    location: 'Bangalore',
    moreLocations: 9,
    experience: '0 to 4 Yrs',
    positions: 20,
    daysAgo: 0,
    applyLink: 'https://example.com/apply1',
  },
  {
    title: 'Data Entry Clerk',
    company: 'V-tech data outsourcing',
    location: 'Bangalore',
    moreLocations: 9,
    experience: '0 to 1 Yr',
    positions: 36,
    daysAgo: 0,
    applyLink: 'https://example.com/apply2',
  },
  // Add more job entries as needed
];

const RemoteJobs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - itemsPerPage : 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage < jobData.length ? prevIndex + itemsPerPage : prevIndex));
  };

  const currentJobs = jobData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="remote-jobs">
      <h1>Remote Jobs</h1>
      <div className="job-cards-container">
        <button className="nav-button" onClick={handlePrevClick}><FaChevronLeft /></button>
        {currentJobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
        <button className="nav-button" onClick={handleNextClick}><FaChevronRight /></button>
      </div>
    </div>
  );
};

export default RemoteJobs;
