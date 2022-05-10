
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <NavBar/>
    <Routes>
        <Route exact path='/' element={<ItemListContainer  regards={"Bienvenidos a Cosmética Cba"}/>}/>
        <Route exact path='/Item' element={<ItemDetailContainer/>}/>

    </Routes>
    </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
