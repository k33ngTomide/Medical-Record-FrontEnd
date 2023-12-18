import logo from '../logo.svg'

export function FirstPage(){

  return (
    <div className="first-page">
      <h1>Standard Med</h1>
      <p className='moto'>Keep your patients with you Everytime and EveryWhere</p>
      <img src={logo} alt="Logo" className="App-logo"/>


      <div className='first-page-buttons'>
        <button>SignUp</button>
        <button>Login</button>
      </div>

    </div>
  )

}


export default FirstPage;

