import React from 'react';
import Card from './Card';
import { mergeJsonPhoto } from '../utils/mergeJsonPhoto';

const ProjectCards = (props) => {
    console.log(props)
    const { location, data } = props;
    console.log(location)
    const cardImgs = data.cardImgs.nodes;
    const projectCards = data.projectCards.nodes;

    const combinedCards = mergeJsonPhoto(projectCards, cardImgs);
    console.log(combinedCards)

    const pageorhome = location.pathname.includes("projects")

    return (
        <div className={pageorhome ? 'project-card-list' : 'home-list project-card-list'}>
            {
                combinedCards.map((card) => {
                    return (
                        <Card key={card.id} data={card} page={pageorhome} />
                    )
                })
            }
        </div>
    )
}

export default ProjectCards
