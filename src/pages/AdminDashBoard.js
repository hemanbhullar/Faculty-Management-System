import React, { useState } from 'react'
import Sidebar from '../component/Sidebar/Sidebar'
import MainDash from '../MainDash/MainDash'
import RightSide from '../component/RightSide/RightSide'
import FacultyList from '../MainDash/FacultyList'
import Assignments from '../MainDash/Assignments'
import Analytics from '../MainDash/Analytics'
import Feedback from '../MainDash/Feedback'
import './Admin.css'

const AdminDashBoard = () => {
  // Use state to manage the content to be displayed in the middle
  const [content, setContent] = useState("dashboard"); // Default content

  // Define components for different content sections
  const components = {
    dashboard: <MainDash key="dashboard" />,
    facultyList: <FacultyList key="facultyList" />,
    assignments: <Assignments key="assignments" />,
    analytics: <Analytics key="analytics" />,
    rating: <Feedback key="feedback" />
    // Add more content components as needed
  };
  return (
    <div className='Admin'>
      <div className='AdminGlass'>
      <Sidebar setContent={setContent} />
       <div className="content">{components[content]}</div>
       <RightSide/>
      </div>
    </div>
  )
}

export default AdminDashBoard