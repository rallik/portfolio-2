import React from 'react'
import Card from './Card'

const ProjectCards = () => {
    const cards = [
        {
            key: 1,
            value: 'a'
        },
        {
            key: 2,
            value: 'b'
        },
        {
            key: 3,
            value: 'c'
        }]
    return (
        <div>
            {
                cards.map((c) => {
                    return (
                        <Card key={c.key} value={c.value} />
                    )
                })
            }
        </div>
    )
}

export default ProjectCards
