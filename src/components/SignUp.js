
function Signup(){

  function cancel(){
    document.getElementById("signup-segment").style.display = 'none';
  }

  function loginPage(){
    document.getElementById("signup-segment").style.display = 'none';
    document.getElementById("login-segment").style.display = 'block';
  }

  return (
    <div className="signup-segment" id="signup-segment">

      <div className="signup-content">
      
        <div className="signup-first">
          <button onClick={cancel} className="cancel-button" id="cancel-signup">&times;</button>
          <h1 className="text"> Welcome to Standard Health</h1>
        </div>
        <h1 className="text">Sign Up</h1>
        <form className="details" id="signup" method="post">
          <input type="text" placeholder="Enter your name" id="firstname" required></input>
          <input type="email" placeholder="Enter your preferred email " id="email" required></input>
          <input type="password" placeholder="Enter your password " id="password" required></input>
          <input type="number" placeholder="Enter your phone number" id="phone-number"></input>

          <button className="button" id="submit-signup" type="submit">Sign-Up</button>
        </form>

        <div className="account"> Already have an account?
          <button onClick={loginPage} className="login-button" id="login-button">Login Here</button>
        </div>
      </div>
    </div>

  )
}

export default Signup;