import React from 'react'
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ProjExternalLinks from './ProjExternalLinks'







const Card = ({ data, page }) => {
    const cardImg = getImage(data.childImageSharp)
    console.log(cardImg)

    const { id, title, gitlink, livelink, cardimg: { alt } } = data;
    const slug = id;

    return (
        <article className={page ? 'project-card' : 'home-card project-card'}>
            <div className='project-card-info-wrapper'>
                <h3 className='project-card-head'>{title}</h3>
                <ProjExternalLinks
                    card_or_proj={'card'} 
                    proj_id={id}
                    proj_gitlink={gitlink}
                    proj_livelink={livelink}
                />
                <button className='btn project-card-details-btn' aria-controls={`${id}-details-btn`}>
                    <Link id={`${id}-details-btn`} to={`/projects/${slug}/`} aria-label={`more info about ${id}`}>Project details</Link>
                </button>
            </div>
            <GatsbyImage className='project-card-mockup' image={cardImg} alt={alt} imgStyle={{objectFit: "contain"}}/>
        </article>
        
    )
}

export default Card
