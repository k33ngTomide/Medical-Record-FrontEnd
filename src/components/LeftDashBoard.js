import logo from '../assets/logo-used.png'
import logoutLogo from '../assets/icons8-logout-rounded-left-64.png';
import getstarted from '../assets/icons8-spaceship-launch-documentation-80.png';
import profile from '../assets/icons8-male-user-50.png'
import settings from '../assets/icons8-settings-50.png';
import patients from '../assets/icons8-nurse-call-50.png';
import hospitals from '../assets/icons8-hospital-50.png';
import help from '../assets/icons8-help-50.png'



export function LeftDashBoard(){
  return (
    <div className='left-dashboard'>
        <div className='logo-image'>
          <img src={logo} alt='logo' className='Logo'/>
          <h2>Standard Med</h2>
        </div>
        <div className='all-actions'>
          <button><img src={getstarted} alt='logout' width={20}/>Home</button>
          <button><img src={profile} alt='logout' width={20}/>Profile</button>
          <button><img src={patients} alt='logout' width={20}/>Patients</button>
          <button><img src={hospitals} alt='logout' width={20}/>Hospitals</button>
          <button><img src={help} alt='logout' width={20}/>Help</button>
          <button><img src={settings} alt='logout' width={20}/>Settings</button>
        </div>

        <div className='extra-actions'>
          <button><img src={logoutLogo} alt='logout' width={20}/> Logout</button>  
        </div>
      </div>
  )
}