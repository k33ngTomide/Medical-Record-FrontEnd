import './App.css';
import './styles/signup.css'
import './styles/login.css'
import './styles/dashboard.css'
import FirstPage from './components/FirstPage';
import Signup from './components/SignUp';
import Login from './components/Login';
import { DashBoard } from './components/Dashboard';
import React, { useState, useEffect } from 'react';
import './styles/line_loader.css';
import { LoadingPage} from './components/LoadingPage';

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
        <>
        
        <LoadingPage/>
        </>
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
