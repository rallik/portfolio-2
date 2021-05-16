import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Social from '../components/Social'


const layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Nav />
            {children}
            <Social name={'social-links'} />
        </React.Fragment>
    )
}

export default layout
