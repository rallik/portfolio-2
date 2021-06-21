import React from 'react';
import Card from './Card';
import { mergeJsonPhoto } from '../utils/mergeJsonPhoto';

const ProjectCards = (props) => {
    console.log(props)
    const { location, data } = props;
    const cardImgs = data.cardImgs.nodes;
    const projectCards = data.projectCards.nodes;

    const combinedCards = mergeJsonPhoto(projectCards, cardImgs);
    console.log(combinedCards)


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
