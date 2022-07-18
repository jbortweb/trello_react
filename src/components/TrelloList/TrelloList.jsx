import React from "react";
import "./TrelloList.scss";
import TrelloCard from "../TrelloCard/TrelloCard.jsx";
import ButtonAction from "../ButtonAction/ButtonAction";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { deleteListAction, editListAction } from "../../services/redux/action";



    //Creamos la vista de la lista y la funcionalidad para arrastrarla

const TrelloList = ({ title, cards, listID, index, dispatch }) => {

  const [onEdit, setOnEdit] = useState(false);
  const [onTextEdit, setOnTextEdit] = useState(title)

 
  const deleteList = (e)=> {
    dispatch(deleteListAction(listID));
  };
  
  const handleChangeEdit = (e) => {
    setOnTextEdit(e.target.value)
  };

  const saveEdit = () => {
    
    dispatch(editListAction( listID, onTextEdit));
    setOnEdit(false);
  };

  const editList = () => {
    return(
      
      <div className="container-area">
        <div>
          <textarea
            className="listAreaText"
            text = {onTextEdit}
            placeholder= "Ponga el título de su lista"
            autoFocus
            onChange={handleChangeEdit}
          >
          </textarea>
        </div>
        <div>
          <button
            className="edit-buttonList"
            onClick= {saveEdit}
            > Guardar
          </button>
        </div>          
      </div>
    )
  }
  const onlyList = () => {
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
                    <div> 
                      {onEdit ? (
                        editList()
                        ) : (
                          <div className="container-titulo">
                            <h4 className="tarjeta_titulo">
                              {onTextEdit}
                            </h4>
                            <div className="container-edit">
                              <button
                                className="delete-iconList" 
                                onMouseDown={(deleteList)}
                                title = 'Delete'>
                                X
                              </button>
                              <EditIcon
                                className="edit-iconList"
                                onClick= {() => setOnEdit(true)}/>
                            </div>
                          </div>
                      )}
                        <div>
                    </div>
                      {React.Children.toArray(cards.map((card, index) => (
                          <TrelloCard
                          text={card.text}
                          key={card.id}
                          index={index}
                          id={card.id}
                          listID = {listID}
                        />
                        )))}
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
  }
  return (
    onlyList()
  );
};
  export default connect()(TrelloList);
