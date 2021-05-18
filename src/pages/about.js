import React from 'react'
import Layout from '../layouts/layout'
import Image from 'gatsby-image'
import Headshot from '../assets/images/headshot.jpg'

const about = () => {
    return (
        <main className='section about-page'>
            <Layout>
                <img src="images/headshot.jpg" alt="me"/>
                <h1 className='about-page-head'>About me</h1>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem ullam illo quasi esse quis est a, cum harum quisquam tempora soluta autem consequatur veniam iste magnam, blanditiis, quo vero? Modi?
                    Nesciunt incidunt placeat ipsa recusandae odit ea, fugit ipsam quas, eaque eius iste temporibus at soluta magni atque rem magnam praesentium a. Consectetur vero sint obcaecati accusantium at repudiandae necessitatibus?
                    Dolore corporis aperiam dolor adipisci vero repudiandae, officiis expedita soluta? Delectus ullam iste necessitatibus! Rerum, dolore. Quo debitis doloremque nisi ea sunt, eveniet impedit incidunt. Animi cumque ipsum et ratione.</p>
                </div>
            </Layout>
        </main>
    )
}

export default about
