import { useState } from "react"

export function MedicalHistoryForm(){
  const [patientData, setPatientData] = useState({
    patientName: '',
    sickness:'',
    prescription: '',
    comment: '',
  })

  const addRecord = async(event) =>{

    event.preventDefault();
    const {patientName, sickness, prescription, comment} = patientData;

    try{
      const url = `${process.env.REACT_APP_URL}/enter-medical-history`;
      const doctorName = localStorage.getItem('stdmeduname');

      await fetch(url, {
        method: 'POST',
        body: JSON.stringify({patientName,doctorName, sickness, prescription, comment}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.text())
      .then(text => {
        document.getElementById('add-medical-history').innerHTML = text;
      })

    } catch(error){
      document.getElementById('add-medical-history').innerHTML = 'An error occurred';
      console.log(error);
    }
  }

  return (
    <div>
      <p id="add-medical-history"></p>
      <form method='post' className='add-patient-form' >
        <input 
          type='text'
          placeholder='Patient Name'
          value={patientData.patientName}
          onChange={(e) => setPatientData({...patientData, patientName:e.target.value})}
        />

        <input 
          type='text'
          placeholder='Sickness/issues'
          value={patientData.sickness}
          onChange={(e) => setPatientData({...patientData, sickness:e.target.value})}
        />

        <input 
          type='text'
          placeholder='Prescriptions/Solutions'
          value={patientData.prescription}
          onChange={(e) => setPatientData({...patientData, prescription:e.target.value})}
          
        />
        <input 
          type='text'
          placeholder='Comment and Date'
          value={patientData.comment}
          onChange={(e) => setPatientData({...patientData, comment:e.target.value})}
        />

        <button type='submit' onClick={addRecord}>Add Medical Record</button>
      </form>
    </div>
  )

}