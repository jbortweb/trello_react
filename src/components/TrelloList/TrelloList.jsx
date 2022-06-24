import React from "react";
import './TrelloList.scss';
import TrelloCard from '../TrelloCard/TrelloCard.jsx';
import ButtonAction from "../ButtonAction/ButtonAction";

const TrelloList = ({title, cards, listID}) => {
    return(
        <div className="container">
            <h4 className='tarjeta_titulo'>
                {title}
            </h4>
            <div>
                {cards.map(card => <TrelloCard text={card.text} key={card.id}/>)}
                <ButtonAction listID = {listID}/>
            </div>
        </div>
    )
}

export default TrelloList;