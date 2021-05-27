import React, { useState } from 'react'
import { Link } from 'gatsby'
import Menu from '../assets/svg/menu.svg'
import MenuX from '../assets/svg/menuX.svg'
import Social from './Social'
import Navlist from './Navlist'


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
                <Navlist name={'nav-elements mobile'} elname={'nav-element-li'}/>
                <Social name={'social-links mobile'}/>
            </nav>
        </React.Fragment>
        
    )
}

export default Nav
