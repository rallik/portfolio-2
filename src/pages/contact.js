import React from 'react';
import Layout from '../layouts/layout'
import Form from '../components/Form'

const contact = () => {
    return (
        <main className='section contact-page'>
            <Layout>
                <div className='box-upper'></div>
                <h1 className='contact-page-head'>Say hello</h1>
                <div className='box-lower'></div>
                <Form />
            </Layout>
        </main>
    )
}

export default contact
