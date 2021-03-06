import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../../layouts/layout'
import ProjectCards from '../../components/ProjectCards'

import '../../styles/styles.scss'


const projects = ({ location, data }) => {
    console.log(data)
    return (
        <main aria-label='projects page'>
        <Layout location={location} title={"Reuben Allik's Projects"}>
                <section className='section projects-page'>
                    <h1 className='projects-p-header heading-t'>Projects</h1>
                    <ProjectCards location={location} data={data}/>
                </section>
            </Layout>
        </main>
    )
}

export const query = graphql`
{
  projectCards: allProjectsJson {
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
  
  cardImgs: allFile(filter: {name: {glob: "*card*"}}) {
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

export default projects
