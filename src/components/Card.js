import React from 'react'
import { Link, graphql } from 'gatsby';


const Card = (props) => {
    const { cardclass,  header } = props;
    return (
        <article className={cardclass + ' ' + 'project-card'}>
            <h3 className='project-card-head'>{header}</h3>
            <img className='project-card-mockup'></img>
            <button className='project-card-details-btn'>
                <Link to='/projects'>Details</Link>
            </button>
        </article>
        
    )
}

export default Card
