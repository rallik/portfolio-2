import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../layouts/layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import '../styles/styles.scss'


const index = ({ location, data }) => {
  console.log(data)
  return (
    <main className='home-page' aria-label='home page'>
      <Layout location={location}>
        <Hero />
        <About />
        <Projects location={location} data={data}/>
      </Layout>
    </main>
  )
}

export const query = graphql`
{
  projectCards: allProjectsJson(filter: {onhome: {eq: true}}) {
    nodes {
      id
      title
      subtitle
      gitlink
      livelink
      cardimg {
        alt
        img
      }
      tooltags {
        tag
      }
      otherimg {
        alt
        img
      }
      description {
        p
      }
      nextsteps
    }
  }
  cardImgs: allFile(filter: {name: {glob: "*home*"}}) {
    nodes {
      base
      childImageSharp {
        id
        gatsbyImageData(
          placeholder: TRACED_SVG
          sizes: "100px, 200px, 300px, 400px"
          breakpoints: 4
        )
      }
    }
  }
}
`

export default index
