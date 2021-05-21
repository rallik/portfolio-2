import React from 'react'
import Card from './Card'

const ProjectCards = () => {
    const cards = [
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
        <React.Fragment>
            {
                cards.map((c) => {
                    return (
                        <Card key={c.key} cardclass={c.cardclass} header={c.header} />
                    )
                })
            }
        </React.Fragment>
    )
}

export default ProjectCards
