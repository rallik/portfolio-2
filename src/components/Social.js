import React from 'react'
import LinkedinLogo from '../assets/svg/linkedin.svg'
import GithubLogo from '../assets/svg/github.svg'
import TwitterLogo from '../assets/svg/twitter.svg'
import InstagramLogo from '../assets/svg/instagram.svg'
// import SocialMobile from '../assets/svg/social.svg'


const Social = ({name}) => {
    // const [ clicked, setClicked ] = useState(false);

    // const handleClick = () => {
    //     setClicked(!clicked);
    //     // console.log(clicked)
    // }
    // const { name } = props;

    return (
        <React.Fragment>
            {/* <i className={clicked ? 'social-icon active' : 'social-icon'} onClick={handleClick}>
                {clicked ? <SocialMobileX/> : <SocialMobile/>}
            </i> */}
            {/* <section className={clicked ? 'social-links active' : 'social-links'}> */}
            <section className={name}>
                <ul className='social-links-list'>
                    <li className="social-links-el">
                        <a href="https://www.linkedin.com/in/reuben-allik/" aria-label='linkedin'>
                            <LinkedinLogo/>
                        </a>
                    </li>
                    <li className="social-links-el">
                        <a href="https://github.com/rallik/" aria-label='github'>
                            <GithubLogo />
                        </a>
                    </li>
                    <li className="social-links-el">
                        <a href="https://twitter.com/reubenallik/" aria-label='twitter'>
                            <TwitterLogo/>
                        </a>
                    </li>
                    <li className="social-links-el">
                        <a href="https://www.instagram.com/rallikphoto/" aria-label='instagram'>
                            <InstagramLogo/>
                        </a>
                    </li>
                </ul>
            </section>
        </React.Fragment>
        
    )
}

export default Social
