import React, { useState } from 'react'
import { items } from './Navitems'
import logo from '../../Images/navlogo.svg'
import {NavLink} from 'react-router-dom'
import './navbar.css'
const Navbar = () => {

    const [isOpen, setisOpen] = useState(false)

    const handleToggle = () => {
        setisOpen(!isOpen)
    }
    return (
        <nav className="navbar_container">
            <h1 className="navbar_logo">
                AlgoTracker
           </h1>
            <div className="menu_icons" onClick={handleToggle}>
               <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={isOpen ? 'nav_menu active' : 'nav_menu'}>
                {items.map((x, index) => (
                    <li key={index}>
                        <NavLink className="nav_item" to={x.url} >{x.title}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar
