import React from 'react'
import "./ProfileStyle.css"
import SideBar1 from '../component/SideBar1'
import ProfessionalInformation from '../component/ProfileInformation/ProfessionalInformation';
import PersonalInformation from '../component/ProfileInformation/PersonalInformation';
import EducationalBackground from '../component/ProfileInformation/EducationalBackground';
import { useState } from 'react';

const Profile = () => {
  //manage the content to be displayed on the middle
  const[content, setContent] = useState("personalInformation");

  //Define component for different content section
  const components = {
      personalInformation: <PersonalInformation/>,
      educationBackground: <EducationalBackground/>,
      professionalInformation: <ProfessionalInformation />
  }
  return (
    <div className='profile'>
        <div className='profileInfo'>
            <div className='SideBar'> 
              <SideBar1 setContent={setContent}/>
            </div>
            <div className='content'>{components[content]} </div>
        </div>
    </div>
  )
}

export default Profile