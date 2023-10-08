import React, { useState } from 'react'
import { SidebarData } from '../Data/Data';
import "./Sidebar.css"
import { Link } from 'react-router-dom';
import { UilSignOutAlt } from '@iconscout/react-unicons';
const Sidebar = ({setContent}) => {

    const [selected, setSelected] = useState(0);
  return (
    <div className='Sidebar'>

        {/* menu */}
        <div className='menu'>
            {SidebarData.map((item, index)=> {
                return(
                    <div className={selected===index?'menuItem active': 'menuItem'}
                    onClick={()=>{setSelected(index);setContent(item.component)}}
                    key={index}>
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </div>
                )
            })}

            <div className='menuItem'>
                <Link to='/' style={{textDecoration:'none', color:'black'}}><UilSignOutAlt/></Link>
            </div>
        </div>
    </div>
  )
}

export default Sidebar