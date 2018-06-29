import React from 'react';
import './tachyons.css';
import './Card.css';
const Card = ({id,name,email}) => {
    return(
        <div className='tc bg-light-blue dib br0 pa0 ma3 r grow bw0 shadow-5 sh'>
            <img alt="robots" src={`https://robohash.org/${id}?10x10`}/>
            <text>
            <h2>{name}</h2>
            <h3>{email}</h3>
            </text>
        </div>

    );
}

export default Card;