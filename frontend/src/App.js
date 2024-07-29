import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from './Components/Login_Page/Login';
import Registration from './Components/Registration/Registration';
import Welcome from './Components/Welcome_page/Welcome';
import EmployerDash from './Components/EmployerDash/EmployerDashboard';
import UserProfile from './Components/UserProfile/UserProfile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleRegistration = (username, password) => {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogin = (username, password) => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    if (username === savedUsername && password === savedPassword) {
      setIsLoggedIn(true);
      setUsername(username);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', margin: 0, padding: '20px' }}>
        <Routes>
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/welcome" /> : <Login onLogin={handleLogin} />}
          />
          <Route path='/Employerdashboard' element={<EmployerDash />} />
          <Route path='/UserProfile' element={<UserProfile />} />
          <Route path='/Welcome' element={<Welcome />} />
          
          <Route
            path="/register"
            element={isLoggedIn ? <Navigate to="/welcome" /> : <Registration onRegister={handleRegistration} />}
          />
          <Route
            path="/welcome"
            element={isLoggedIn ? <Welcome username={username} onLogout={handleLogout} /> : <Navigate to="/login" />}
          />
          <Route
            path="/"
            element={<Navigate to={isLoggedIn ? "/welcome" : "/login"} />}
          />
        </Routes>
        {!isLoggedIn && (
          <Link to="/login">
            <button style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
              Go to Login
            </button>
          </Link>
        )}
      </div>
    </Router>
  );
}

export default App;
