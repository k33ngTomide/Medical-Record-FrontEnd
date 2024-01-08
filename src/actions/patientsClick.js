import clear from './clear';


function patientClick(){
  clear();
  document.getElementById('patients').style.display = 'flex';
  document.getElementById('patient_button').style.backgroundColor = 'lightblue';
}

export default patientClick;

