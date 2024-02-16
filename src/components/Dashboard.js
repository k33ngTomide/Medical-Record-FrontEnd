import './SignUp';
import './Login';
import { LeftDashBoard } from './LeftDashBoard';
import { RightDashBoard } from './RightDashBoard';
import '../allstyles/dashboard.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';


export function DashBoard(){
  const navigate = useNavigate();

  useEffect(() => {
    const doctorName = localStorage.getItem('stdmeduname');
    if(!doctorName){
      navigate('/');
    }
  })
  

  return (
    <div className='dashboard'>
      <LeftDashBoard/>
      <RightDashBoard/>
    </div>
  )
}