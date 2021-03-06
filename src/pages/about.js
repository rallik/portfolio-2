import React from 'react'
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../layouts/layout'
import Social from '../components/Social'
import '../styles/styles.scss'

const resumelink = 'https://reubenallik.com';



const about = ({ data, location }) => {
    console.log(data)
    const headshot = getImage(data.headshot);
    const about = data.about.nodes;
    
    return (
        <main aria-label='about page'>
            <Layout location={location} title={'About Reuben Allik'}>
                <section className='section about-page'>
                    <h1 className='about-page-head heading-t'>About me</h1>
                    <GatsbyImage className="headshot" image={headshot} alt="headshot" objectFit="contain" />
                    <div className="about-page-text">
                        {
                            about.map((para) => {
                                return (
                                    <p className='about-page-p' key={para.id}>{para.p}</p>
                                );
                            })
                        }
                    </div>
                    {/* <button className='btn resume-btn' aria-controls='resume-link'>
                        <a id='resume-link' href={resumelink} aria-label='resume'>Resume</a>
                    </button> */}
                    <Social name={'social-links mobile'}/>
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
