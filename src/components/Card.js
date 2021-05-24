import React from 'react'
import { Link, graphql } from 'gatsby';


const Card = (props) => {
    const { header } = props;
    return (
        <article className='project-card'>
            <h3 className='project-card-head'>{header}</h3>
            <div className='project-card-mockup'></div>
            <button className='project-card-details-btn'>
                <Link to='/projects'>Details</Link>
            </button>
        </article>
        
    )
}

export default Card
