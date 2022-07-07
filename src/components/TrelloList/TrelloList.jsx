import React from "react";
import "./TrelloList.scss";
import TrelloCard from "../TrelloCard/TrelloCard.jsx";
import ButtonAction from "../ButtonAction/ButtonAction";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";

    //Creamos la vista de la lista y la funcionalidad para arrastrarla

const TrelloList = ({ title, cards, listID, index }) => {
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {(provided) => (
        <div 
        {...provided.draggableProps} 
        ref={provided.innerRef} 
        {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listID)}>
            {(provided) => (
              <div 
              ref={provided.innerRef} 
              {...provided.droppableProps}>
                <div className="container">
                  <h4 className="tarjeta_titulo">{title}</h4>
                  <div>
                    {cards.map((card, index) => (
                      <TrelloCard
                       text={card.text}
                       key={card.id}
                       index={index}
                       id={card.id}
                       listID = {listID}
                     />
                     ))}
                    {provided.placeholder}
                    <ButtonAction listID={listID} />
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};
  export default connect()(TrelloList);
