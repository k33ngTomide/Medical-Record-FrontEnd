import './SignUp';
import './Login';
import logo from '../assets/logo-used.png'


export function DashBoard(){

  function clicked(){

  }

  return (
    <div>
      <div className='left-dashboard'>
        <div>
          <img src={logo} alt='logo' className='Logo'/>
          <h1>StandardMED</h1>
        </div>
        <div>
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