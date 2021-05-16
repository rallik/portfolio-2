import React from 'react';
import { Link } from 'gatsby';

const Contact = () => {
    return (
        <section className='contact'>
            <h2 className='in-touch'>Get in touch.</h2>
            <h3 className='in-touch-how'>
                <a className='send-email' href="mailto:allikreuben@gmail.com">
                    Send me an email
                </a>
                or start a conversation by filling out the form (click the button below)
            </h3>
            <button className='contact-btn'>
                <Link to='/contact'>Contact Me</Link>
            </button>
        </section>
    )
}

export default Contact
