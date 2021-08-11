import React from 'react'
import { Link } from 'gatsby'


const Navlist = ({ name, elname }) => {
    console.log(elname)
    return (
        <ul className={name}>
            <li className={elname}>
                <Link className='nav-link' to='/' aria-label='home page from nav'>Home</Link>
            </li>
            <li className={elname}>
                <Link className='nav-link' activeClassName='active-link' to='/about' aria-label='about page from nav'>About</Link>
            </li>
            <li className={elname}>
                <Link className='nav-link' activeClassName='active-link' to='/projects' aria-label='projects page from nav'>Projects</Link>
            </li>
            {/* <li className={elname}>
                <Link className='nav-link' activeClassName='active-link' to='/photos'>Photos</Link>
            </li> */}
            <li className={elname}>
                <Link className='nav-link' activeClassName='active-link' to='/contact' aria-label='contact page from nav'>Contact</Link>
            </li>
        </ul>
    )
}

export default Navlist
