import React, { useState, useEffect } from 'react'
import Menu from '../assets/svg/menu.svg'
import Social from './Social'
import Navlist from './Navlist'

const Nav = () => {
    const [clicked, setClicked] = useState(false);
    const openCloseNav = (e) => {
        // console.log(e)
        switch (e.type) {
            case 'click':
                setClicked(!clicked);
                break;
            case 'keydown':
                if (e?.key === 'o') {
                    setClicked(!clicked);
                };
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', openCloseNav);
        return () => {
            window.removeEventListener('keydown', openCloseNav)
        }
    });

    return (
        <React.Fragment>
            <i className={clicked ? 'nav-icon active' : 'nav-icon'} aria-label='nav-icon, o key to toggle' onKeyDown={openCloseNav} onClick={openCloseNav}>
                <Menu/>
            </i>
            <nav id='nav' className={clicked ? 'navbar active' : 'navbar'}>
                <Navlist name={'nav-elements mobile'} elname={'nav-element-li'}/>
                <Social name={'social-links mobile'}/>
            </nav>
        </React.Fragment>
    )
}

export default Nav
