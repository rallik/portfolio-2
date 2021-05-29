import React from 'react'
import { Link } from 'gatsby'


const Navlist = ({ name, elname }) => {
    console.log(elname)
    return (
        <ul className={name}>
            <li className={elname}>
                <Link to='/'>Home</Link>
            </li>
            <li className={elname}>
                <Link activeClassName="active-link" to='/about'>About</Link>
            </li>
            <li className={elname}>
                <Link activeClassName="active-link" to='/projects'>Projects</Link>
            </li>
            {/* <li className={elname}>
                <Link activeClassName="active-link" to='/photos'>Photos</Link>
            </li> */}
            <li className={elname}>
                <Link activeClassName="active-link" to='/contact'>Contact</Link>
            </li>
        </ul>
    )
}

export default Navlist
