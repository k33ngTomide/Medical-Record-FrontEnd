import clear from './clear';


async function profileClick(){
  clear();
  document.getElementById('profile').style.display = 'flex';
  document.getElementById('profile_button').style.backgroundColor = 'lightblue';

  const doctorName = localStorage.getItem('stdmeduname');
  const url = `${process.env.REACT_APP_URL}/find-doctor/${doctorName}`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const result = await response.json();
  console.log('user: ', result.data);
  const {email, username, licence, specialization,pictureLink, dateRegistered, isloggedIn} = result.data;
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

export default profileClick;
