
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home"
import { Cart } from './components/Cart';
import GlobalStateContext from './context/GlobalStateContext';
import { Formulario } from './components/Formulario';
import Categoria from './components/Categorias';


function App() {
  return (
    <div className="App">
      <GlobalStateContext>
    <BrowserRouter>
        <NavBar/>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/cosmeticos' element={<ItemListContainer />}/>
        <Route exact path='/Item' element={<ItemDetailContainer/>}/>
        <Route exact path='/Item/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/Categoria/:id' element={<Categoria/>}/>
        <Route exact path='/Cart' element={<Cart />}/>
        <Route exact path='/Formulario' element={<Formulario />}/>

    </Routes>
    </BrowserRouter>
        <Footer/>
    </GlobalStateContext>
    </div>
  );
}

export default App;
