import { useEffect, useState } from 'react'
import profile from '../assets/profile_dummy.png'
import { AddPatientForm } from './AddPatientForm';
import { AddHospitalForm } from './AddHospitalForm';
import { RemoveHospitalForm } from './RemoveHospitalForm';
import { RemovePatientForm } from './RemovePatientForm';
import {SearchPatientForm} from './SearchPatientForm';
import { SearchHospitalForm } from './SearchHospitalForm';

export function RightDashBoard(){

  const [value, setValue] = useState('');
  const [showPatient, setShowPatient] = useState(false);
  const [showRemovePatient, setShowRemovePatient] = useState(false);
  const [showSearchPatient, setShowSearchPatient] = useState(false);
  const [showSearchHospital, setShowSearchHospital] = useState(false);
  const [showHospital, setShowHospital] = useState(false);
  const [showRemoveHospital, setShowRemoveHospital] = useState(false);

  useEffect(() => {
    const drName = localStorage.getItem('stdmeduname');
    setValue(drName);

    const fetchData = async () => {
      const doctorName = localStorage.getItem('stdmeduname');
      const url = `https://standardmed.onrender.com/standard-health/find-doctor/${doctorName}`

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();
      const {email, pictureLink, username, licence, specialization, dateRegistered, isloggedIn} = result.data;
      
      if(pictureLink){
        document.getElementById('profile-image').src = pictureLink;
      }
      
      document.getElementById('doctor-email').innerHTML = email;
      document.getElementById('doctor-name').innerHTML = username;
      document.getElementById('doctor-spec').innerHTML = specialization;
      document.getElementById('doctor-licence').innerHTML = licence
      document.getElementById('registered-date').innerHTML = dateRegistered.join('/');
      if(isloggedIn){
        document.getElementById('doctor-status').innerHTML = 'Active'
      }
    }

    const clearNews = (newsDiv) => {
      while (newsDiv.firstChild) {
        newsDiv.removeChild(newsDiv.firstChild);
      }
    }

    const fetchNews = async() => {
      const newsDiv = document.getElementById('health-news');
      clearNews(newsDiv);

      const newsUrl = 'https://newsapi.org/v2/top-headlines?country=ng&category=health&apiKey=02a64f0248fb4a6ba966906717bb23a4';

      await fetch(newsUrl, {
        method: 'GET',
        
      }).then(response => response.json())
      .then(object => {
        const {articles} = object
        separateArticles(articles, newsDiv);
      })
    }

    fetchData();  
    fetchNews()
  }, []);

  const separateArticles = (articles, newsDiv) => {
    articles.forEach(article => {
      const {title, url} = article;
      createNewElement(title, url, newsDiv);
    });

  }

  const createNewElement = (title, url, newsDiv) => {

    const newH1 = document.createElement('h2');
    const viewButton = document.createElement('a');
    const oneNewsDiv = document.createElement('div')
    
    viewButton.innerHTML = "Read News";
    viewButton.href = url;
    viewButton.id = 'button-like';
    newH1.innerHTML = title;
    oneNewsDiv.id = 'news-package'
    oneNewsDiv.appendChild(newH1);
    oneNewsDiv.appendChild(viewButton)

    newsDiv.appendChild(oneNewsDiv);
  }

  const handleFileChange = (event) => {

    try{

      console.log("an image was selected");
      const newFile = document.getElementById('imageInput').files[0];

      const username = localStorage.getItem('stdmeduname');
      const formData = new FormData();
      formData.append('file', newFile);

      fetch(`https://standardmed.onrender.com/standard-health/doctor/${username}/upload`,{
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
      .then(object => {
        const {pictureLink} = object;
        console.log(pictureLink);
        if(pictureLink){
          console.log('Successful');
        }

      }).catch(error => {
        console.log(error);
      })
    } catch(error){
      console.log(error.message);
    }
  }

  const toggleAddPatient = () => {
    setShowPatient(!showPatient);
  };
  
  const toggleRemovePatient = () => {
    setShowRemovePatient(!showRemovePatient);
  };

  const toggleAddHospital = () => {
    setShowHospital(!showHospital);
  };
  
  const toggleRemoveHospital = () => {
    setShowRemoveHospital(!showRemoveHospital);
  };

  const toggleSearchHospital = () => {
    setShowSearchHospital(!showSearchHospital);
  };

  const toggleSearchPatient = () => {
    setShowSearchPatient(!showSearchPatient);
  };
  return (
    <div className='right-dashboard'>
      <div className='home' id='home'>
        <div className='welcome'>
          <h1 className='username'>Welcome <span id='user-id'>{value}</span></h1>
        </div>

        <div className="details-pane">
          <div className="details-info">
            <h1>Patients</h1>
            <h1 id='patient-number'>23</h1>
          </div>

          <div className="details-info">
            <h1>Hospitals</h1>
            <h1 id='hospital-number'>23</h1>
          </div>

          <div className="details-info">
            <h1> Medical History</h1>
            <h1>230</h1>
          </div>
        </div>

        <div >
          <h1>Health News</h1>
          <div className='details-pane-div' id='health-news'>

          </div>

        </div>
      </div>
      
      <div className='profile-pane' id='profile'>
        <h1>Profile</h1>
        <img src={profile} alt='profile' id='profile-image'/>
        <button onClick={() => document.getElementById('imageInput').click()}>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          Change Image
        </button>

        <div>
          <h1>Name: <span id='doctor-name'>Username</span></h1>
          <p>Email: <span id='doctor-email'>Email</span></p>
          <p>Specialization: <span id='doctor-spec'>Specialization</span></p>
          <p>License: <span id='doctor-licence'>License</span></p>
          <p>Status: <span  id='doctor-status'>Inactive</span></p>
          <p>Date Registered: <span id='registered-date'>yy/mm/dd</span></p>
        </div>

      </div>

      <div className='patients' id='patients'>
        <div className='first-segment-patient'>
          <>
            <h1>Patients</h1>
          </>
          <div className='button-container'>
            <button id='Add-patient' onClick={toggleAddPatient}>Add Patient</button>
            <button id='Remove-patient' onClick={toggleRemovePatient}>Delete Patient</button>
            <button id='Search-patient' onClick={toggleSearchPatient}>Search Patient</button>
          </div>
          
          <div>
            { showPatient && (<AddPatientForm/>)}
          </div>
          <div>
            {showRemovePatient && (<RemovePatientForm/>)}
          </div>
          <div>
            {showSearchPatient && (<SearchPatientForm/>)}
          </div>
          <div id='all-patients'>
            <p id='patient-normal'></p>
            
          </div>
        </div>

        <div className='medical-record' id='medical-record'>

        </div>

      </div>

      <div className='hospitals' id='hospitals'>

        <>
          <h1>Hospitals</h1>
        </>
        <div className='button-container'>
          <button id='add-hospital' onClick={toggleAddHospital}>Add hospital</button>
          <button id='remove-hospital' onClick={toggleRemoveHospital}>Delete Hospital</button>
          
        </div>
        <div>
          { showHospital && (<AddHospitalForm/>)}
        </div>
        <div>
          {showRemoveHospital && (<RemoveHospitalForm/>)}
        </div>
      

        <div id='all-hospitals'>
          
        </div>
      </div>

      <div className='helps' id='helps'>
        <h2>Welcome to Standard Med Support center</h2>

        <div className='report' id='report-pane'>
          <h4>Report your issues here</h4>
          <select>
            <option>Select</option>
            <option>Installation and Account Setup</option>
            <option>Navigating the App</option>
            <option>Error Messages</option>
            <option>Feedback and Suggestions</option>
            <option>Need Technical Support</option>
            <option>Feature Requests</option>
            <option>Common Issues</option>
          </select>

          <textarea rows={10} cols={40} />
          <button>Submit</button>

        </div>


        <p>Follow Us:
          Stay connected with us on social media for updates, tips, and community highlights.<br/>
          Subscribe to our newsletter for the latest news and exclusive content.
          Thank you for choosing Standard Med! We are here to ensure you have a seamless experience. If you can't find the information you need, don't hesitate to reach out to our support team. Your satisfaction is our priority.
        </p>

      </div>
    </div>
  )

}