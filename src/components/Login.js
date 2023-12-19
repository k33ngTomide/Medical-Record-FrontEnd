
function Login(){

  function cancel(){
    document.getElementById("login-segment").style.display = 'none';
  }

  return (
    <div className="login-segment" id ="login-segment">
        <div className="login-content">

          <div className="signin-first">
              <button onClick={cancel} className="cancel-button" id="cancel-login">&times;</button>
              <h1 className="text"> Welcome to Standard Med</h1>
          </div>

          <h1 className="text"> Log In</h1>

          <form  className="details" id="signin">
              <input type="text" placeholder="Enter Username/Display name" id="user-username" required></input>
              <input type="email" placeholder="Enter email " id="signin-email" required></input>
              <input type="password" placeholder="Enter password " id="signin-password" required></input>

              <button className="signin-button" id="signin-button" type="submit">Login</button>
          </form>

          <p>Forgot password? <a className="forget" id="forget password" href="#"> click here</a></p>

        </div>
    </div>
  )
}

export default Login;