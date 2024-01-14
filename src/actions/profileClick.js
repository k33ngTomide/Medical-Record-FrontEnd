import clear from './clear';


async function profileClick(){
  clear();
  document.getElementById('profile').style.display = 'flex';
  document.getElementById('profile_button').style.backgroundColor = 'lightblue';

  const doctorName = localStorage.getItem('stdmeduname');
  const url = `https://standardmed.onrender.com/standard-health/find-doctor/${doctorName}`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const result = response.json();
  console.log('user: ', result);
  const { id, email, username, licence, Specialization, dateRegistered, isloggedIn} = result; 
  
  
}

export default profileClick;
