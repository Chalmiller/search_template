import React from 'react';

interface CardStatelessProps {
    name: string,
    email: string,
    id: number
}
const Card: React.SFC<CardStatelessProps> = (props) => {
    const { name, email, id } = props
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}props.id?size=200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;