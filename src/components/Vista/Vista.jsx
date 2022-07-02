import React from 'react';
<<<<<<< HEAD
import './Vista.scss';
import TrelloList from "../../components/TrelloList/TrelloList.jsx";
import Header from "../../components/Header/Header.jsx";
import { connect } from "react-redux";
import ButtonAction from "../../components/ButtonAction/ButtonAction";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../../services/redux/action";

const Vista = (props) => {

    //Funcion de drop and drag
=======
import TrelloList from "../TrelloList/TrelloList.jsx";
import Header from "../Header/Header.jsx";
import { connect } from "react-redux";
import ButtonAction from "../ButtonAction/ButtonAction";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../../services/redux/action";
import './Vista.scss';

const Vista = (props) => {
    const { lists } = props;
>>>>>>> master

    const onDragEnd = (result) => {
      const { destination, source, draggableId, type } = result;
  
      if (!destination) {
        return;
      }
      props.dispatch(
        sort(
          source.droppableId,
          destination.droppableId,
          source.index,
          destination.index,
          draggableId,
          type
        )
      );
    };
<<<<<<< HEAD

    // Generamos la vista de la cabecera y de las listas que vayamos añadiendo
  
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='App'>
=======
  
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
>>>>>>> master
          <div>
            <Header />
          </div>
          <Droppable droppableId="all-list" direction="horizontal" type="list">
            {(provided) => (
              <div
                className="panel"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
<<<<<<< HEAD
                {list.map((list, index) => (
=======
                {lists.map((list, index) => (
>>>>>>> master
                  <TrelloList
                    listID={list.id}
                    title={list.title}
                    cards={list.cards}
                    key={list.id}
                    index={index}
                  />
                ))}
                {provided.placeholder}
                <ButtonAction list />              
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  };
  
  const mapStateToProps = (state) => ({
    lists: state.lists,
<<<<<<< HEAD
    cards:state.cards
  });
  

export default connect(mapStateToProps)(Vista)
=======
  });
  
  export default connect(mapStateToProps)(Vista);
  
>>>>>>> master
