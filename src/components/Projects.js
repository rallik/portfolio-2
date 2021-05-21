import React from 'react'
import { Link, graphql } from 'gatsby';
import ProjectCards from './ProjectCards'

const Projects = () => {
    return (
        <section className="section projects">
            <h2 className='projects-header'>Recent Projects</h2>
            <ProjectCards  />
            
            <button className='more-projects my-work-btn'>
                <Link to='/projects'>See more</Link>
            </button>
        </section>
    )
}

export default Projects
