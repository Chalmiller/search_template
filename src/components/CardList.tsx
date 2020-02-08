import React from 'react';
import Card from './Card';

interface IRobots {
    id: number,
    name: string,
    email: string
}
const CardList = ({ robots }: { robots: Array<IRobots> }) => {
    const cardComponent = robots.map((user, i) => {
        return (
            <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} />
            );
        })
    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList