import './App.css';
import TrelloList from './components/TrelloList/TrelloList.jsx';
import Header from './components/Header/Header.jsx';
import { connect } from 'react-redux';
import ButtonAction from './components/ButtonAction/ButtonAction';
import { DragDropContext } from 'react-beautiful-dnd';

const App = (props) => {   
    const {lists} = props;

    function onDragEnd() {
      console.log ('Arrastre finalizado');
      return;
    };
    return (
      <DragDropContext onDragEnd={onDragEnd()}>
        <div>
          <div className='cabecera'>
            <Header/>
          </div>
          <div className='panel'>
            {lists.map(list => (
            <TrelloList 
              listID= {list.id} 
              title= {list.title} 
              cards = {list.cards} 
              key={list.id}
            />
            ))}
            <ButtonAction list/>
          </div>
        </div>
      </DragDropContext>
    );
  }


const mapStateToProps = state => ({
  lists: state.lists
});

export default connect (mapStateToProps)(App);
