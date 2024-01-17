import { useState } from "react"


export function AddHospitalForm(){

  const [hospitalData, setHospitalData] = useState({
    hospitalName: '',
    hospitalAddress:'',
    hospitalPhone: '',
  })


  return(
    <div>
      <form method='post' className='add-patient-form'>
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

        <button type='submit'>Add Hospitals</button>
      </form>
    </div>
    
  )
}