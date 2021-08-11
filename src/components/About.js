import React from 'react';
import { Link } from 'gatsby';
import Tools from './Tools';

const About = () => {

    return (
        <section className='section about' aria-label='about me and tools i use'>
            <h2 className='about-header heading-t unstuck'>
                About
            </h2>
            <p className='about-text-home'>
                I'm a Boston-based Front-end developer.
                In my free time I love taking photos, kayaking,
                and hiking.
            </p>
            <button className='btn abt-details-btn' aria-controls='about-page-btn'>
                <Link id='about-page-btn' to='/about' aria-label='about page from home'>More info</Link>
            </button>
            <Tools />
        </section>
    )
}


export default About
