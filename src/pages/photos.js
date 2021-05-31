import React from 'react'
import Layout from '../layouts/layout'
import '../styles/styles.scss'


const photos = ({ location }) => {
    return (
        <main>
            <Layout location={location}>
                <section className='photo-page'>
                    <h1>Photos</h1>
                    <div style={{backgroundColor: '#00ff00', width: '200px', height: '200px'}}></div>
                </section>
            </Layout>
        </main>
    )
}

export default photos
