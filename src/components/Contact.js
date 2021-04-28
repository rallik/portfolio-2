import React from 'react';
import { Link } from 'gatsby';

const Contact = () => {
    return (
        <section className='contact'>
            <h2>Get in touch.</h2>
            <button className='contact-btn'>
                <Link to='/contact'>Contact Me</Link>
            </button>
        </section>
    )
}

export default Contact
