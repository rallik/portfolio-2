import React from 'react'
import Layout from '../layouts/layout'
import ProjectCards from '../components/ProjectCards'

import '../styles/styles.scss'


const projects = ({ location }) => {
    return (
        <main>
            <Layout location={location}>
                <section className='section projects-page'>
                    <h1>Projects</h1>
                    <ProjectCards styles={{ gridRow: 2 / -2}} location={location}/>
                </section>
            </Layout>
        </main>
    )
}

export default projects
