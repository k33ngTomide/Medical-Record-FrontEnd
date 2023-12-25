
import logo from '../assets/logo-used.png';

export function LoadingPage(){
  return (
    <div className='App-header'>
      <img src={logo} alt="Logo" className='App-logo'/>
      <div class="loader-line"></div>
    </div>
  )
}