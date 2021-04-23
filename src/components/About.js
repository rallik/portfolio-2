import React from 'react'
import { Link, graphql } from 'gatsby'

const About = () => {
    return (
        <section className='about'>
            <h2>About</h2>
            <p className='about-text'>
                Hello! I'm a 2020 graduate of Boston College where
                I studied Economics, Computer Science, and Marketing.
                Currently, I’m currently seeking opportunities in Front
                End Development or Software Engineering Role. In my
                free time I take photos.
            </p>
            
            <Link to='/about'>Details</Link>
            
        </section>
    )
}

export default About
