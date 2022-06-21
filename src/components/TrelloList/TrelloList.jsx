import React from "react";
import './TrelloList.scss';
import TrelloCard from '../TrelloCard/TrelloCard.jsx';

const TrelloList = ({title, cards}) => {
    return(
        <div className="container">
            <h4 className='tarjeta_titulo'>
                {title}
            </h4>
            <div>
                {cards.map(card => <TrelloCard text={card.text}/>)}
            </div>
        </div>
    )
}

export default TrelloList;