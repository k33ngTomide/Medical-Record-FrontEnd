import './App.css';
import './styles/signup.css'
import './styles/login.css'
import './styles/dashboard.css'
import FirstPage from './components/FirstPage';
import Signup from './components/SignUp';
import Login from './components/Login';
import { DashBoard } from './components/Dashboard';
import logo from './logo-used.png';
import React, { useState, useEffect } from 'react';
import './styles/line_loader.css'

function App() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='App'>
      {showLogo && (
        <div className='App-header'>
          <img src={logo} alt="Logo" className='App-logo'/>
          <div class="loader-line"></div>
        </div>
      )}
      {!showLogo && (
        <>
          <FirstPage />
          <Signup />
          <Login />
          <DashBoard />
        </>
      )}
    </div>
  );
}

export default App;
