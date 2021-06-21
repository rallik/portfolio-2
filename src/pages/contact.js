import React from 'react';
import Layout from '../layouts/layout'
import Form from '../components/Form'
import '../styles/styles.scss'


const contact = ({ location }) => {
    console.log(location)
    return (
        <main>
            <Layout location={location}>
                <section className='section contact-page'>
                    <h1 className='heading-t contact-page-head'>Say hello</h1>
                    <Form />
                </section>
            </Layout>
        </main>
    )
}

export default contact
