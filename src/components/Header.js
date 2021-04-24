import React from 'react'
import Logo from '../assets/svg/logo.svg'

const Header = () => {
    return (
        <header>
            <h1 hidden>Reuben Allik's Portfolio</h1>
            <Logo className='logo'/>
        </header>
    )
}

export default Header