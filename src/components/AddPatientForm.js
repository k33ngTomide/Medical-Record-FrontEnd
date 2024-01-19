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

  const registerPatient = async(event) => {
    event.preventDefault()

    try{
      const {fullName,
        hospitalName,
        gender,
        dateOfBirth,
        occupation,
        maritalStatus,
        allergies} = patientData
    
        const details = {
          Gender: gender,
          dateOfBirth: dateOfBirth,
          occupation: occupation,
          maritalStatus: maritalStatus,
          allergies: allergies
        }
    
        const patientRegisterRequest = {
          fullName: fullName,
          doctorName: localStorage.getItem('stdmeduname'),
          hospitalName: hospitalName,
          details: details
        }
    
        const url = 'https://standardmed.onrender.com/standard-health/register-patient';
        await fetch(url, {
          method: 'POST',
          body: JSON.stringify(patientRegisterRequest),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(response => response.text())
          .then(data => {
            console.log('Response:', data);
            document.getElementById('add-patient-response').innerHTML = data;
          })
    } catch(error){
      console.log(error);
      document.getElementById('add-patient-response').innerHTML = 'An Error Occurred';

    } finally{
      setPatientData({
        fullName: '',
        hospitalName: '',
        gender:'',
        dateOfBirth: '',
        occupation: '',
        maritalStatus: '',
        allergies: '',
      })
    }
    
    
  }

  return(
    <div className='add-div'>
      <p id="add-patient-response"></p>
      <form method='post' className='add-patient-form' >
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

        <select
          id="gender"
          value={patientData.gender}
          onChange={(e) => setPatientData({ ...patientData, gender: e.target.value })}
        >
          <option value="" disabled>Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="other">Other</option>
        </select>

        <input 
          type='text'
          placeholder='Gender'
          value={patientData.gender}
          onChange={(e) => setPatientData({...patientData, gender:e.target.value})}
        />

        <input 
          type='text'
          placeholder='Date of birth "format: YYYY-MM-DD"'
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

        <button type='submit' onClick={registerPatient}>Add Patient</button>
      </form>
    </div>
    
  )
}