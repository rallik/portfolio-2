import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Nav/>
            {children}
            <Footer/>
        </React.Fragment>
    )
}

export default layout
