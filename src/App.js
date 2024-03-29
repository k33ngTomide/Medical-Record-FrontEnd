import './App.css';
import './allstyles/signup.css';
import './allstyles/login.css';
import './allstyles/dashboard.css';
import FirstPage from './components/FirstPage';
import { DashBoard } from './components/Dashboard';
import React, { useState, useEffect } from 'react';
import './allstyles/line_loader.css';
import { LoadingPage} from './components/LoadingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 1000);

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
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<FirstPage/>}/>
              <Route path='*' element={<FirstPage/>}/>
              <Route path='/dashboard' element={<DashBoard/>}/>
            </Routes>
          </BrowserRouter>
        </>
      )}
      
    </div>
  );
}

export default App;