import React from 'react'
import { Link, graphql } from 'gatsby';
import ProjectCards from './ProjectCards'

const Projects = () => {
    return (
        <section className="section projects">
            <h2>Recent Projects</h2>
            <ProjectCards />
            
            <button className='my-work-btn'>
                <Link to='/projects'>See more</Link>
            </button>
        </section>
    )
}

export default Projects
