import { useState } from 'react';
import './Dashboard'
// import { DashBoard } from './Dashboard';
import Loader from './Loader';
import '../styles/loader.css'


function Login(){
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    username:'',
    password : '',
  })

  const cancel = () => {
    document.getElementById("login-segment").style.display = 'none';
  }


  const submitted = async (event) => {
    try{
      event.preventDefault();
      setIsLoading(true);
      const {username, password} = data;

      let loginRequest = {
        "username": username,
        "password": password
      }

      // let url = "https://standardmed.onrender.com/standard-health/login";
      let urll = 'http://localhost:9191/standard-health/login';
      const response = await fetch(urll, {
        method: "POST",
        body: JSON.stringify(loginRequest),
        headers: {
          'Content-Type': 'application/json'
        }

      });

      if(!response.ok){
        setIsLoading(false);
        document.getElementById('signup-response').innerHTML = response.text();
        return;
      }
      

      setIsLoading(false);

    } catch (error) {
      console.error('Error during fetch:', error);
    }

  
  }
  

  return (
    <div className="login-segment" id ="login-segment">
        <div className="login-content">

          <div className="signin-first">
              <button onClick={cancel} className="cancel-button" id="cancel-login">&times;</button>
              <h1 className="normal-text"> Welcome to Standard Med</h1>
          </div>

          <h1 className="normal-text"> Log In</h1>
          <p className='normal-text' id='login-response'></p>
          <form  className="details" id="signin" onSubmit={submitted}>
              <input 
                type="text" 
                placeholder="Enter Username" 
                id="signin-username" 
                required
                value={data.username}
                onChange={(e) => setData({...data, username: e.target.value})}
              />

              <input 
                type="password" 
                placeholder="Enter password" 
                id="signin-password" 
                required
                value={data.password}
                onChange={(e) => setData({...data, password: e.target.value})}
              />

              <button className="signin-button" id="signin-button" type="submit">Login</button>
          </form>
          <Loader isLoading={isLoading} />

          <p className='forget-pass'>Forgot password? <a className="forget" id="forget-password" href="#">  click here</a></p>

        </div>
    </div>
  )
}

export default Login;