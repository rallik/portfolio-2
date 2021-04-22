import React, { useState } from 'react'
import LinkedinLogo from '../assets/linkedin.svg'
import GithubLogo from '../assets/github.svg'
import TwitterLogo from '../assets/twitter.svg'
import InstagramLogo from '../assets/instagram.svg'
import SocialMobile from '../assets/social.svg'
import SocialMobileX from '../assets/socialX.svg'


const Social = () => {
    const [ clicked, setClicked ] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
        // console.log(clicked)
    }

    return (
        <React.Fragment>
            <i className={clicked ? 'social-icon active' : 'social-icon'} onClick={handleClick}>
                {clicked ? <SocialMobileX/> : <SocialMobile/>}
            </i>
            <section className={clicked ? 'social-links active' : 'social-links'}>
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
        </React.Fragment>
        
    )
}

export default Social
