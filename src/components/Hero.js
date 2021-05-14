import React from 'react'
import { Link, graphql } from 'gatsby';


const Hero = () => {
    return (
        <section className='section hero'>
            <h3 className='my-name'>
                Hi<span className='opposite-b'>,</span> my name is Reuben Allik<span className='opposite-b'>.</span>
            </h3>
            <h2 className='what-i-do'>
                I build
                <strong className='emp'> fast</strong><span className='opposite-w'>,</span>
                <strong className='emp'> responsive</strong><span className='opposite-w'> &#38;</span> 
                <strong className='emp'> accessible </strong> 
                interfaces for the web<span className='opposite-w'>.</span>
            </h2>
            <button className='my-work-btn'>
                <Link to='/projects'>My work</Link>
            </button>            
        </section>
    )
}

export default Hero
