import React from 'react'
import Layout from '../layouts/layout'
import ProjectCards from '../components/ProjectCards'

import '../styles/styles.scss'


const projects = ({ location }) => {
    return (
        <main className='section projects-page'>
            <Layout location={location}>
                <h1>Projects</h1>
                <ProjectCards styles={{ gridRow: 2 / -2}} />
            </Layout>
        </main>
    )
}

export default projects
