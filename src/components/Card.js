import React from 'react'
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import GithubLogo from '../assets/svg/github.svg'
import ExternalLink from '../assets/svg/external.svg'





const Card = ({ data, page }) => {
    const cardImg = getImage(data.childImageSharp)
    console.log(cardImg)

    const { id, title, gitlink, livelink, cardimg: { alt } } = data;
    const slug = id;

    return (
        <article className={page ? 'project-card' : 'home-card project-card'}>
            <div className='project-card-info-wrapper'>
                <h3 className='project-card-head'>{title}</h3>
                <ul className="card-external-links">
                    <li className="card-external-links-li">
                        <a href={gitlink} className='card-github-link' aria-label={`${id} on github`}>
                            <GithubLogo/>
                        </a>
                    </li>
                    <li className="card-external-links-li">
                        <a href={livelink} className="card-live-link" aria-label={`${id} live application`}>
                            <ExternalLink />
                        </a>
                    </li>
                </ul>


                <button className='btn project-card-details-btn' aria-controls={`${id}-details-btn`}>
                    <Link id={`${id}-details-btn`} to={`/projects/${slug}/`} aria-label={`more info about ${id}`}>Details</Link>
                </button>
            </div>
            <GatsbyImage className='project-card-mockup' image={cardImg} alt={alt} imgStyle={{objectFit: "contain"}}/>
        </article>
        
    )
}

export default Card
