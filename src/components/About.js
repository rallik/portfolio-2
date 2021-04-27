import React from 'react';
import { Link, graphql } from 'gatsby';
import Tools from '../components/Tools';

const About = () => {
    return (
        <section className='section about'>
            <h2 className='about-header'>About</h2>
            <p className='about-text'>
                Hello! I'm a 2020 graduate of Boston College where
                I studied Economics, Computer Science, and Marketing.
                Currently, I’m currently seeking opportunities in Front
                End Development or Software Engineering Role. In my
                free time I take photos.
            </p>
            
            <button className='details-btn'>
                <Link  to='/about'>Details</Link>
            </button>
            
            <Tools />
        </section>
    )
}

export default About
