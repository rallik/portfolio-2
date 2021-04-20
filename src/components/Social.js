import React from 'react'
import LinkedinLogo from '../assets/linkedin.svg'
import GithubLogo from '../assets/github.svg'
import TwitterLogo from '../assets/twitter.svg'
import InstagramLogo from '../assets/instagram.svg'

const Social = () => {
    return (
        <section className='social-links'>
            <ul className='social-links-list'>
                <li className="social-links-el">
                    <a href="https://www.linkedin.com/in/reuben-allik/">
                        <LinkedinLogo/>
                    </a>
                </li>
                <li className="social-links-el">
                    <a href="https://github.com/rallik">
                        <GithubLogo />
                    </a>
                </li>
                <li className="social-links-el">
                    <a href="https://twitter.com/reubenallik">
                        <TwitterLogo/>
                    </a>
                </li>
                <li className="social-links-el">
                    <a href="https://www.instagram.com/rallikphoto/">
                        <InstagramLogo/>
                    </a>
                </li>

            </ul>
        </section>
    )
}

export default Social
