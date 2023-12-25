import logo from '../assets/logo-used.png'
import './SignUp'
import './Login'

function FirstPage(){

  function userSignup(){
    backToPage();
    document.getElementById("signup-segment").style.display = 'block';
  }

  function userLogin(){
    backToPage();
    document.getElementById("login-segment").style.display = 'block';
  }

  function backToPage(){
    document.getElementById("login-segment").style.display = 'none';
    document.getElementById("signup-segment").style.display = 'none';
  }

  return (
    <div className="first-page">
      <h1>Standard Med</h1>
      <p className='moto'>Keep your patients with you Everytime and Everywhere</p>
      <img src={logo} alt="Logo" className="App-logo"/>


      <div className='first-page-buttons'>
        <button onClick={userSignup}>SignUp</button>
        <button onClick={userLogin}>Login</button>
      </div>

    </div>
  )

}


export default FirstPage;

