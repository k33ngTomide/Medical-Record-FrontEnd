import './SignUp';
import './Login';
import logo from '../assets/logo-used.png'


export function DashBoard(){

  function clicked(){

  }

  return (
    <div className='dashboard'>
      <div className='left-dashboard'>
        <div className='logo-image'>
          <img src={logo} alt='logo' className='Logo'/>
          <h2>Standard Med</h2>
        </div>
        <div className='all-actions'>
          <button>Get Started</button>
          <button>Profile</button>
          <button>Patients</button>
          <button>Hospitals</button>
          <button>Help</button>
          <button>Settings</button>
          <button>Logout</button>
        </div>
      </div>
      <div className='right-dashboard'>
        <h1 className='username'>Welcome <span>Username</span></h1>
        <div className='first-pane'>

        </div>
        <div className='second-pane'>

        </div>
      </div>
    </div>
  )
}