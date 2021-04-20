import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Social from '../components/Social'


const layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Nav />
            {children}
            <Social />
            <Footer />
        </React.Fragment>
    )
}

export default layout
