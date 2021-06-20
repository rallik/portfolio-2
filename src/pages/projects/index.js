import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../../layouts/layout'
import ProjectCards from '../../components/ProjectCards'

import '../../styles/styles.scss'


const projects = ({ location, data }) => {
    console.log(data)
    return (
        <main>
            <Layout location={location}>
                <section className='section projects-page'>
                    <h1 className='projects-p-header heading-t'>Projects</h1>
                    <ProjectCards styles={{ gridRow: 2 / -2 }} location={location} data={data}/>
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
      cardimg {
        alt
        img
      }
      tooltags {
        tag
      }
    }
  }
  cardImgs: allFile(filter: {name: {glob: "*card*"}}) {
    nodes {
      base
      childImageSharp {
        id
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
}
`

export default projects
