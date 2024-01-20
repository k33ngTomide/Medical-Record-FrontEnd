
import { useState } from "react"


export function RemovePatientForm(){

  const [patientData, setPatientData] = useState({
    patientName: '',
  })

  const removePatient = async () => {
    const {patientName} = patientData;

    try{
      const url =  `${process.env.REACT_APP_URL}/remove-Patient`
      const doctorName = localStorage.getItem('stdmeduname');

      await fetch(url, {
        method: '',
        body: JSON.stringify({doctorName,patientName}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.text())
      .then(text => {
        document.getElementById('remove-patient-response').innerHTML = text;
      })

    } catch(error){
      document.getElementById('remove-patient-response').innerHTML = 'An error occurred';
      console.log(error);
    } finally {
      setPatientData({
        patientName: '',
      });
    }
    
  }


  return(
    <div className="add-div">
      <p id="remove-patient-response"></p>
      <form method='post' className='add-patient-form' onSubmit={removePatient}>
          <input 
            type='text'
            placeholder='Patients Name'
            value={patientData.patientName}
            onChange={(e) => setPatientData({...patientData, patientName:e.target.value})}
          />

          <button type='submit'>Remove Patient</button>
        </form>
    </div>
    
  )
}