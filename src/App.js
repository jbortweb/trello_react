import './App.css';
import TrelloList from './components/TrelloList.jsx';
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <div>
      <div className='cabecera'>
        <Header/>
      </div>
      <TrelloList/>
    </div>
  );
}

export default App;
