import React from 'react'
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../layouts/layout'
import ProjExternalLinks from '../../components/ProjExternalLinks'
import Back from '../../assets/svg/back.svg'
import '../../styles/styles.scss'

const ProjectTemplate = (props) => {
    const { location, data, params: { id } } = props
    const pictures = data.allFile.pictures;
    const project = data.projectsJson;
    const filteredpics = pictures.filter((pic) => pic.name.includes(id) && !pic.name.includes('home'))
    console.log(filteredpics)
    console.log(project)

    return (
      <main className={`${project.id}-page`}>
            <button className='btn individual-proj-btn'>
                <Link to='/projects'>
                    <Back/>
                </Link>
            </button>
            <Layout location={location} title={`${project.title}: by Reuben Allik`} description={project.subtitle}>
                <section className='section individual-proj'>
                    <h1 className='heading-t individual-proj-head'>{project.title}</h1>
                    <h2 className='individual-proj-sub'>{project.subtitle}</h2>
                    <ul className='proj-img-gallery'>
                        {
                          filteredpics.map((pic) => {
                            const picdata = getImage(pic)
                            return (
                              <li key={pic.name} className='proj-img-gallery-li'>
                                <GatsbyImage className='proj-img' image={picdata} alt={pic.name} objectFit="contain" />
                              </li>
                            );
                              })
                        }
                    </ul>
                    <div className='proj-tools-and-links'>
                        <ProjExternalLinks
                          card_or_proj={'proj'} 
                          proj_id={project.id}
                          proj_gitlink={project.gitlink}
                          proj_livelink={project.livelink}
                        />
                        <ul className="tools-used">
                            {
                              project.tooltags.map((tool) => {
                                return (
                                  <li className="tools-used-li" key={tool.id}>{tool.tag}</li>
                                );         
                              })
                            }
                        </ul>
                    </div>
                      
                    {/* <div className='proj-desc'>
                        {
                        project.description.map((desc) =>
                          <p key={desc.id} className='proj-desc-p'>{desc.p}</p>
                        )
                        }
                    </div>
                    <div className='next-steps'>
                        <p>Next steps: {project.nextsteps}</p>
                    </div> */}
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
        id
        tag
      }
      description {
        id
        p
      }
      nextsteps
    }
    allFile(filter: {name: {ne: "headshot"}, extension: {in: ["jpg", "png"]}}) {
        pictures: nodes {
          name
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
            )
          }
        }
      }
  }`

export default ProjectTemplate
