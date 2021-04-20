import React, { useState } from 'react'
import { Link } from 'gatsby'
import Menu from '../assets/menu.svg'
import MenuX from '../assets/menuX.svg'


const Nav = () => {
    const [ clicked, setClicked ] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }



    return (
        <nav className='navbar'>
            <i className='menu-icon' onClick={handleClick}>
                {clicked ? <MenuX/> : <Menu/>}
            </i>
            <ul className='nav-elements'>
                <li className='nav-element-li'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='nav-element-li'>
                    <Link to='/about'>About</Link>
                </li>
                <li className='nav-element-li'>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li className='nav-element-li'>
                    <Link to='/photos'>Photos</Link>
                </li>
                <li className='nav-element-li'>
                    <Link to='/contact'>Contact</Link>
                </li>
           </ul>
        </nav>
    )
}

export default Nav
