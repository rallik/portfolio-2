import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Social from '../components/Social'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Seo from '../components/SEO'


const layout = ({ children, location, title, description, image }) => {
    return (
        <React.Fragment>
            <Seo location={location} title={title} description={description} image={image}/>
            <Header />
            <Nav />
            {children}
            {location.pathname.includes("contact") ? "" : <Contact />}
            <Social name={'social-links'} />
            <Footer />
        </React.Fragment>
    )
}

export default layout
