import React from 'react'
import { Link, graphql } from 'gatsby';
import ProjectCards from './ProjectCards'

const Projects = (props) => {
    console.log(props)
    return (
        <section className="section projects">
            <h2 className='projects-header'>Recent Projects</h2>
            <ProjectCards {...props}/>
            
            <button className='more-projects my-work-btn'>
                <Link to='/projects'>All projects</Link>
            </button>
        </section>
    )
}

export default Projects
