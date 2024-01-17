
import { useState } from "react"


export function RemoveHospitalForm(){

  const [hospitalData, setHospitalData] = useState({
    hospitalName: '',
  })


  return(
    <div>
      <p id="remove-h-response"></p>
      <form method='post' className='add-patient-form'>
          <input 
            type='text'
            placeholder='Hospital Name'
            value={hospitalData.hospitalName}
            onChange={(e) => setHospitalData({...hospitalData, hospitalName:e.target.value})}
          />

          <button type='submit'>Remove Hospitals</button>
        </form>
    </div>
    
  )
}