import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../Assest/css/TopBar.css'; // Ensure this file is created and styled
import { Link } from 'react-router-dom';

const TopBar = () => {
  const handleLogout = () => {
    toast.info(
      <div>
        <p>Are you sure you want to logout?</p>
        <div className="toast-button-container">
          <button
            onClick={() => {
              toast.success('Logged out successfully');
              setTimeout(() => {
                window.location.href = '/login';
              }, 1000);
            }}
            className="toast-button toast-button-yes"
          >
            Yes
          </button>
          <button
            onClick={() => {
              toast.error('Logout canceled');
            }}
            className="toast-button toast-button-no"
          >
            No
          </button>
        </div>
      </div>,
      {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      }
    );
  };

  return (
    <header className="header">
      <div className="logo"></div>
      <nav className="nav">
      <Link to="/Welcome">Home</Link>
      <Link to="/Employerdashboard" >EmployerDashboard</Link>
      <Link to="/UserProfile">UserProfile</Link>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
};

export default TopBar;
