import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Tools = () => {
    const query = graphql`
    {
        allSkillsJson {
          nodes {
            skills {
              id
              skill
            }
            new_skills {
              id
              skill
            }
          }
        }
      }
    `
    
    const data = useStaticQuery(query);
    const skills = data.allSkillsJson.nodes[0].skills;
    const new_skills = data.allSkillsJson.nodes[0].new_skills;

    return (
        <React.Fragment>
            <h3 className='tools-header heading-t'>Tools I Love</h3>
            <table className='tools-table'>
                <tbody>
                    <tr>
                    {
                        skills.map((s) => {
                            return (
                                <td className='tools-element' key={s.id}>{s.skill}</td>
                            );
                        })
                    }
                    </tr>
                </tbody>
            </table>
            <h3 className='new-tools-header heading-t'>I've Also Used</h3>
            <table className='new-tools-table'>
                <tbody>
                    <tr>
                    {
                        new_skills.map((s) => {
                            return (
                                <td className='tools-element' key={s.id}>{s.skill}</td>
                            );
                        })
                    }
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default Tools
