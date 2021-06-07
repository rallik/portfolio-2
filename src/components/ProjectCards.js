import React from 'react';
import Card from './Card';
import { mergeJsonPhoto } from '../utils/mergeJsonPhoto';

const ProjectCards = (props) => {
    console.log(props)
    const { location, data } = props;
    const cardImgs = data.cardImgs.nodes;
    const projectCards = data.projectCards.nodes;
    // console.log(cardImgs)
    // console.log(projectCards)

    // const combinedCards = []
    // let tempimg;

    // //Todo -> error checking this loop
    // // projectCards.map((card) => {
    // //     cardImgs.forEach((img) => {
    // //         if (img.base === card.cardimg.img) {
    // //             tempimg = img
    // //             card = {tempimg, ...card}
    // //         }
    // //     })
        
    // // })

    // for (let proj = 0; proj < projectCards.length; proj++) {
    //     let cardid = projectCards[proj].cardimg.img.split(".")[0];
    //     combinedCards.push({
    //         ...projectCards[proj],
    //         ...(cardImgs.find((img) => img.base.split(".")[0] === cardid))
    //     });
    // }

    const combinedCards = mergeJsonPhoto(projectCards, cardImgs);
    console.log(combinedCards)
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
                combinedCards.map((card) => {
                    return (
                        <Card key={card.id} data={card} />
                    )
                })
            }
        </div>
    )
}

export default ProjectCards
