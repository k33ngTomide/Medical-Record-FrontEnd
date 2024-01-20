import clear from './clear';


function patientClick(){

  const clearChildren= (allPatients) => {
    while (allPatients.firstChild) {
      allPatients.removeChild(allPatients.firstChild);
    }
  }

  const separatePatients = (data, allPatients) => {
    clearChildren(allPatients);

    data.forEach(patient => {
      const allContent = createNewElements(patient);
      allPatients.appendChild(allContent);

    });

  }

  const createNewElements = (patient) => {
    const {details, doctorUsername, fullName, hospitalName} = patient;
    const {Gender, allergies, dateOfBirth, maritalStatus, occupation} = details;
    const {name} = hospitalName;
    const newDiv = document.createElement('div');
    const newH1 = document.createElement('h1');
    const hospital = document.createElement('h3');
    const pro = document.createElement('h4');
    const newp = document.createElement('p');
    const DOB = document.createElement('p');


    newH1.innerHTML = fullName;
    hospital.innerHTML = name;
    newp.innerHTML = `${Gender}   ${maritalStatus}`;
    DOB.innerHTML = `DOB: ${dateOfBirth}`;
    pro.innerHTML = `Occupation: ${occupation}`

    newDiv.appendChild(newH1);
    newDiv.appendChild(hospital);
    newDiv.appendChild(newp);
    newDiv.appendChild(DOB);
    newDiv.appendChild(pro);
    newDiv.className= 'patient-package'

    return newDiv;
    
  }

  try{
    const doctorName = localStorage.getItem('stdmeduname')
    const url = `${process.env.REACT_APP_URL}/${doctorName}/patients`
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

