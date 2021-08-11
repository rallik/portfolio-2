import React from 'react'
import Logo from '../assets/svg/logo.svg'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header className='header'>
            <h1 hidden>Reuben Allik's Portfolio</h1>
            <Link to="/" aria-label='home page from logo'>
                <Logo className='logo' />
            </Link>
        </header>
    )
}

export default Header