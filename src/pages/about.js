import React from 'react'
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../layouts/layout'
import '../styles/styles.scss'

const resumelink = '../assets/images/favicon.png'



const about = ({ data, location }) => {
    console.log(data)
    const headshot = getImage(data.headshot);
    const about = data.about.nodes;
    
    return (
        <main>
            <Layout location={location}>
                <section className='section about-page'>
                    <h1 className='about-page-head heading-t'>About me</h1>
                    <GatsbyImage className="headshot" image={headshot} alt="headshot" objectFit="contain" />
                    <button className='btn resume-btn'>
                        <a href={resumelink}>Resume</a>
                    </button>
                    <div className="about-page-text">
                        {
                            about.map((para) => {
                                return (
                                    <p className='about-page-p' key={para.id}>{para.p}</p>
                                );
                            })
                        }
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
    about: allAboutJson {
      nodes {
        id
        p
      }
    }
  }
`

export default about
