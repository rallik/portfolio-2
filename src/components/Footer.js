import React from 'react'
import Navlist from './Navlist'

const Footer = () => {
    return (
        <footer className='footer'>
            <h3 className='copyright'>© Reuben Allik</h3>
            <Navlist name={'footer-sitemap-mobile'} elname={'footer-sitemap-mobile-li'}/>
        </footer>
    )
}

export default Footer