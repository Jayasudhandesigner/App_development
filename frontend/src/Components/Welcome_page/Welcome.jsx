import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../Assest/css/Welcome.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { MdWork, MdWorkOutline } from 'react-icons/md';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import BurgerBar from '../burgerBar/BurgerBar';
import RemoteJobs from '../Jobs/RemoteJobs.jsx';
import WalkinJobs from '../WalkInJobs/WalkinJobs.jsx';
import Footer from '../Footer/Footer';
import Chatbot from '../ChatBot/ChatBot.jsx'; // Import the Chatbot component
import TopBar from '../TopBar/TopBar.jsx'; // Correct import path

const districts = [
  'Coimbatore',
  'Chennai',
  'Bangalore'
];

const Welcome = () => {
  return (
    <div className="welcome-page">
      <BurgerBar /> {/* Include BurgerBar component */}
      <TopBar /> {/* Include TopBar component */}

      <div className="main-content">
        <div className="video-container">
          <video autoPlay loop muted className="background-video">
            <source src="path/to/your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="overlay"></div>
        <div className="text-content">
          <h1>World's No 1 Job Searching Tool for Skilled Job Seekers</h1>
          <p>Explore the job market with us.</p>
        </div>
        
        <div className="search-bar">
          <div className="search-input-group">
            <MdWork className="search-icon" />
            <select className="search-select">
              <option value="">Roles</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
            </select>
          </div>

          <div className="search-input-group">
            <MdWorkOutline className="search-icon" />
            <select className="search-select">
              <option value="">Mode of Job</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          <div className="search-input-group">
            <CiLocationOn className="search-icon" />
            <select className="search-select">
              <option value="">Location</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>{district}</option>
              ))}
            </select>
          </div>

          <div className="search-input-group">
            <BsFillCalendarCheckFill className="search-icon" />
            <select className="search-select">
              <option value="">Experience</option>
              <option value="junior">Junior</option>
              <option value="mid-Junior">Mid-Junior</option>
              <option value="mid-Senior">Mid-Senior</option>
              <option value="senior">Senior</option>
            </select>
          </div>

          <button className="search-button">
            <AiOutlineSearch className="search-button-icon" />
            Search
          </button>
        </div>
        <div className="content">
          <RemoteJobs />
          <WalkinJobs/>
        </div>
      </div>
              
      <ToastContainer />
      <Footer />
      <Chatbot /> {/* Include Chatbot component */}
    </div>
  );
};

export default Welcome;
