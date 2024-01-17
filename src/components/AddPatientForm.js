import { useState } from "react"


export function AddPatientForm() {
  const [patientData, setPatientData] = useState({
    fullName: '',
    hospitalName: '',
    gender:'',
    dateOfBirth: '',
    occupation: '',
    maritalStatus: '',
    allergies: '',
  })

  const handleSubmit = () => {
    
  }

  return(
    <div className='add-div'>
      <p id="add-patient-response"></p>
      <form method='post' className='add-patient-form' onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='Patient Name'
          value={patientData.fullName}
          onChange={(e) => setPatientData({...patientData, fullName:e.target.value})}
        />

        <input 
          type='text'
          placeholder='Hospital Name'
          value={patientData.hospitalName}
          onChange={(e) => setPatientData({...patientData, hospitalName:e.target.value})}
        />

        <input 
          type='text'
          placeholder='Gender'
          value={patientData.gender}
          onChange={(e) => setPatientData({...patientData, gender:e.target.value})}
        />

        <input 
          type='text'
          placeholder='Date of birth'
          value={patientData.dateOfBirth}
          onChange={(e) => setPatientData({...patientData, dateOfBirth:e.target.value})}
        />
        <input 
          type='text'
          placeholder='Patient Occupation'
          value={patientData.occupation}
          onChange={(e) => setPatientData({...patientData, occupation:e.target.value})}
        />
        <input 
          type='text'
          placeholder='Marital Status'
          value={patientData.maritalStatus}
          onChange={(e) => setPatientData({...patientData, maritalStatus:e.target.value})}
        />
        <input 
          type='text'
          placeholder='Allergies'
          value={patientData.allergies}
          onChange={(e) => setPatientData({...patientData, allergies:e.target.value})}
        />

        <button type='submit'>Add Patient</button>
      </form>
    </div>
    
  )
}