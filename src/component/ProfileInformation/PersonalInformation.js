import React from 'react'
import "./PersonalStyle.css"
import { BiMailSend } from "react-icons/bi";

const PersonalInformation = () => {
  return (
    <div className='personalInformation'>
      <div className='personalContainer'>
        <h4>Personal Information:</h4>
        <div className='name'>
          <div>
            <img src="https://media.licdn.com/dms/image/D4D03AQEVGlheMFRE8A/profile-displayphoto-shrink_800_800/0/1679758221275?e=2147483647&v=beta&t=jeNR1kuF--x2hOncSwFCvDrS0BclQ54sgrA4ZGTP6MA"
        alt="Profile"></img><span style={{fontWeight:'600',margin:'10px', textShadow:'2px 2px 8px #FF0000'}}>Profile Picture</span>
        </div>
          <div className='uploadAndDelete'>
            <button>Upload new picture</button>
            <button>Delete</button>
          </div>
        </div>
        <div>
          <h4>Full name</h4>
          <div className='full-name'>
            <div><p>First name</p><input type="text" value={'Heman'} disabled style={{color:'black'}} /></div>
            <div><p>Last  name</p><input type="text" value={'Bhullar'} disabled style={{color:'black'}} /></div>
          </div>
        </div>
      </div>
      <div className='personalContainer'>
        <h4>Contact email</h4>
        <div className='name'>
        <div>
          <div className='full-name'>
            <div><p>Email</p><span className='email'><BiMailSend style={{margin:'10px'}}/>heman@gmail.com</span> <button>Add  another email</button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PersonalInformation