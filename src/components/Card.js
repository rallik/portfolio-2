import React from 'react'
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const Card = ({ data }) => {
    const cardImg = getImage(data.childImageSharp)
    console.log(cardImg)

    const { id, title, tooltags, cardimg: { alt } } = data;
    const slug = id;

    return (
        <article className='project-card'>
            <h3 className='project-card-head'>{title}</h3>
            <GatsbyImage className='project-card-mockup' image={cardImg} alt={alt}/>
            <button className='project-card-details-btn'>
                <Link to={`/projects/${slug}/`}>Details</Link>
            </button>
        </article>
        
    )
}

export default Card
