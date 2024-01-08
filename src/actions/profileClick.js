import clear from './clear';


function profileClick(){
  clear();
  document.getElementById('profile').style.display = 'flex';
  document.getElementById('profile_button').style.backgroundColor = 'lightblue';
}

export default profileClick;
