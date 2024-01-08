import './SignUp';
import './Login';
import { LeftDashBoard } from './LeftDashBoard';
import { RightDashBoard } from './RightDashBoard';
import '../styles/dashboard.css';


export function DashBoard(){
  

  return (
    <div className='dashboard'>
      <LeftDashBoard/>
      <RightDashBoard/>
    </div>
  )
}