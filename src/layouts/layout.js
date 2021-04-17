import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Contact from '../components/Contact'


const layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Nav />
            {children}
            <Contact/>
            <Footer />
        </React.Fragment>
    )
}

export default layout
