import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <header className='header'>
      <NavBar />
    </header>
    <div className='container'>
      <ItemListContainer greeting="Bienvenidos a Utopía Vinos" />
    </div>
    <footer></footer>
    </>
  );
}

export default App;
