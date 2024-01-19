import clear from './clear';


function hospitalClick(){

  const createAllElements = (name, address, phone, ground) => {

    let firstDiv = document.createElement('div');
    let firstH1 = document.createElement('h1');
    let firstH3 = document.createElement('h4');
    let ptag = document.createElement('p');

    if(name){
      firstH1.innerHTML = name;
      firstH3.innerHTML = address;
      ptag.innerHTML = `Phone: ${phone}`;

      firstDiv.appendChild(firstH1);
      firstDiv.appendChild(firstH3);
      firstDiv.appendChild(ptag);
      firstDiv.className = 'hospital-package';

      ground.appendChild(firstDiv);
    }
    
  }

  const clearChildren= (element) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  clear()
  document.getElementById('hospitals').style.display = 'flex';
  document.getElementById('hospital_button').style.backgroundColor = 'lightblue';

  try{

    const doctorName = localStorage.getItem('stdmeduname');

    const url = `https://standardmed.onrender.com/standard-health/${doctorName}/hospitals`
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(object => {
      if(typeof object.data === 'string'){
        console.log(object.data);
        document.getElementById('all-hospitals').innerHTML = object.data;
      }

      const ground = document.getElementById('all-hospitals');
      clearChildren(ground);
      const allHospital = object.data

      allHospital.forEach(element => {
        const {name, address, phone} = element;

        createAllElements(name, address, phone, ground);

      });
      
      console.log(object.data);
    })
  } catch(error){
    console.log(error.message)
  }

}

export default hospitalClick;

