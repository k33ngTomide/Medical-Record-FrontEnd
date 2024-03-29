import { useState } from 'react';
import './Dashboard'
// import { DashBoard } from './Dashboard';
import Loader from './Loader';
import '../allstyles/loader.css'
import { useNavigate } from 'react-router-dom';


function Login(){
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setData] = useState({
    username:'',
    password : '',
  })
  const navigate = useNavigate();

  const cancel = () => {
    document.getElementById("login-segment").style.display = 'none';
  }


  const submitted = async (event) => {
    try{
      event.preventDefault();
      setIsLoading(true);
      const {username, password} = userData;

      let loginRequest = {
        "username": username,
        "password": password
      }

      let url = `${process.env.REACT_APP_URL}/login`;
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(loginRequest),
        headers: {
          'Content-Type': 'application/json'
        }

      });

      if(!response.ok){
        setIsLoading(false);
        document.getElementById('logi-response').innerHTML = response.text();
        return;
      }

      console.log(response);
      const result = await response.json();
      console.log(result);

      if(typeof result.data === 'string'){
        setIsLoading(false);
        document.getElementById('logi-response').innerHTML = result.data;
        return;
      }

      let { data} = result;
      const {username: loggedInUsername } = data;
      localStorage.setItem('stdmeduname', loggedInUsername);
      navigate('/dashboard');
      setIsLoading(false);
  
    } catch (error) {
      setIsLoading(false);
      console.error('Error during fetch:', error);
    }

  }
  
  const clearResponse = () => {
    document.getElementById('logi-response').innerHTML = '';
  }

  return (
    <div className="login-segment" id ="login-segment">
        <div className="login-content">

          <div className="signin-first">
              <button onClick={cancel} className="cancel-button" id="cancel-login">&times;</button>
              <h1 className="normal-text"> Welcome to Standard Med</h1>
          </div>
          
          <h1 className="normal-text"> Log In</h1>
          <p className='normal-text' id='logi-response'></p>
          <form  className="details" id="signin" onSubmit={submitted} onClick={clearResponse}>
              <input 
                type="text" 
                placeholder="Enter Username" 
                id="signin-username" 
                required
                value={userData.username}
                onChange={(e) => setData({...userData, username: e.target.value})}
              />

              <input 
                type="password" 
                placeholder="Enter password" 
                id="signin-password" 
                required
                value={userData.password}
                onChange={(e) => setData({...userData, password: e.target.value})}
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