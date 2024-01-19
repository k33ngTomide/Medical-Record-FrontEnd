
import { useState } from "react"


export function SearchHospitalForm(){
  

  const [hospitalData, setHospitalData] = useState({
    hospitalName: '',
  })

  const searchHospital = async (event) => {
    event.preventDefault();
    const {hospitalName} = hospitalData;

    try{
      const url = 'https://standardmed.onrender.com/standard-health/remove-Hospital'
      const doctorName = localStorage.getItem('stdmeduname');

      await fetch(url, {
        method: '',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.text())
      .then(text => {
        document.getElementById('remove-h-response').innerHTML = text;
      })

    } catch(error){
      document.getElementById('remove-h-response').innerHTML = 'An error occurred';
      console.log(error);
    }
    
  }

  return(
    <div className="add-div">
      <p id="remove-h-response"></p>
      <form className='add-patient-form'>
          <input 
            type='text'
            placeholder='Hospital Name'
            value={hospitalData.hospitalName}
            onChange={(e) => setHospitalData({...hospitalData, hospitalName:e.target.value})}
          />

          <button type='submit' onClick={searchHospital}>Search Hospital</button>
        </form>
    </div>
    
  )
}