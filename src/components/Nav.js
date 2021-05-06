import React, { useState } from 'react'
import { Link } from 'gatsby'
import Menu from '../assets/svg/menu.svg'
import MenuX from '../assets/svg/menuX.svg'
import Social from '../components/Social'


const Nav = () => {
    const [ clicked, setClicked ] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }



    return (
        <React.Fragment>
            <i className={clicked ? 'nav-icon active' : 'nav-icon'} onClick={handleClick}>
                <Menu/>
            </i>
            <nav className={clicked ? 'navbar active' : 'navbar'}>
                <ul className={clicked ? 'nav-elements active': 'nav-elements'}>
                    <li className='nav-element-li'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='nav-element-li'>
                        <Link className='nav-link' to='/about'>About</Link>
                    </li>
                    <li className='nav-element-li'>
                        <Link className='nav-link' to='/projects'>Projects</Link>
                    </li>
                    <li className='nav-element-li'>
                        <Link className='nav-link' to='/photos'>Photos</Link>
                    </li>
                    <li className='nav-element-li'>
                        <Link className='nav-link' to='/contact'>Contact</Link>
                    </li>
                </ul>
                <Social name={'social-links mobile'}/>
            </nav>
        </React.Fragment>
        
    )
}

export default Nav
