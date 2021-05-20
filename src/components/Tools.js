import React from 'react'
import skills from '../assets/data/skills'
import StickyHeader from './StickyHeaders'


const Tools = () => {
    const { aboutRef, isSticky } = StickyHeader();

    return (
        <React.Fragment>
            
            {/* <h3 className='tools-header' ref={aboutRef}>Tools</h3> */}
            <h3 className={isSticky ? 'tools-header stuck' : 'tools-header unstuck'} >Tools</h3>
            <table className='tools-table' ref={aboutRef}>
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
        </React.Fragment>
    )
}

export default Tools
