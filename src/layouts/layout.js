import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Social from '../components/Social'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const layout = ({ children, location }) => {
    return (
        <React.Fragment>
            <Header />
            <Nav />
            {children}
            {location.pathname === "/contact" ? "" : <Contact />}
            <Footer />
            <Social name={'social-links'} />
        </React.Fragment>
    )
}

export default layout
