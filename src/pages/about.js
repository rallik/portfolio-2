import React from 'react'
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../layouts/layout'
import '../styles/styles.scss'



const about = ({ data, location }) => {
    console.log(data)
    const headshot = getImage(data.headshot);
    return (
        <main>
            <Layout location={location}>
                <section className='section about-page'>
                    <h1 className='about-page-head'>About me</h1>
                    <GatsbyImage className="headshot" image={headshot} alt="headshot" objectFit="contain"/>
                    <div className="about-page-text">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem ullam illo quasi esse quis est a, cum harum quisquam tempora soluta autem consequatur veniam iste magnam, blanditiis, quo vero? Modi?
                        Nesciunt incidunt placeat ipsa recusandae odit ea, fugit ipsam quas, eaque eius iste temporibus at soluta magni atque rem magnam praesentium a. Consectetur vero sint obcaecati accusantium at repudiandae necessitatibus?
                        Dolore corporis aperiam dolor adipisci vero repudiandae, officiis expedita soluta? Delectus ullam iste necessitatibus! Rerum, dolore. Quo debitis doloremque nisi ea sunt, eveniet impedit incidunt. Animi cumque ipsum et ratione.</p>
                    </div>
                </section>
            </Layout>
        </main>
    )
}

export const query = graphql`
  {
    headshot: file(relativePath: {eq: "headshot.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
  }
`

export default about
