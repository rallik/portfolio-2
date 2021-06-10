import React, {useEffect, useRef} from 'react';
import { Link, graphql } from 'gatsby';
import Tools from './Tools';
// import StickyHeader from './StickyHeaders'

const About = () => {
    // const { aboutRef, isSticky } = StickyHeader();
    return (
        <section className='section about'>
            {/* <h2 className={isSticky ? 'about-header stuck' : 'about-header unstuck'}
            > */}
            <h2 className='about-header unstuck'>
                About
            </h2>
            {/* <p className='about-text' ref={aboutRef}> */}
            <p className='about-text'>
                I'm a Boston-based Front-end developer,
                currently seeking opportunities in the field.
                In my free time I love taking photos, kayaking,
                and hiking.
                
            </p>
            
            <button className='btn abt-details-btn'>
                <Link to='/about'>More info</Link>
            </button>
            
            <Tools />
        </section>
    )
}


export default About
