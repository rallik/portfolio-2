import React from 'react'
import { Link, graphql } from 'gatsby';


//to-do demostrate accessibility with hover effect

const Hero = () => {
    return (
        <section className='section hero'>
            <h2 className='hero-intro'>
                Hello! I'm Reuben Allik.<br/>
                I build
                <strong className='emp fast'> fast</strong>,
                <strong className='emp resp'> responsive</strong> &#38;
                <strong className='emp access'> accessible </strong>
                <strong className="emp">interfaces </strong>
                for the
                <strong className="emp"> web</strong>.
            </h2>
            <button className='btn my-work-btn'>
                <Link className='btn-link' to='/projects/'>My work</Link>
            </button>
        </section>
    )
}

export default Hero
