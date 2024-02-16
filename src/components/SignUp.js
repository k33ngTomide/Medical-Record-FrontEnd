
import React, { useState } from 'react';
import Loader from './Loader';
import '../allstyles/loader.css'

function Signup(){
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    licence: '',
    specialization: '',
    password: '',
  });

  const cancel = () =>{
    document.getElementById("signup-segment").style.display = 'none';
  }

  const loginPage = () =>{
    document.getElementById("signup-segment").style.display = 'none';
    document.getElementById("login-segment").style.display = 'block';
  }

  const handleSignUp = async(event) => {
    event.preventDefault();
    setIsLoading(true);
    const {email, firstName, licence, password, specialization} = formData

    let signupRequest = {
      "email": email.trim(),
      "username": firstName.trim(),
      "licence": licence.trim(),
      "password": password.trim(),
      "specialization": specialization.trim(),
    }

    const url =  `${process.env.REACT_APP_URL}/register`

    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(signupRequest),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.text())
    .then(response => {
      if(response.includes('Registration Successful')){
        sendEmail();
        document.getElementById('signup-response').innerHTML = response;
        document.getElementById('email-info').innerHTML = 'Check Your Email to verify your Email';
        
      }
      setIsLoading(false);
      document.getElementById('signup-response').innerHTML = response
      console.log(response);

    }).catch(error => {
      setIsLoading(false);
      document.getElementById('signup-response').innerHTML = "An error occurred"
      console.error(error);
    });
    
  }


  const sendEmail = async() => {
    const {email, firstName} = formData;

    const emailRequest = {
      sender: {
        name: 'Standard Med',
        email: 'stdMed@gmail.com',
      },
      to: [
        {
          name: firstName.trim(),
          email: email.trim()
        }
      ],
      subject: 'Account on Standard-Med Created Successfully',
      htmlContent: `<p>
        Dear ${firstName}, Welcome to Standard Med.<br>
        This is a confirmation that your account on Standard Med was created Successfully.
        Click <a href="https://google.com">here</a> to Verify Your Email.
      </p>`
    }

    await fetch(`${process.env.REACT_APP_EMAIL_SENDER}`, {
      method:'POST',
      body: JSON.stringify(emailRequest),
      headers:{
        'Accept': 'application/json',
        'Api-key': `${process.env.REACT_APP_API_KEY}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(object => {
      console.log(object);
      if(object.messageId){
        console.log('email sent successfully');
      } else{
        console.log('email sending failed')
      }
    }).catch((error) => {
      console.log(error);
    })

  }

  const clearResponse = () => {
    document.getElementById('signup-response').innerHTML = '';
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
        <p id='email-info'></p>
        <form className="details" id="signup" method="post" onSubmit={handleSignUp} onClick={clearResponse}>
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