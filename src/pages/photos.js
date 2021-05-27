import React from 'react'
import Layout from '../layouts/layout'
import '../styles/styles.scss'


const photos = () => {
    return (
        <main className='photo-page'>
            <Layout>
                <h1>Photos</h1>
                <div style={{backgroundColor: '#00ff00', width: '200px', height: '200px'}}></div>
            </Layout>
        </main>
    )
}

export default photos
