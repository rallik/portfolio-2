import React from 'react'
import { graphql, Link } from 'gatsby';
import Layout from '../../layouts/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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
                <section className='section individual-proj'>
                <h1 className='heading-t individual-proj-head'>{project.title}</h1>
                <h2 className='individual-proj-sub'>{project.subtitle}</h2>
                <ul className='proj-img-gallery'>
                {
                  filteredpics.map((pic) => {
                    const picdata = getImage(pic)
                    return (
                      <li key={pic.name} className='proj-img-gallery-li'>
                        <GatsbyImage className='proj-img' image={picdata} alt={pic.name} objectFit="contain"></GatsbyImage>
                      </li>
                    );
                      })
                }
                </ul>
                <div className='proj-desc'>
                {
                project.description.map((desc) =>
                  <p key={new Date().getMilliseconds} className='proj-desc-p'>{desc.p}</p>
                )
                }
                </div>

                <button className='btn individual-proj-btn'>
                    <Link to='/projects'>Back to Projects</Link>
                </button>
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
