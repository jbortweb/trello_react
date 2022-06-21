import React from "react";
import './TrelloList.scss';

const TrelloList = ({title}) => {
    return(
        <div className="container">
        <h4>{title}</h4>
        </div>
    )
}

export default TrelloList;