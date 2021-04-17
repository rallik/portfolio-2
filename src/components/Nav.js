import React from 'react'
import { Link } from 'gatsby'

const Nav = () => {
    return (
        <nav className='navbar'>
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
                    <Link to='#contact'>Contact</Link>
                </li>
           </ul>
        </nav>
    )
}

export default Nav
