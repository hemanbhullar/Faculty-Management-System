import React, { useState } from 'react'
import { SidebarData } from '../Data/Data';

import "./Sidebar.css"
import { UilSignOutAlt } from '@iconscout/react-unicons';
const Sidebar = () => {

    const [selected, setSelected] = useState(0);
  return (
    <div className='Sidebar'>

        {/* menu */}
        <div className='menu'>
            {SidebarData.map((item, index)=> {
                return(
                    <div className={selected===index?'menuItem active': 'menuItem'}
                    onClick={()=>setSelected(index)}
                    key={index}>
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </div>
                )
            })}

            <div className='menuItem'>
                <UilSignOutAlt/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar