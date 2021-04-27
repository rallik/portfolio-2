import React from 'react'
import { Link, graphql } from 'gatsby';


const myName = 'Hi, my name is Reuben Allik'


const Hero = () => {
    return (
        <section className='section hero'>
            <h3 className='my-name'>{myName}</h3>
            <h2 className='what-i-do'>
                I build
                <strong className='emp'> fast</strong>,
                <strong className='emp'> responsive</strong>, and 
                <strong className='emp'> accessible </strong>
                interfaces for the web
            </h2>
            <button className='my-work-btn'>
                <Link to='/projects'>My work</Link>
            </button>            
        </section>
    )
}

export default Hero
