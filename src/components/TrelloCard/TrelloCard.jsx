import React from 'react';
import './TrelloCard.scss';
import { Draggable } from 'react-beautiful-dnd';

const TrelloCard = ({text, id, index}) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          ref= {provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          >
          <div className='cartascss'>
            {text}
          </div>
        </div>
      )}
    
    </Draggable>
  );
};

export default TrelloCard;