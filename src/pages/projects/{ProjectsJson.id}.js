import React from 'react'
import Layout from '../../layouts/layout'

const ProjectTemplate = (props) => {
    console.log(props)
    const { location } = props;
    return (
        <main>
            <Layout location={location}>
                <section className='section'>
                    <h2>project template</h2>
                </section>
            </Layout>
        </main>
    )
}

export default ProjectTemplate
