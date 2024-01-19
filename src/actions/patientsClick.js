import clear from './clear';


function patientClick(){

  const clearChildren= (element) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  const separatePatients = (data, allPatients) => {
    clearChildren(allPatients);

    data.forEach(patient => {
      createNewElements(patient)

    });

  }

  const createNewElements = (patient) => {
    const {details, doctorUsername, fullName, hospitalName} = patient;
    const {Gender, allergies, dateOfBirth, maritalStatus, occupation} = details;
    const {name} = hospitalName;
    const newDiv = document.createElement('div');
    const newH1 = document.createElement('h1');
    const newp = document.createElement('p');

    newH1.innerHTML = fullName;
    
    
  }

  try{
    const doctorName = localStorage.getItem('stdmeduname')
    const url = `https://standardmed.onrender.com/standard-health/${doctorName}/patients`
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(object => {
      console.log(object.data);
      if(typeof object.data == 'string'){
        document.getElementById('patient-normal').innerHTML = object.data;
        return
      }
      
      const allPatients = document.getElementById('all-patients');
      separatePatients(object.data, allPatients);
    })

  } catch(error){
    console.log(error.message);
  }
  

  clear();
  document.getElementById('patients').style.display = 'flex';
  document.getElementById('patient_button').style.backgroundColor = 'lightblue';
}

export default patientClick;

