import React from "react";
import './TrelloList.scss';
import TrelloCard from '../TrelloCard/TrelloCard.jsx';

const TrelloList = ({title}) => {
    return(
        <div className="container">
            <h4 className='tarjeta_titulo'>
                {title}
            </h4>
            <div>
                <TrelloCard/>
            </div>
        </div>
    )
}

export default TrelloList;