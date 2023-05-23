import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './SidebarButton.scss'
import { IconContext } from 'react-icons'
export default function SidebarButton(props) {

    // to get the current location 
    var location= useLocation();

    // it chwck the location of prop ans addressbar
    var isActive = location.pathname === props.to;

    var btnClass = isActive? "btnBody active": "btnBody";
    return (
        <Link to={props.to} >
            <div className={btnClass}>
                <IconContext.Provider value={{size: '24px', classNameL: "btnICon"}}>
                {props.icon}
                <p className='btnTitle'>{props.title}</p>
                </IconContext.Provider>
            </div>
        </Link>
    )
}
