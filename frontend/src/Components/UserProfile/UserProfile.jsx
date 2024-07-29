// UserProfile.js
import React from 'react';
import '../../Assest/css/UserProfile.css';
import BurgerBar from '../burgerBar/BurgerBar';
import TopBar from '../TopBar/TopBar';
import Footer from '../Footer/Footer';

const UserProfile = () => {
  return (
    <div>
      <BurgerBar />
      <TopBar />
      <div className="user-profile">
        <div className="profile-sidebar">
          <section className="sidebar-section">
            <h2>Following</h2>
            <ul>
              <li>
                <img src="https://via.placeholder.com/40" alt="User" className="sidebar-avatar" />
                <div className="sidebar-info">
                  <p className="sidebar-name">John Smith</p>
                  <p className="sidebar-username">@johnsmith</p>
                </div>
              </li>
              <li>
                <img src="https://via.placeholder.com/40" alt="User" className="sidebar-avatar" />
                <div className="sidebar-info">
                  <p className="sidebar-name">Alice Johnson</p>
                  <p className="sidebar-username">@alicejohnson</p>
                </div>
              </li>
              <li>
                <img src="https://via.placeholder.com/40" alt="User" className="sidebar-avatar" />
                <div className="sidebar-info">
                  <p className="sidebar-name">Robert Brown</p>
                  <p className="sidebar-username">@robertbrown</p>
                </div>
              </li>
            </ul>
          </section>
          <section className="sidebar-section">
            <h2>Followers</h2>
            <ul>
              <li>
                <img src="https://via.placeholder.com/40" alt="User" className="sidebar-avatar" />
                <div className="sidebar-info">
                  <p className="sidebar-name">Emily Davis</p>
                  <p className="sidebar-username">@emilydavis</p>
                </div>
              </li>
              <li>
                <img src="https://via.placeholder.com/40" alt="User" className="sidebar-avatar" />
                <div className="sidebar-info">
                  <p className="sidebar-name">Michael Wilson</p>
                  <p className="sidebar-username">@michaelwilson</p>
                </div>
              </li>
              <li>
                <img src="https://via.placeholder.com/40" alt="User" className="sidebar-avatar" />
                <div className="sidebar-info">
                  <p className="sidebar-name">Linda Miller</p>
                  <p className="sidebar-username">@lindamiller</p>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div className="profile-main-content">
          <div className="profile-header">
            <img
              src="https://via.placeholder.com/120"
              alt="Profile"
              className="profile-picture"
            />
            <div className="profile-details">
              <h1>Jane Doe</h1>
              <p>Frontend Developer</p>
              <p className="profile-bio">
                Passionate developer with experience in React and a knack for creating beautiful, user-friendly interfaces.
              </p>
            </div>
          </div>
          <div className="profile-content">
            <section className="profile-section">
              <h2>Resume</h2>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link"
              >
                View Resume
              </a>
            </section>
            <section className="profile-section">
              <h2>Contact Information</h2>
              <p>Email: jane.doe@example.com</p>
              <p>Phone: +1234567890</p>
            </section>
            <section className="profile-section">
              <h2>Application Status</h2>
              <div className="status-list">
                <div className="status-item pending">
                  <h3>Software Engineer</h3>
                  <p>Status: Pending</p>
                  <p>Company: Tech Corp</p>
                </div>
                <div className="status-item interviewed">
                  <h3>Web Developer</h3>
                  <p>Status: Interviewed</p>
                  <p>Company: Web Solutions</p>
                </div>
                <div className="status-item hired">
                  <h3>Frontend Developer</h3>
                  <p>Status: Hired</p>
                  <p>Company: Design Studio</p>
                </div>
                <div className="status-item rejected">
                  <h3>UI/UX Designer</h3>
                  <p>Status: Rejected</p>
                  <p>Company: Creative Agency</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="profile-news">
          <section className="news-section">
            <h2>News</h2>
            <ul>
              <li><a href="#">Latest Tech Trends</a></li>
              <li><a href="#">React 18 Release</a></li>
              <li><a href="#">New JavaScript Features</a></li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
