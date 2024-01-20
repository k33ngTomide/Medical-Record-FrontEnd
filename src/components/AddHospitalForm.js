import { useState } from "react"


export function AddHospitalForm(){

  const [hospitalData, setHospitalData] = useState({
    hospitalName: '',
    hospitalAddress:'',
    hospitalPhone: '',
  })

  const registerHospital = async (event) => {
    event.preventDefault();
    const {hospitalName, hospitalAddress, hospitalPhone} = hospitalData;

    try{
      const url = `${process.env.REACT_APP_URL}/register-hospital`
      const doctorName = localStorage.getItem('stdmeduname');

      await fetch(url, {
        method: 'POST',
        body: JSON.stringify({doctorName,hospitalName, hospitalAddress, hospitalPhone}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.text())
      .then(text => {
        document.getElementById('add-hospital-response').innerHTML = text;
      })

    } catch(error){
      document.getElementById('add-hospital-response').innerHTML = 'An error occurred';
      console.log(error);
    }
    
  }

  return(
    <div className="add-div">
      <p id="add-hospital-response"></p>
      <form className='add-patient-form'>
        <input 
          type='text'
          placeholder='Hospital Name'
          value={hospitalData.hospitalName}
          onChange={(e) => setHospitalData({...hospitalData, hospitalName:e.target.value})}
        />

        <input 
          type='text'
          placeholder='Hospital Address'
          value={hospitalData.hospitalAddress}
          onChange={(e) => setHospitalData({...hospitalData, hospitalAddress:e.target.value})}
        />

        <input 
          type='text'
          placeholder='Hospital Phone'
          value={hospitalData.hospitalPhone}
          onChange={(e) => setHospitalData({...hospitalData, hospitalPhone:e.target.value})}
        />

        <button type='submit' onClick={registerHospital}>Add Hospital</button>
      </form>
    </div>
    
  )
}