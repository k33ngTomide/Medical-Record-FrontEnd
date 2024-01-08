import clear from './clear';


function hospitalClick(){
  clear()
  document.getElementById('hospitals').style.display = 'flex';
  document.getElementById('hospital_button').style.backgroundColor = 'lightblue';
}

export default hospitalClick;

