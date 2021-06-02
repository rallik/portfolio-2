import React from 'react'
import Card from './Card'

const ProjectCards = (props) => {
    console.log(props)
    const { location, data } = props;
    const cardImgs = data.cardImgs.nodes;
    const projectCards = data.projectCards.nodes;
    console.log(cardImgs)
    console.log(projectCards)

    // const combinedCards = []
    let tempimg;

    //Todo -> error checking this loop
    projectCards.map((card) => {
        cardImgs.forEach((img) => {
            if (img.base === card.cardimg.img) {
                tempimg = img
                card = {tempimg, ...card}
            }
        })
        
    })
    console.log(projectCards)
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
