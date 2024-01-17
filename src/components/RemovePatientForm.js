
import { useState } from "react"


export function RemovePatientForm(){

  const [patientData, setPatientData] = useState({
    patientName: '',
  })


  return(
    <div>
      <p id="remove-patient-response"></p>
      <form method='post' className='add-patient-form'>
          <input 
            type='text'
            placeholder='Patients Name'
            value={patientData.patientName}
            onChange={(e) => setPatientData({...patientData, patientName:e.target.value})}
          />

          <button type='submit'>Remove Patients</button>
        </form>
    </div>
    
  )
}