import './App.css';
import { Component } from 'react';
import TrelloList from './components/TrelloList/TrelloList.jsx';
import Header from './components/Header/Header.jsx';
import { connect } from 'react-redux';


class App extends Component{
  render() {  
    const {lists} = this.props;
    return (
      <div>
        <div className='cabecera'>
          <Header/>
        </div>
          <div className='panel'>
          {lists.map(list => (
          <TrelloList title= {list.title} cards = {list.cards} key={list.id}/>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect (mapStateToProps)(App);
