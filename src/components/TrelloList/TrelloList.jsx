import React from "react";
import './TrelloList.scss';
import TrelloCard from '../TrelloCard/TrelloCard.jsx';
import ButtonAction from "../ButtonAction/ButtonAction";
import { Droppable } from 'react-beautiful-dnd';


const TrelloList = ({title, cards, listID}) => {
    return(
        <Droppable droppableId ={String(listID)}>
            {provided => (
                <div
                ref= {provided.innerRef}
                {...provided.droppableProps}
                >
                    <div 
                    className="container"              
                    >
                        <h4 className='tarjeta_titulo'>
                            {title}
                        </h4>
                        <div>
                            {cards.map((card, index) => 
                                <TrelloCard 
                                    text={card.text}
                                    key={card.id}
                                    index={index}
                                    id={card.id}
                                />
                            )}
                            {provided.placeholder}
                            <ButtonAction listID = {listID}/>
                        </div>
                        
                    </div>
                </div>
            )}
            
        </Droppable>
    );
};

export default TrelloList;