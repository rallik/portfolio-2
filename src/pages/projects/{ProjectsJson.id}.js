import React from 'react'
import { graphql, Link } from 'gatsby';
import Layout from '../../layouts/layout'

const ProjectTemplate = (props) => {
    const { location, data, params: { id } } = props
    const pictures = data.allFile.pictures;
    const project = data.projectsJson;
    const filteredpics = pictures.filter((pic) => pic.name.includes(id))
    console.log(filteredpics)
    console.log(project)

    return (
        <main>
            <Layout location={location}>
                <section className='section'>
                <button className='project-card-details-btn'>
                    <Link to='/projects'>Back to Projects</Link>
                </button>
                    <h2 style={{ color: "white" }}>{project.title}</h2>
                    
                </section>
            </Layout>
        </main>
    )
}

export const query = graphql`
query getSingleProject($id: String) {
    projectsJson(id: {eq: $id}) {
      id
      title
      subtitle
      otherimg {
        alt
        img
      }
      tooltags {
        tag
      }
      description {
        p
      }
      nextsteps
    }
    allFile(filter: {name: {ne: "headshot"}, extension: {in: ["jpg", "png"]}}) {
        pictures: nodes {
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
  }`

export default ProjectTemplate
