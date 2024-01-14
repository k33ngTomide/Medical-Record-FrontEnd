import profile from '../assets/profile_dummy.png'

export function RightDashBoard(){

  return (
    <div className='right-dashboard'>
      <div className='home' id='home'>
        <div className='welcome'>
          <h1 className='username'>Welcome <span>Username</span></h1>
        </div>

        <div className="details-pane">
          <div className="details-info">
            <h1>Patients</h1>
            <h1>23</h1>
          </div>

          <div className="details-info">
            <h1>Hospitals</h1>
            <h1>23</h1>
          </div>

          <div className="details-info">
            <h1> Medical History</h1>
            <h1>230</h1>
          </div>

          <div className="details-info">
            <h1> Medical History</h1>
            <h1>230</h1>
          </div>

        </div>
      </div>
      
      <div className='profile-pane' id='profile'>

        <img src={profile} alt='profile' />
        <button>Change Image</button>

        <div>
          <h1>Name: <span>Username</span></h1>
          <p>Specialization: <span>Specialization</span></p>
          <p>License: <span>License</span></p>
          <p>Status: <span>Active</span></p>
        </div>

      </div>

      <div className='patients' id='patients'>
        <button id='add-patient'>Add Patients</button>
      </div>

      <div className='hospitals' id='hospitals'>
        <button id='add-hospital'>Add hospitals</button>
      </div>

      <div className='helps' id='helps'>
        <h2>Welcome to Standard Med Support center</h2>

        <div className='report' id='report-pane'>
          <h4>Report your issues here</h4>
          <select>
            <option>Select</option>
            <option>Installation and Account Setup</option>
            <option>Navigating the App</option>
            <option>Error Messages</option>
            <option>Feedback and Suggestions</option>
            <option>Need Technical Support</option>
            <option>Feature Requests</option>
            <option>Common Issues</option>
          </select>

          <textarea rows={10} cols={40} />
          <button>Submit</button>

        </div>


        <p>Follow Us:
          Stay connected with us on social media for updates, tips, and community highlights.<br/>
          Subscribe to our newsletter for the latest news and exclusive content.
          Thank you for choosing Standard Med! We are here to ensure you have a seamless experience. If you can't find the information you need, don't hesitate to reach out to our support team. Your satisfaction is our priority.
        </p>

      </div>
    </div>
  )

}