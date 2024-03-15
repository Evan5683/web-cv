import React from 'react';

function Card({ card, onFlip }) {
    return (
        <div className='card' onClick={() => onFlip(card)}>
            {card.isFlipped ? <span className="material-icons">{card.value}</span> : <div className="card-back">?</div>}
        </div>
    );
}

export default Card;
