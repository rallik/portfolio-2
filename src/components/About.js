import React, {useEffect, useRef} from 'react';
import { Link, graphql } from 'gatsby';
import Tools from '../components/Tools';
import StickyHeader from '../components/StickyHeaders'
import about from '../pages/about';

const About = () => {
    const { aboutRef, isSticky } = StickyHeader();
    return (
        <section className='section about'>
            <h2 className={isSticky ? 'about-header stuck' : 'about-header unstuck'}
            >
                About
            </h2>
            <p className='about-text' ref={aboutRef}>
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
