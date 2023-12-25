import './Dashboard'
import { DashBoard } from './Dashboard';


function Login(){

  function cancel(){
    document.getElementById("login-segment").style.display = 'none';
  }


  function submitted(){

    let email = document.getElementById("signin-email").value;
    let password = document.getElementById("signin-password").value;

    let loginRequest = {
      email: email,
      password: password
    }

    let url = "standardMED.render.com/login"
    fetch(url, {
      method: "PATCH",
      body: JSON.stringify(loginRequest),
      headers: {
        'contentType': 'application/json; charset:UTF-8'
      }

    })
    .then(response => response.json())
    .then(response => {
      window.location = <DashBoard/>
    });
  }
  

  return (
    <div className="login-segment" id ="login-segment">
        <div className="login-content">

          <div className="signin-first">
              <button onClick={cancel} className="cancel-button" id="cancel-login">&times;</button>
              <h1 className="text"> Welcome to Standard Med</h1>
          </div>

          <h1 className="text"> Log In</h1>

          <form  className="details" id="signin" onSubmit={submitted}>
              <input type="text" placeholder="Enter Username/Display name" id="user-username" required></input>
              <input type="email" placeholder="Enter email " id="signin-email" required></input>
              <input type="password" placeholder="Enter password " id="signin-password" required></input>

              <button className="signin-button" id="signin-button" type="submit">Login</button>
          </form>

          <p>Forgot password? <a className="forget" id="forget password" href="#">  click here</a></p>

        </div>
    </div>
  )
}

export default Login;