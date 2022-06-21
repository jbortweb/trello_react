import './App.css';
import TrelloList from './components/TrelloList/TrelloList.jsx';
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <div>
      <div className='cabecera'>
        <Header/>
      </div>
      <TrelloList title= {'Hola que tal'}/>
    </div>
  );
}

export default App;
