import React from 'react'
import { Link } from 'gatsby';

//to-do demostrate accessibility with hover effect

const Hero = () => {
    return (
        <section className='section hero' aria-label='hero section'>
            <h2 className='hero-intro'>
                <span className='name'>Hello! I'm </span>
                Reuben Allik. <br/>
                I build
                <strong className='emp fast'> fast</strong>,
                <strong className='emp resp'> responsive</strong> &#38;<br/>
                <strong className='emp access'> accessible </strong>
                <strong className="emp">interfaces </strong>
                for the
                <strong className="emp"> web</strong>.
            </h2>
            <button className='btn my-work-btn' aria-controls='my-work-btn'>
                <Link id='my-work-btn' className='btn-link' to='/projects/' aria-label='projects page from home page hero'>My work</Link>
            </button>
        </section>
    )
}

export default Hero
