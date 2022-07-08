import React from "react";
import "./TrelloCard.scss";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { deleteCardAction } from "../../services/redux/action";
import EditIcon from '@mui/icons-material/Edit';

        //Creamos la vista de la tarea y la funcionalidad para arrastrarla

const TrelloCard = ({ text, id, index, listID, dispatch }) => {

  const deleteCard = (e)=> {
    dispatch(deleteCardAction(id, listID));
  }
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          className="container-carta"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className='container-tarea'>
            <p className="cartascss">
            {text}
            </p>
            <div className="container-edit">
              <button
                className="delete-iconCard" 
                onMouseDown={(deleteCard)}
                title = 'Delete'>
                X
              </button>
              <EditIcon
              className="edit-iconCard"
              title = 'Edit'/>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default connect()(TrelloCard);
