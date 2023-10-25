import React from 'react'
import Container from 'react-bootstrap/Container';
import Sidebar from '../component/Sidebar/Sidebar';
import RightSide from '../component/RightSide/RightSide'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar1 from '../component/SideBar1';
import FacultyContent from '../component/FacultyContent';

const FacultyDashBoard = () => {
  return (
    <div className='Admin'>
      <div className='AdminGlass'>
      <Sidebar/>
       <div className="content"></div>
       <RightSide/>
      </div>
    </div>
  )
}

export default FacultyDashBoard