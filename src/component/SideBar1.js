import React from 'react'
import "./SideBar1Style.css";

const SideBar1 = ({setContent}) => {
  return (
    <div className='sidebar1'>
       <h6>menu</h6>

       <button onClick={() => {setContent("personalInformation")}}>Personal Information</button>
       <button onClick={() => {setContent("educationBackground")}}>Education Background</button>
       <button onClick={() => {setContent("professionalInformation")}}>Professional Information</button>
    </div>
  )
}

export default SideBar1