
import React, { useState } from 'react';
import Loader from './Loader';
import '../styles/loader.css'

function Signup(){
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    licence: '',
    specialization: '',
    password: '',
  });

  function cancel(){
    document.getElementById("signup-segment").style.display = 'none';
  }

  function loginPage(){
    document.getElementById("signup-segment").style.display = 'none';
    document.getElementById("login-segment").style.display = 'block';
  }

  async function handleSignUp(event) {
    event.preventDefault();
    setIsLoading(true);
    const {email, firstName, licence, password, specialization} = formData

    let signupRequest = {
      "email": email,
      "username": firstName,
      "licence": licence,
      "password": password,
      "Specialization": specialization,
    }

    const url = "https://standardmed.onrender.com/standard-health/register"

    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(signupRequest),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.text())
    .then(response => {
      setIsLoading(false);
      document.getElementById('signup-response').innerHTML = response
      console.log(response);

    }).catch(error => {
      setIsLoading(false);
      document.getElementById('signup-response').innerHTML = "An error occurred"
      console.error(error);
    });
    
  }

  return (
    <div className="signup-segment" id="signup-segment">

      <div className="signup-content">
      
        <div className="signup-first">
          <button onClick={cancel} className="cancel-button" id="cancel-signup">&times;</button>
          <h1 className="normal-text"> Welcome to Standard Health</h1>
        </div>
        <h1 className='normal-text'>Sign Up</h1>
        <p className='normal-text' id='signup-response'></p>
        <form className="details" id="signup" method="post" onSubmit={handleSignUp}>
          <input 
            type="text" 
            placeholder="Enter your name" 
            id="first-name" 
            required
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
          <input 
            type="email" 
            placeholder="Enter email " 
            id="email" 
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          
          <input 
            type="text" 
            placeholder="Enter license" 
            id="licence"
            required
            value={formData.licence}
            onChange={(e) => setFormData({ ...formData, licence: e.target.value })}
          />

          <input 
            type="text" 
            placeholder="Enter Specialization" 
            id="spec"
            required
            value={formData.specialization}
            onChange={(e) => setFormData({
              ...formData, specialization: e.target.value
            })}
          />

          <input 
            type="password" 
            placeholder="Enter password " 
            id="password" 
            required
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          

          <button className="button" id="submit-signup" type="submit">
            Sign-Up
          </button>
        </form>
        <Loader isLoading={isLoading} />

        <div className="account"> 
          <p>Already have an account?</p>
          <button onClick={loginPage} className="login-button" id="login-button">Login Here</button>
        </div>
      </div>
    </div>

  )
}

export default Signup;