import React from 'react'
import skills from '../assets/data/skills'

const Tools = () => {
    return (
        <React.Fragment>
            <h3 className='tools-header'>Tools</h3>
            <table className='tools-table'>
                {
                    skills.map((s) => {
                        return (
                            <td className='tools-element' key={s.id}>{s.skill}</td>
                        );
                    })
                }
            </table>
        </React.Fragment>
    )
}

export default Tools
