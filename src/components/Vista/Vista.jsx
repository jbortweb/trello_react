import React from 'react';
import TrelloList from "../TrelloList/TrelloList.jsx";
import Header from "../Header/Header.jsx";
import { connect } from "react-redux";
import ButtonAction from "../ButtonAction/ButtonAction";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../../services/redux/action";
import './Vista.scss';

const Vista = (props) => {
    const { lists } = props;

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
  
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
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
                {lists.map((list, index) => (
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
  });
  
  export default connect(mapStateToProps)(Vista);
  