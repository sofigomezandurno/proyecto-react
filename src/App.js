
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer  regards={"Bienvenidos a Cosmética Cba"}/>
        <Footer/>

    </div>
  );
}

export default App;
