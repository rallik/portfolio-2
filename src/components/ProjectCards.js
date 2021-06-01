import React from 'react'
import Card from './Card'

const ProjectCards = (props) => {
    const { location, cards } = props;
    const cards2 = [
        {
            key: 1,
            cardclass: 'a',
            header: 'PhotoWeather'
        },
        {
            key: 2,
            cardclass: 'b',
            header: 'MeterFinder'
        }]
    return (
        <div className='project-card-list'>
            {
                cards2.map((c) => {
                    return (
                        <Card key={c.key} cardclass={c.cardclass} header={c.header} />
                    )
                })
            }
        </div>
    )
}

export default ProjectCards
