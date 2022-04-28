
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer  regards={"Bienvenidos a Cosmética Cba"}/>
        <ItemCount initial={1} stock={20}/>
        <Footer/>

    </div>
  );
}

export default App;
