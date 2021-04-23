import React from 'react'

const myName = 'Hi, my name is Reuben Allik'


const Hero = () => {
    return (
        <section className='hero'>
            <h3 className='my-name'>{myName}</h3>
            <h2 className='what-i-do'>
                I build <br/>
                <strong className='emp'> fast</strong>,
                <strong className='emp'> responsive</strong>, and 
                <strong className='emp'> accessible </strong><br/>
                interfaces for the web
            </h2>
            <button className='my-work-btn'>
                My Work
            </button>            
        </section>
    )
}

export default Hero
