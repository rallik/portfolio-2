import React from 'react';
import { Link } from 'gatsby';

const Contact = () => {
    return (
        <section className='section contact' aria-label='contact section with link to form'>
            <h2 className='in-touch heading-t'>Get in touch</h2>
            <h3 className='in-touch-how'>
                <a className='send-email' href="mailto:allikreuben@gmail.com">
                    Send me an email
                </a>
                &nbsp;or start a conversation by filling out the form (click the button below)
            </h3>
            <button className='btn contact-btn' aria-controls='to-form-btn'>
                <Link id='to-form-btn' to='/contact'>To form</Link>
            </button>
        </section>
    )
}

export default Contact
