import React from 'react'
import { Link } from 'gatsby'


const Navlist = ({ name, elname }) => {
    return (
        <ul className={name}>
            <li className={elname}>
                <Link to='/'>Home</Link>
            </li>
            <li className={elname}>
                <Link className='nav-link' to='/about'>About</Link>
            </li>
            <li className={elname}>
                <Link className='nav-link' to='/projects'>Projects</Link>
            </li>
            {/* <li className={elname}>
                <Link className='nav-link' to='/photos'>Photos</Link>
            </li> */}
            <li className={elname}>
                <Link className='nav-link' to='/contact'>Contact</Link>
            </li>
        </ul>
    )
}

export default Navlist
