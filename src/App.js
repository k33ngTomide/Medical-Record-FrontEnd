import './App.css';
import './styles/signup.css'
import './styles/login.css'
import FirstPage from './components/FirstPage';
import Signup from './components/SignUp';
import Login from './components/Login';
import { DashBoard } from './components/Dashboard';

function App() {
  return (
   <div className='App'>
    <FirstPage/>
    <Signup/>
    <Login/>
    <DashBoard/>
   </div>
  );
}

export default App;
