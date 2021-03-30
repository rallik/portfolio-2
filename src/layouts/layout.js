import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer/>
        </React.Fragment>
    )
}

export default layout
