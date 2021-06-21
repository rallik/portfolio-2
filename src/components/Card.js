import React from 'react'
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const Card = ({ data, page }) => {
    const cardImg = getImage(data.childImageSharp)
    console.log(cardImg)

    const { id, title, tooltags, cardimg: { alt } } = data;
    const slug = id;

    return (
        <article className={page ? 'project-card' : 'home-card project-card'}>
            <div className='project-card-info-wrapper'>
                <h3 className='project-card-head'>{title}</h3>
                <button className='btn project-card-details-btn'>
                    <Link to={`/projects/${slug}/`}>Details</Link>
                </button>
            </div>
            <GatsbyImage className='project-card-mockup' image={cardImg} alt={alt} imgStyle={{objectFit: "contain"}}/>

        </article>
        
    )
}

export default Card
