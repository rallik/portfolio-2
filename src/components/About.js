import React from 'react';
import { Link, graphql } from 'gatsby';
import Tools from '../components/Tools';

const About = () => {
    return (
        <section className='section about'>
            <h2 className='about-header'>About</h2>
            <p className='about-text'>
                I'm a Boston-based Front-end developer,
                currently seeking opportunities in the field.
                In my free time I love taking photos, kayaking,
                and hiking.
                
            </p>
            
            <button className='details-btn'>
                <Link to='/about'>Details</Link>
            </button>
            
            <Tools />
        </section>
    )
}

export default About
