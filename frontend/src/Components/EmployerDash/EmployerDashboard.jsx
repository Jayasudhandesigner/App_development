import React, { useState } from 'react';
import '../../Assest/css/EmployerDashboard.css';
import TopBar from '../TopBar/TopBar';
import BurgerBar from '../burgerBar/BurgerBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Footer from '../Footer/Footer';

function EmployerDash({ adminName }) {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobType, setJobType] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const [ctc, setCtc] = useState('');
  const [jobs, setJobs] = useState([
    {
      title: 'Frontend Developer',
      description: 'Develop user-facing features using React.',
      type: 'remote',
      experience: 'mid',
      location: 'Bangalore',
      ctc: '₹10,00,000 - ₹15,00,000'
    },
    {
      title: 'Backend Developer',
      description: 'Build and maintain server-side applications.',
      type: 'onsite',
      experience: 'senior',
      location: 'Pune',
      ctc: '₹15,00,000 - ₹20,00,000'
    }
  ]);
  const [date, setDate] = useState(new Date());
  const [lockedDates, setLockedDates] = useState([new Date('2024-08-05'), new Date('2024-08-10')]);

  const handlePostJob = (e) => {
    e.preventDefault();
    const newJob = {
      title: jobTitle,
      description: jobDescription,
      type: jobType,
      experience,
      location,
      ctc
    };
    setJobs([...jobs, newJob]);
    setJobTitle('');
    setJobDescription('');
    setJobType('');
    setExperience('');
    setLocation('');
    setCtc('');
  };

  const handleViewApplications = () => {
    alert('No applications available');
  };

  const handleLockDate = () => {
    if (!lockedDates.some(d => d.toDateString() === date.toDateString())) {
      setLockedDates([...lockedDates, date]);
      alert('Interview date locked for ' + date.toDateString());
    } else {
      alert('Date already locked.');
    }
  };

  const handleDeleteJob = (index) => {
    const updatedJobs = jobs.filter((job, i) => i !== index);
    setJobs(updatedJobs);
  };

  const handleDeleteDate = (index) => {
    const updatedDates = lockedDates.filter((d, i) => i !== index);
    setLockedDates(updatedDates);
  };

  return (
    <div className="employer-dashboard">
      <TopBar />
      <BurgerBar />
      <div className="header">
        <p>Hello, {adminName}!</p>
        <p className="company-name">Company: XYZ Corp</p>
      </div>
      <div className="dashboard-container">
        <div className="job-stats">
          <h3>Job Statistics</h3>
          <p>Total Jobs Posted: {jobs.length}</p>
          <button className="view-applications" onClick={handleViewApplications}>
            View Applications
          </button>
        </div>
        <div className="job-form-container">
          <h1>Admin Dashboard</h1>
          <h2>Post a Job</h2>
          <form className="job-form" onSubmit={handlePostJob}>
            <div className="form-group">
              <label htmlFor="jobTitle">Job Title</label>
              <input
                id="jobTitle"
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="jobDescription">Job Description</label>
              <textarea
                id="jobDescription"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="jobType">Job Type</label>
                <select
                  id="jobType"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  required
                >
                  <option value="">Select Job Type</option>
                  <option value="remote">Remote</option>
                  <option value="onsite">Onsite</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="experience">Experience Level</label>
                <select
                  id="experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  required
                >
                  <option value="">Select Experience Level</option>
                  <option value="junior">Junior</option>
                  <option value="mid">Mid-Level</option>
                  <option value="senior">Senior</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="ctc">CTC (Cost to Company)</label>
                <input
                  id="ctc"
                  type="text"
                  value={ctc}
                  onChange={(e) => setCtc(e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit">Post Job</button>
          </form>
          <div className="job-list">
            <h3>Posted Jobs</h3>
            {jobs.length === 0 ? (
              <p>No jobs posted yet.</p>
            ) : (
              <ul>
                {jobs.map((job, index) => (
                  <li key={index} className="job-item">
                    <h4>{job.title}</h4>
                    <p>{job.description}</p>
                    <p><strong>Type:</strong> {job.type}</p>
                    <p><strong>Experience:</strong> {job.experience}</p>
                    <p><strong>Location:</strong> {job.location}</p>
                    <p><strong>CTC:</strong> {job.ctc}</p>
                    <button className="delete-button" onClick={() => handleDeleteJob(index)}>Delete Job</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="calendar-container">
          <h3>Interview Schedule</h3>
          <Calendar
            onChange={setDate}
            value={date}
            tileClassName={({ date }) =>
              lockedDates.some(d => d.toDateString() === date.toDateString()) ? 'locked' : null
            }
          />
          <p><strong>Selected Date:</strong> {date.toDateString()}</p>
          <button className="lock-date" onClick={handleLockDate}>
            Lock Interview Date
          </button>
          <div className="locked-dates">
            <h4>Locked Dates</h4>
            {lockedDates.length === 0 ? (
              <p>No dates locked yet.</p>
            ) : (
              <ul>
                {lockedDates.map((lockedDate, index) => (
                  <li key={index}>
                    {lockedDate.toDateString()}
                    <button className="delete-button" onClick={() => handleDeleteDate(index)}>Delete Date</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EmployerDash;
