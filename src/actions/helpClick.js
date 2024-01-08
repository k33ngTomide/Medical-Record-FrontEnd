import clear from './clear';


function helpClick(){
  clear()
  document.getElementById('helps').style.display = 'flex';
  document.getElementById('help_button').style.backgroundColor = 'lightblue';
}

export default helpClick;