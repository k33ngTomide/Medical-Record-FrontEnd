import logo from '../assets/logo-used.png'
import logoutLogo from '../assets/icons8-logout-rounded-left-64.png';
import home from '../assets/icons8-spaceship-launch-documentation-80.png';
import profile from '../assets/icons8-male-user-50.png'
import settings from '../assets/icons8-settings-50.png';
import patients from '../assets/icons8-nurse-call-50.png';
import hospitals from '../assets/icons8-hospital-50.png';
import help from '../assets/icons8-help-50.png';
import homeClick from '../actions/homeClick';
import helpClick from '../actions/helpClick';
import hospitalClick from '../actions/hospitalClick';
import patientClick from '../actions/patientsClick';
import profileClick from '../actions/profileClick.js';
import { useNavigate } from 'react-router';
import Loader from './Loader.js';
import { useState } from 'react';



export function LeftDashBoard(){
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    setIsLoading(true);
    let username = localStorage.getItem('stdmeduname');

    let url = `${process.env.REACT_APP_URL}/logout-user`;
    const response = fetch (url, {
      method: 'PATCH',
      body: JSON.stringify({username}),
      headers:{
        'Content-Type': 'application/json'
      }
    })

    response.then( res => res.text())
    .then(text => {
      console.log(text)
      if(text.includes('Logged out')){
        localStorage.setItem('stdmeduname', '')
        navigate('/');
      }
    }).catch(error => {
      console.log(error.message);
    })
  }

  return (
    <div className='left-dashboard'>
        <Loader isLoading={isLoading}/>
        <div className='logo-image'>
          <img src={logo} alt='logo' className='Logo'/>
          <h2>Standard Med</h2>
        </div>
        <div className='all-actions'>
          <button id='home_button' onClick={homeClick}><img src={home} alt='home' width={20}/>Home</button>
          <button id='profile_button' onClick={profileClick}><img src={profile} alt='profile' width={20}/>Profile</button>
          <button id='patient_button' onClick={patientClick}><img src={patients} alt='patients' width={20}/>Patients</button>
          <button id='hospital_button' onClick={hospitalClick}><img src={hospitals} alt='hospital' width={20}/>Hospitals</button>
          <button id='help_button' onClick={helpClick}><img src={help} alt='help' width={20}/>Help</button>
          
        </div>

        <div className='extra-actions'>
          <button><img src={settings} alt='logout' width={20}/>Settings</button>
          <button onClick={logout}>
            <img src={logoutLogo} alt='logout' width={20} /> 
            Logout
            </button>  
        </div>
      </div>
  )
}