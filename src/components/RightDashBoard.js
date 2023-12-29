import profile from '../logo-used.png'

export function RightDashBoard(){

  return (
    <div className='right-dashboard'>
      <div className='welcome'>
        <h1 className='username'>Welcome <span>Username</span></h1>
      </div>

      <div className="details-pane">
        <div className="details-info">
          <h2>Patients</h2>
          <h1>23</h1>
        </div>

        <div className="details-info">
          <h2>Hospitals</h2>
          <h1>23</h1>
        </div>

        <div className="details-info">
          <h2> Medical History</h2>
          <h1>230</h1>
        </div>

        <div className="details-info">
          <h2> Medical History</h2>
          <h1>230</h1>
        </div>

      </div>

      <div className='profile-pane'>

        <img src={profile} alt='profile' />
        <>
          <h1>Name: <span>Username</span></h1>
          <p></p>

        </>

      </div>

      <div className='patients'>

      </div>
    </div>
  )

}