import React from 'react'
import { Link } from 'gatsby';
import ProjectCards from './ProjectCards'

const Projects = (props) => {
    console.log(props)
    return (
        <section className="section projects" aria-label='recent projects section'>
            <h2 className='projects-header heading-t'>Recent Projects</h2>
            <ProjectCards {...props}/>
            <button className='btn my-work-btn more-projects' aria-controls='all-projects-btn'>
                <Link id='all-projects-btn' to='/projects/' aria-label='projects page from home page'>All projects</Link>
            </button>
        </section>
    )
}

export default Projects
